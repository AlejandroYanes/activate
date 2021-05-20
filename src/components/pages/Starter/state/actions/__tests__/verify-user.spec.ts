/* eslint-disable max-len */
import authApi from 'api/auth';
import { ApiErrorType } from 'api/base';
import { NotificationType, showNotification } from 'notifications';
import verifyUser from '../verify-user';
import { StarterActions } from '../../reducer';

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

describe('Starter page - verify user action', () => {
  beforeEach(() => {
    // @ts-ignore
    authApi.verify.mockClear();
    dispatchMock.mockClear();
    setUserInfoMock.mockClear();
  });

  it('should call the API and dispatch the go_next_step action if succeeded', async () => {
    // @ts-ignore
    authApi.verify.mockResolvedValue({
      data: { sub: 'user-id', token: 'token' },
    });
    await verifyUser(dispatchMock, setUserInfoMock)(123456);

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: StarterActions.START_API_CALL,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: StarterActions.GO_NEXT_STEP,
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
    await verifyUser(dispatchMock, setUserInfoMock)(123456);

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: StarterActions.START_API_CALL,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: StarterActions.FINISH_API_CALL,
    });
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'error message',
    });
    expect(setUserInfoMock).not.toHaveBeenCalled();
  });
});
