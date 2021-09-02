import { useCallback, useEffect, useReducer } from 'react';
import { ProfileDto } from 'models/user';
import { useAtomicSet } from 'helpers';
import { useAuthActions } from 'components/providers/Auth';
import { handleAvatarChange } from './actions/handle-avatar-change';
import { handleImageChange } from './actions/handle-image-change';
import handleSubmit from './actions/handle-submit';
import profileStepReducer, { ProfileStepActions } from './reducer';
import {
  handlePopulateProfile
} from './actions/handle-populate-profile';

export * from './reducer';
export * from './rules';
export * from './types';

const initialState = {
  profile: {
    name: '',
    userName: '',
    avatar: '',
  } as ProfileDto,
  errors: {},
  image: undefined,
  imagePreview: undefined,
  callingAPI: false,
  loadingData: true,
};

export default function useProfileStepState(fileInputRef, goNextStep) {
  const { login } = useAuthActions();
  const [state, dispatch] = useReducer(profileStepReducer, initialState);
  const { profile, image } = state;

  useEffect(() => {
    handlePopulateProfile(dispatch)
  }, [])

  return {
    state,
    action: {
      setProfile: useAtomicSet(dispatch, ProfileStepActions.SET_PROFILE),
      setErrors: useAtomicSet(dispatch, ProfileStepActions.SET_ERRORS),
      handleAvatarChange: useCallback(handleAvatarChange(fileInputRef), []),
      handleImageChange: useCallback(handleImageChange(dispatch), []),
      handleSubmit: useCallback(
        handleSubmit(dispatch, profile, image, login, goNextStep),
        [profile, image],
      ),
    },
  };
}
