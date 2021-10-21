import { AxiosResponse } from 'axios';
import { NotificationType, showNotification } from 'activate-components';
import authApi from 'api/auth';
import { UserInfo } from 'models/user';
import { getUserInfo } from 'helpers';
import { Actions, ResetPasswordFormValue } from '../reducer';

export default function resetPassword(
  dispatch,
  formValue:  ResetPasswordFormValue,
  updateUserInfo,
  push,
) {
  return () => {
    dispatch({ type: Actions.START_CALLING_API });
    const { verificationCode, newPassword } = formValue;

    const onSuccess = (response: AxiosResponse<UserInfo>) => {
      const { data } = response;
      updateUserInfo(data);
      push('/app');
      showNotification({
        type: NotificationType.SUCCESS,
        message: 'Your password has been updated, welcome',
      });
    };

    const onError = () => {
      dispatch({ type: Actions.FINISH_CALLING_API });
      showNotification({
        type: NotificationType.ERROR,
        message: 'There has been an issue updating your password',
      });
    };

    const { email } = getUserInfo();

    return authApi.resetPassword({verificationCode, newPassword, email})
      .then(onSuccess)
      .catch(onError);
  };
}
