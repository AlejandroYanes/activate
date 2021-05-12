import { ApiErrorResponse, ErrorType } from 'api/base';
import authApi from 'api/auth';
import { validateEntity } from 'helpers';
import { validationRules } from '../rules';
import { SignAction, SignStateActions } from '../reducer';

export default function authenticate(dispatch, login, credentials, signAction) {
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

    dispatch({
      type: SignStateActions.START_CALLING_API,
    });

    const onSuccess = (response) => {
      const { data: userInfo } = response;
      login(userInfo);
    };

    const onError = (err: ApiErrorResponse) => {
      if (err.errorType === ErrorType.VALIDATION) {
        dispatch({
          type: SignStateActions.SET_ERRORS,
          payload: err.validationErrors,
        });
      } else {
        dispatch({
          type: SignStateActions.SET_ERRORS,
          payload: { signError: err.errorMessage },
        });
      }
    };

    action(credentials)
      .then(onSuccess)
      .catch(onError);
  }
}
