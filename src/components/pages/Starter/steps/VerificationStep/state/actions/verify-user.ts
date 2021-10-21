import { AxiosResponse } from 'axios';
import {
  NotificationType,
  showNotification,
  validateEntity,
} from 'activate-components';
import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { UserInfo } from 'models/user';
import { codeRules } from '../rules';
import { Actions } from '../reducer';

export default function verifyUser(dispatch, formValue, updateUserInfo, goNextStep) {
  return () => {
    const { hasErrors, errors } = validateEntity(formValue, codeRules);

    if (hasErrors) {
      return dispatch({ type: Actions.SET_ERRORS, payload: errors });
    }

    dispatch({ type: Actions.START_CALLING_API });

    const onSuccess = (response: AxiosResponse<UserInfo>) => {
      const { data } = response;
      updateUserInfo(data);
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
        message: `
            There is been an issue verifying your code,
            please make sure it's the one we sent you
          `,
      });
    };

    return authApi.verify(formValue.code)
      .then(onSuccess)
      .catch(onError);
  };
}
