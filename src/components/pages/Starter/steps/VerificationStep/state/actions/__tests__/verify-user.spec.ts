/* eslint-disable max-len */
import { NotificationType, showNotification, validateEntity } from 'activate-components';
import authApi from 'api/auth';
import { ApiErrorType } from 'api/base';
import verifyUser from '../verify-user';
import { Actions } from '../../reducer';

jest.mock('activate-components', () => ({
  validateEntity: jest.fn(),
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  },
  RuleType: {
    Required: 'Required',
    MinLength: 'MinLength',
    MaxLength: 'MaxLength',
    Min: 'Min',
    Max: 'Max',
    Email: 'Email',
    WebSite: 'WebSite',
    MatchRegExp: 'MatchRegExp',
  },
  commonRules: {},
}));
jest.mock('api/auth');

const dispatchMock = jest.fn();
const setUserInfoMock = jest.fn();
const goNextStepMock = jest.fn();

describe('Starter page - Verify step - verify user action', () => {
  beforeEach(() => {
    // @ts-ignore
    authApi.verify.mockClear();
    dispatchMock.mockClear();
    setUserInfoMock.mockClear();
    goNextStepMock.mockClear();
    // @ts-ignore
    validateEntity.mockClear();
    // @ts-ignore
    validateEntity.mockReturnValue({
      hasErrors: false,
      errors: null,
    });
  });

  it('should call the API and dispatch the go_next_step action if succeeded', async () => {
    // @ts-ignore
    authApi.verify.mockResolvedValue({
      data: { sub: 'user-id', token: 'token' },
    });
    await verifyUser(dispatchMock, { code: 123456 }, setUserInfoMock, goNextStepMock)();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: Actions.START_CALLING_API,
    });
    expect(setUserInfoMock).toHaveBeenCalledWith({
      sub: 'user-id',
      token: 'token',
    });
  });

  it('should call the API and show a notification if failed', async () => {
    // @ts-ignore
    authApi.verify.mockRejectedValue({
      errorType: ApiErrorType.ERROR,
      errorMessage: 'error message',
    });
    await verifyUser(dispatchMock, { code: 123456 }, setUserInfoMock, goNextStepMock)();

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: Actions.START_CALLING_API,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: Actions.FINISH_CALLING_API,
    });
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: `
            There is been an issue verifying your code,
            please make sure it's the one we sent you
          `,
    });
    expect(setUserInfoMock).not.toHaveBeenCalled();
  });
});
