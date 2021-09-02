import { SocialAuthCredentials } from 'models/user';

export enum SocialSignStateActions {
  START_CALLING_API = 'START_CALLING_API',
  FINISH_CALLING_API = 'FINISH_CALLING_API',
}

export interface SocialSignInState {
  credentials: SocialAuthCredentials;
  callingApi: boolean;
}

export default function socialSignInStateReducer(
  state: SocialSignInState,
  action
): SocialSignInState {
  const { type } = action;

  switch (type as SocialSignStateActions) {
    case SocialSignStateActions.START_CALLING_API:
      return { ...state, callingApi: true };
    case SocialSignStateActions.FINISH_CALLING_API:
      return { ...state, callingApi: false };
    default:
      return state;
  }
}

