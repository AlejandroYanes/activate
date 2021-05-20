import { ProfileDto } from 'models/user';
import { AvatarOptions } from './types';

export enum ProfileStepActions {
  SET_PROFILE = 'SET_PROFILE',
  LOAD_IMAGE = 'LOAD_IMAGE',
  SET_ERRORS = 'SET_ERRORS',
}

export interface ProfileStepState {
  profile: ProfileDto;
  image: File;
  imagePreview: string;
  errors: any;
}

export default function profileStepReducer(
  state: ProfileStepState,
  action,
): ProfileStepState {
  const { type, payload } = action;

  switch (type as ProfileStepActions) {
    case ProfileStepActions.SET_PROFILE:
      return { ...state, profile: payload };
    case ProfileStepActions.LOAD_IMAGE:
      return {
        ...state,
        ...payload,
        profile: {
          ...state.profile,
          avatar: AvatarOptions.PHOTO,
        },
      };
    case ProfileStepActions.SET_ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
}
