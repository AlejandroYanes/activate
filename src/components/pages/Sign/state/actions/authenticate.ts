import authApi from 'api/auth';
import { SignStateActions } from '../reducer';
import { validateEntity } from '../../../../../helpers';
import { validationRules } from '../rules';

export default function authenticate(dispatch, login, credentials) {
  return () => {
    // const action = (
    //   signAction === SignAction.SIGN_IN
    //     ? authApi.signIn
    //     : authApi.signUp
    // );

    const { errors, hasErrors } = validateEntity(credentials, validationRules);

    if (hasErrors) {
      return dispatch({
        type: SignStateActions.SET_ERRORS,
        payload: errors,
      });
    }

    setTimeout(() => {
      dispatch({
        type: SignStateActions.START_CALLING_API,
      });
    }, 250);

    authApi.signIn({ ...credentials } as any)
      .then((response) => {
        const { data: { email, sub } } = response;
        login({ sub, email });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
