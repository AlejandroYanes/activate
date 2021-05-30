import { useCallback, useReducer } from 'react';
import { useAtomicSet } from 'helpers';
import { useAuthActions } from 'components/providers/Auth';
import verifyUser from './actions/verify-user';
import reducer, { State, Actions } from './reducer';

export * from './rules';

const initialState: State = {
  formValue: { code: '' } as any,
  errors: {},
  callingAPI: false,
};

export default function useVerificationState(goNextStep: () => void) {
  const { login } = useAuthActions();
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    actions: {
      setFormValue: useAtomicSet(dispatch, Actions.SET_FORM_VALUE),
      setErrors: useAtomicSet(dispatch, Actions.SET_ERRORS),
      verifyUser: useCallback(
        verifyUser(dispatch, state.formValue, login, goNextStep),
        [state.formValue],
      ),
    },
  };
}
