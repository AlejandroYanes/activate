import { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useAtomicSet } from 'helpers';
import { useAuthActions, useAuthData } from 'components/providers/Auth';
import { handleAvatarChange } from './actions/handle-avatar-change';
import { handleImageChange } from './actions/handle-image-change';
import handleSubmit from './actions/handle-submit';
import initForm from './actions/init-form';
import profileFormReducer, { ProfileFormActions } from './reducer';

export * from './reducer';
export * from './rules';
export * from './types';

export default function useEditProfileState(fileInputRef) {
  const { goBack } = useHistory();
  const { userInfo } = useAuthData();
  const { login } = useAuthActions();
  const [state, dispatch] = useReducer(profileFormReducer, userInfo, initForm);

  const { profile, image } = state;

  return {
    state,
    action: {
      setProfile: useAtomicSet(dispatch, ProfileFormActions.SET_PROFILE),
      setErrors: useAtomicSet(dispatch, ProfileFormActions.SET_ERRORS),
      handleAvatarChange: useCallback(handleAvatarChange(fileInputRef), []),
      handleImageChange: useCallback(handleImageChange(dispatch), []),
      handleSubmit: useCallback(
        handleSubmit(dispatch, profile, image, login, goBack),
        [profile, image],
      ),
    },
  };
}
