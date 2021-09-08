import { useCallback, useEffect, useReducer } from 'react';
import { SocialProvider } from 'models/user';
import { useAtomicSet } from 'helpers/state-management';
import { useAuthActions } from 'components/providers/Auth';
import signStateReducer, { SignAction, SignState, SignStateActions } from './reducer';
import authenticate from './actions/authenticate';
import handleSocialSign from './actions/handle-social-sign-in';
import handleLogIn from './actions/handle-log-in';

export * from './reducer';
export * from './rules';

const initialState: SignState = {
  signAction: SignAction.SIGN_IN,
  credentials: {} as any,
  errors: {},
  callingApi: false,
};

export default function useSignPageState() {
  const { login } = useAuthActions();
  const [state, dispatch] = useReducer(signStateReducer, initialState);

  const  handleLogInEventListener = useCallback(handleLogIn(login), [])

  useEffect(() => {
    window.addEventListener('message', handleLogInEventListener);

    return () => window.removeEventListener('message', handleLogInEventListener);
  }, [])

  return {
    state,
    actions: {
      setSignAction: useAtomicSet(dispatch, SignStateActions.SET_SIGN_ACTION),
      setCredentials: useAtomicSet(dispatch, SignStateActions.SET_CREDENTIALS),
      setErrors: useAtomicSet(dispatch, SignStateActions.SET_ERRORS),
      authenticate: useCallback(
        authenticate(dispatch, login, state.credentials, state.signAction),
        [state.credentials, state.signAction],
      ),
      signInWithGoogle: useCallback(handleSocialSign(SocialProvider.Google), []),
      signInWithFacebook: useCallback(handleSocialSign(SocialProvider.Facebook), []),
    },
  };
}
