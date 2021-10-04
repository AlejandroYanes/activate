import { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useAtomicSet } from 'helpers';
import changePasswordReducer, {
  ChangePasswordActions,
  ChangePasswordState,
} from './reducer';
import changePassword from './actions/change-password';

export * from './rules';

const initialState: ChangePasswordState = {
  formValue: {
    current: '',
    newPassword: '',
    confirm: '',
  },
  callingAPI: false,
  errors: {},
};

export default function useChangePasswordState() {
  const { goBack } = useHistory();
  const [state, dispatch] = useReducer(changePasswordReducer, initialState);

  return {
    state,
    actions: {
      setFormValue: useAtomicSet(dispatch, ChangePasswordActions.SET_FORM_VALUE),
      setErrors: useAtomicSet(dispatch, ChangePasswordActions.SET_ERRORS),
      changePassword: useCallback(
        changePassword(dispatch, state.formValue, goBack),
        [state.formValue],
      ),
    },
  };
}
