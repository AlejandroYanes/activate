import { useCallback, useReducer } from 'react';
import { useAtomicSet } from 'helpers/state-management';
import { useAuthActions } from 'components/providers/Auth';
import signStateReducer, { SignState, SignAction, SignStateActions } from './reducer';
import authenticate from './actions/authenticate';

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

  return {
    state,
    actions: {
      setSignAction: useAtomicSet(dispatch, SignStateActions.SET_SIGN_ACTION),
      setCredentials: useAtomicSet(dispatch, SignStateActions.SET_CREDENTIALS),
      setErrors: useAtomicSet(dispatch, SignStateActions.SET_ERRORS),
      authenticate: useCallback(
        authenticate(dispatch, login, state.credentials),
        [state.credentials],
      ),
    },
  };
}
