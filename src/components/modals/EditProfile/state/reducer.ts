import { ProfileDto } from 'models/user';
import { AvatarOptions } from './types';

export enum ProfileFormActions {
  SET_PROFILE = 'SET_PROFILE',
  LOAD_IMAGE = 'LOAD_IMAGE',
  SET_ERRORS = 'SET_ERRORS',
  START_API_CALL = 'START_API_CALL',
  FINISH_API_CALL = 'FINISH_API_CALL',
}

export interface ProfileFormState {
  profile: ProfileDto;
  image: File;
  imagePreview: string;
  errors: any;
  savingProfile: boolean;
}

export default function profileFormReducer(
  state: ProfileFormState,
  action,
): ProfileFormState {
  const { type, payload } = action;

  switch (type as ProfileFormActions) {
    case ProfileFormActions.SET_PROFILE:
      return { ...state, profile: payload };
    case ProfileFormActions.LOAD_IMAGE:
      return {
        ...state,
        ...payload,
        profile: {
          ...state.profile,
          avatar: AvatarOptions.PHOTO,
        },
      };
    case ProfileFormActions.SET_ERRORS:
      return { ...state, errors: payload, savingProfile: false };
    case ProfileFormActions.START_API_CALL:
      return { ...state, savingProfile: true };
    case ProfileFormActions.FINISH_API_CALL:
      return { ...state, savingProfile: false };
    default:
      return state;
  }
}
