import {
  NotificationType,
  showNotification,
  validateEntity,
} from 'activate-components';
import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { storeUserInfo } from 'helpers';
import { validationRules } from '../rules';
import { Actions } from '../reducer';

export default function sendResetCode(dispatch, formValue, goNextStep) {
  return () => {
    const { hasErrors, errors } = validateEntity(formValue, validationRules);

    if (hasErrors) {
      return dispatch({ type: Actions.SET_ERRORS, payload: errors });
    }

    dispatch({ type: Actions.START_CALLING_API });

    const onSuccess = () => {
      storeUserInfo({ email: formValue.email } as any)
      goNextStep();
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

    return authApi.sendResetPasswordEmail(formValue.email)
      .then(onSuccess)
      .catch(onError);
  };
}
