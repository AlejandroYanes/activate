import { ProfileDto } from 'models/user';
import { AvatarOptions } from './types';

export enum ProfileStepActions {
  SET_PROFILE = 'SET_PROFILE',
  LOAD_IMAGE = 'LOAD_IMAGE',
  SET_ERRORS = 'SET_ERRORS',
  START_CALLING_API = 'START_CALLING_API',
  FINISH_CALLING_API = 'FINISH_CALLING_API',
}

export interface ProfilePayload extends ProfileDto {
  image?: File;
}

export interface ProfileStepState {
  profile: ProfileDto;
  image: File;
  imagePreview: string;
  errors: any;
  callingAPI: boolean;
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
      return { ...state, errors: payload, callingAPI: false };
    case ProfileStepActions.START_CALLING_API:
      return { ...state, callingAPI: true };
    case ProfileStepActions.FINISH_CALLING_API:
      return { ...state, callingAPI: false };
    default:
      return state;
  }
}
