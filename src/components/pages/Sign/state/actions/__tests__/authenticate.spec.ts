/* eslint-disable max-len */
import authApi from 'api/auth';
import { ApiErrorType } from 'api/base';
import { AuthCredentials } from 'models/user';
import { validateEntity } from 'helpers';
import { NotificationType, showNotification } from 'notifications';
import { validationRules } from '../../rules';
import { SignAction, SignStateActions } from '../../reducer';
import authenticate from '../authenticate';

jest.mock('api/auth');
jest.mock('notifications', () => ({
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  }
}));

const dispatchMock = jest.fn();
const setUserInfoMock = jest.fn();

describe('Sign page - authenticate action', () => {
  beforeEach(() => {
    // @ts-ignore
    authApi.signIn.mockClear();
    // @ts-ignore
    authApi.signUp.mockClear();
    dispatchMock.mockClear();
    setUserInfoMock.mockClear();
  });

  it('should validate and dispatch with errors if the credentials are not valid', async () => {
    const credentials: AuthCredentials = {
      email: 'invalid.email',
      password: 'weakPassword',
    };

    await authenticate(
      dispatchMock,
      setUserInfoMock,
      credentials,
      SignAction.SIGN_IN,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: SignStateActions.SET_ERRORS,
      payload: validateEntity(credentials, validationRules).errors,
    });
    expect(authApi.signIn).not.toHaveBeenCalled();
    expect(authApi.signUp).not.toHaveBeenCalled();
    expect(setUserInfoMock).not.toHaveBeenCalled();
  });

  it('should call the API to sign-in and set user info on success', async () => {
    // @ts-ignore
    authApi.signIn.mockResolvedValue({
      data: {
        sub: 'user-id',
        token: 'token',
      },
    });
    const credentials: AuthCredentials = {
      email: 'valid@email.com',
      password: 'Str0n9P4$$0rd',
    };

    await authenticate(
      dispatchMock,
      setUserInfoMock,
      credentials,
      SignAction.SIGN_IN,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: SignStateActions.START_CALLING_API,
    });
    expect(authApi.signIn).toHaveBeenCalled();
    expect(setUserInfoMock).toHaveBeenCalledWith({
      sub: 'user-id',
      token: 'token',
    });
  });

  it('should call the API to sign-up and set validation errors on fail', async () => {
    // @ts-ignore
    authApi.signUp.mockRejectedValue({
      errorType: ApiErrorType.VALIDATION,
      validationErrors: {
        email: 'error',
        password: 'error',
      },
    });

    const credentials: AuthCredentials = {
      email: 'valid@email.com',
      password: 'Str0n9P4$$0rd',
    };

    await authenticate(
      dispatchMock,
      setUserInfoMock,
      credentials,
      SignAction.SIGN_UP,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: SignStateActions.START_CALLING_API,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: SignStateActions.SET_ERRORS,
      payload: {
        email: 'error',
        password: 'error',
      },
    });
    expect(authApi.signUp).toHaveBeenCalled();
    expect(setUserInfoMock).not.toHaveBeenCalled();
  });

  it('should call the API to sign-up and show a notification on fail', async () => {
    // @ts-ignore
    authApi.signUp.mockRejectedValue({
      errorType: ApiErrorType.ERROR,
      errorMessage: 'error message',
    });

    const credentials: AuthCredentials = {
      email: 'valid@email.com',
      password: 'Str0n9P4$$0rd',
    };

    await authenticate(
      dispatchMock,
      setUserInfoMock,
      credentials,
      SignAction.SIGN_UP,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: SignStateActions.START_CALLING_API,
    });
    expect(authApi.signUp).toHaveBeenCalled();
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There is been an issue trying to log you in',
    });
    expect(setUserInfoMock).not.toHaveBeenCalled();
  });
});
