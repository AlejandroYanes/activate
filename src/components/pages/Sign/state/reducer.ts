import { AuthCredentials } from 'models/user';

export enum SignStateActions {
  SET_SIGN_ACTION = 'SET_SIGN_ACTION',
  SET_CREDENTIALS = 'SET_CREDENTIALS',
  SET_ERRORS = 'SET_ERRORS',
  START_CALLING_API = 'START_CALLING_API',
  FINISH_CALLING_API = 'FINISH_CALLING_API',
}

export enum SignAction {
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up'
}

export interface SignState {
  signAction: SignAction;
  credentials: AuthCredentials;
  errors: any;
  callingApi: boolean;
}

export default function signStateReducer(state: SignState, action): SignState {
  const { type, payload } = action;

  switch (type as SignStateActions) {
    case SignStateActions.SET_CREDENTIALS:
      return { ...state, credentials: payload };
    case SignStateActions.SET_SIGN_ACTION:
      return { ...state, signAction: payload };
    case SignStateActions.SET_ERRORS:
      return { ...state, errors: payload, callingApi: false };
    case SignStateActions.START_CALLING_API:
      return { ...state, callingApi: true };
    case SignStateActions.FINISH_CALLING_API:
      return { ...state, callingApi: false };
    default:
      return state;
  }
}

