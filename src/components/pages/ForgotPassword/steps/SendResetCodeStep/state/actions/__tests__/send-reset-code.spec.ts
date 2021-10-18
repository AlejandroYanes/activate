/* eslint-disable max-len */
import authApi from 'api/auth';
import { ApiErrorType } from 'api/base';
import { NotificationType, showNotification } from 'notifications';
import sendResetCode from '../send-reset-code';
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
const goNextStepMock = jest.fn();

describe('Forgot Password page - Send reset code step - send reset code action', () => {
  beforeEach(() => {
    // @ts-ignore
    authApi.sendResetPasswordEmail.mockClear();
    dispatchMock.mockClear();
    goNextStepMock.mockClear();
  });

  it('should call the API and dispatch the go_next_step action if succeeded', async () => {
    // @ts-ignore
    authApi.sendResetPasswordEmail.mockResolvedValue({
      data: { sub: 'user-id', token: 'token' },
    });
    await sendResetCode(dispatchMock, { email: 'user.name@mail.com' }, goNextStepMock)();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: Actions.START_CALLING_API,
    });
  });

  it('should call the API and show a notification if failed', async () => {
    // @ts-ignore
    authApi.sendResetPasswordEmail.mockRejectedValue({
      errorType: ApiErrorType.ERROR,
      errorMessage: 'error message',
    });
    await sendResetCode(dispatchMock, { email: 'user.name@mail.com' }, goNextStepMock)();

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: Actions.START_CALLING_API,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: Actions.FINISH_CALLING_API,
    });
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There is been an issue sending the reset password code.',
    });
  });
});
