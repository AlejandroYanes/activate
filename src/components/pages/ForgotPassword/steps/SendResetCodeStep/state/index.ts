import { useCallback, useReducer } from 'react';
import { useAtomicSet } from 'helpers';
import sendResetCode from './actions/send-reset-code';
import reducer, { State, Actions } from './reducer';

export * from './rules';

const initialState: State = {
  formValue: { email: '' },
  errors: {},
  callingAPI: false,
};

export default function useSendResetCodeState(goNextStep: () => void) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    actions: {
      setFormValue: useAtomicSet(dispatch, Actions.SET_FORM_VALUE),
      setErrors: useAtomicSet(dispatch, Actions.SET_ERRORS),
      sendResetCode: useCallback(
        sendResetCode(dispatch, state.formValue, goNextStep),
        [state.formValue],
      ),
    },
  };
}
