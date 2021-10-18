import { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useAtomicSet } from 'helpers';
import { useAuthActions } from 'components/providers/Auth';
import resetPassword from './actions/reset-password';
import sendResetCode from './actions/send-reset-code';
import reducer, { Actions, State } from './reducer';

export * from './rules';

const initialState: State = {
  formValue: { verificationCode: null, newPassword: '' },
  errors: {},
  callingAPI: false,
};

export default function useResetPasswordState() {
  const { push } = useHistory();
  const { login } = useAuthActions();
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    actions: {
      setFormValue: useAtomicSet(dispatch, Actions.SET_FORM_VALUE),
      setErrors: useAtomicSet(dispatch, Actions.SET_ERRORS),
      resetPassword: useCallback(
        resetPassword(dispatch, state.formValue, login, push),
        [state.formValue],
      ),
      sendResetCode: useCallback(sendResetCode(dispatch), []),
    },
  };
}
