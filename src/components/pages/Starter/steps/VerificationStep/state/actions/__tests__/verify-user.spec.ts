/* eslint-disable max-len */
import authApi from 'api/auth';
import { ApiErrorType } from 'api/base';
import { NotificationType, showNotification } from 'notifications';
import verifyUser from '../verify-user';
import { Actions } from '../../reducer';

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
const goNextStepMock = jest.fn();

describe('Starter page - verify user action', () => {
  beforeEach(() => {
    // @ts-ignore
    authApi.verify.mockClear();
    dispatchMock.mockClear();
    setUserInfoMock.mockClear();
    goNextStepMock.mockClear();
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
