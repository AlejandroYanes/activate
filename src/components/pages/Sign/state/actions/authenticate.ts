import { AxiosResponse } from 'axios';
import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { AuthCredentials, UserInfo } from 'models/user';
import { NotificationType, showNotification } from 'notifications';
import { validateEntity } from 'helpers';
import { validationRules } from '../rules';
import { SignAction, SignStateActions } from '../reducer';

export default function authenticate(
  dispatch,
  setUserInfo,
  credentials: AuthCredentials,
  signAction: SignAction,
) {
  return () => {
    const action = (
      signAction === SignAction.SIGN_IN
        ? authApi.signIn
        : authApi.signUp
    );

    const { errors, hasErrors } = validateEntity(credentials, validationRules);

    if (hasErrors) {
      return dispatch({
        type: SignStateActions.SET_ERRORS,
        payload: errors,
      });
    }

    dispatch({ type: SignStateActions.START_CALLING_API });

    const onSuccess = (response: AxiosResponse<UserInfo>) => {
      const { data: userInfo } = response;
      setUserInfo(userInfo);
    };

    const onError = (response: ApiErrorResponse) => {
      if (response.errorType === ApiErrorType.VALIDATION) {
        dispatch({
          type: SignStateActions.SET_ERRORS,
          payload: response.validationErrors,
        });
      } else {
        showNotification({
          type: NotificationType.ERROR,
          message: 'There is been an issue trying to log you in',
        });
      }
    };

    return action(credentials)
      .then(onSuccess)
      .catch(onError);
  }
}
