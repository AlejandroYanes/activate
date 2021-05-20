import { useCallback, useReducer } from 'react';
import { ProfileDto } from 'models/user';
import { useAtomicSet } from 'helpers';
import profileStepReducer, { ProfileStepActions } from './reducer';
import { handleAvatarChange } from './actions/handle-avatar-change';
import { handleImageChange } from './actions/handle-image-change';
import handleSubmit from './actions/handle-submit';

export * from './reducer';
export * from './rules';
export * from './types';

export default function useProfileStepState(fileInputRef, onNext) {
  const [state, dispatch] = useReducer(profileStepReducer, {
    profile: {} as ProfileDto,
    errors: {},
    image: undefined,
    imagePreview: undefined,
  });

  const { profile, image } = state;

  return {
    state,
    action: {
      setProfile: useAtomicSet(dispatch, ProfileStepActions.SET_PROFILE),
      setErrors: useAtomicSet(dispatch, ProfileStepActions.SET_ERRORS),
      handleAvatarChange: useCallback(handleAvatarChange(fileInputRef), []),
      handleImageChange: useCallback(handleImageChange(dispatch), []),
      handleSubmit: useCallback(
        handleSubmit(dispatch, profile, image, onNext),
        [profile, image],
      ),
    },
  };
}
