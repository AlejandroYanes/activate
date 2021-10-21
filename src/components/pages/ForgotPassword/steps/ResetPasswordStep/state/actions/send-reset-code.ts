import { NotificationType, showNotification } from 'activate-components';
import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { getUserInfo } from 'helpers';
import { Actions } from '../reducer';

export default function sendResetCode(dispatch) {
  return () => {
    dispatch({ type: Actions.START_CALLING_API });

    const onSuccess = () => {
      dispatch({ type: Actions.FINISH_CALLING_API });
    };

    const onError = (response: ApiErrorResponse) => {
      const { errorType, validationErrors } = response;

      if (errorType === ApiErrorType.VALIDATION) {
        return dispatch({
          type: Actions.SET_ERRORS,
          payload: validationErrors,
        });
      }

      dispatch({ type: Actions.FINISH_CALLING_API });
      showNotification({
        type: NotificationType.ERROR,
        message: 'There is been an issue sending the reset password code.',
      });
    };

    const { email } = getUserInfo();

    return authApi.sendResetPasswordEmail(email)
      .then(onSuccess)
      .catch(onError);
  };
}
