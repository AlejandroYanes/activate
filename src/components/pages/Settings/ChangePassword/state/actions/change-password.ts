import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { NotificationType, showNotification } from 'notifications';
import { validateEntity } from 'helpers';
import { passwordRules } from '../rules';
import { ChangePasswordActions, ChangePasswordModel } from '../reducer';

export default function changePassword(
  dispatch,
  formValue: ChangePasswordModel,
  closeModal,
) {
  return () => {
    const {
      hasErrors,
      errors,
    } = validateEntity(formValue, passwordRules);

    if (hasErrors) {
      return dispatch({
        type: ChangePasswordActions.SET_ERRORS,
        payload: errors,
      });
    }

    dispatch({ type: ChangePasswordActions.START_CALLING_API });

    const onSuccess = () => {
      showNotification({
        type: NotificationType.SUCCESS,
        message: 'Your password has been updated',
      });
      closeModal();
    };

    const onError = (response: ApiErrorResponse) => {
      const { errorType, validationErrors } = response;
      if (errorType === ApiErrorType.VALIDATION) {
        dispatch({
          type: ChangePasswordActions.SET_ERRORS,
          payload: validationErrors,
        });
      } else {
        dispatch({ type: ChangePasswordActions.FINISH_CALLING_API });
        showNotification({
          type: NotificationType.ERROR,
          message: `
            Your new password could not be set,
            please keep using your current one.
          `
        });
      }
    };

    const payload = {
      current: formValue.current,
      newPassword: formValue.newPassword,
    };

    return authApi.updatePassword(payload)
      .then(onSuccess)
      .catch(onError);
  };
}
