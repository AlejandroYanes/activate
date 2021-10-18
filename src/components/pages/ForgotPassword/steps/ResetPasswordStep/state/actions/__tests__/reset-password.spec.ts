/* eslint-disable max-len */
import authApi from 'api/auth';
import { NotificationType, showNotification } from 'notifications';
import resetPassword from '../reset-password';

const email = 'user.name@mail.com';

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
jest.mock('helpers', () => ({
  getUserInfo: () => ({ email })
}))

const dispatch = jest.fn();
const updateUserInfo = jest.fn();
const push = jest.fn();

const formValue = {
  verificationCode: 123456,
  newPassword: 'NewPassword'
}

describe('Forgot password page - Reset password step - reset password action', () => {
  beforeEach(() => {
    dispatch.mockClear();
    updateUserInfo.mockClear();
    push.mockClear();
    // @ts-ignore
    authApi.resetPassword.mockClear();
    // @ts-ignore
    showNotification.mockClear();
  });

  it('should call the api to reset the user password', async () => {
    // @ts-ignore
    authApi.resetPassword.mockResolvedValue({ data: { id: 'user-id' } });
    await resetPassword(dispatch, formValue, updateUserInfo, push)();

    expect(dispatch).toBeCalledTimes(1);
    expect(authApi.resetPassword).toHaveBeenCalledWith({ ...formValue, email })
    expect(updateUserInfo).toHaveBeenCalledWith({ id: 'user-id' });
    expect(push).toHaveBeenCalledWith('/app');
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      message: 'Your password has been updated, welcome',
    });
  });

  it('should call the api to reset the user password and show an error notification', async () => {
    // @ts-ignore
    authApi.resetPassword.mockRejectedValue({ errorType: 'error' });

    await resetPassword(dispatch, formValue, updateUserInfo, push)();

    expect(dispatch).toBeCalledTimes(2);
    expect(authApi.resetPassword).toHaveBeenCalledWith({ ...formValue, email })
    expect(updateUserInfo).not.toHaveBeenCalled();
    expect(push).not.toHaveBeenCalledWith();
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There has been an issue updating your password',
    });
  });
});
