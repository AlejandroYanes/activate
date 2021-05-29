export enum ChangePasswordActions {
  SET_FORM_VALUE = 'SET_FORM_VALUE',
  SET_ERRORS = 'SET_ERRORS',
  START_CALLING_API = 'START_CALLING_API',
  FINISH_CALLING_API = 'FINISH_CALLING_API',
}

export interface ChangePasswordModel {
  current: string;
  newPassword: string;
  confirm: string;
}

export interface ChangePasswordState {
  formValue: ChangePasswordModel;
  errors: any;
  callingAPI: boolean;
}

export default function changePasswordReducer(
  state: ChangePasswordState,
  action,
): ChangePasswordState {
  const { type, payload } = action;

  switch (type as ChangePasswordActions) {
    case ChangePasswordActions.SET_FORM_VALUE:
      return { ...state, formValue: payload };
    case ChangePasswordActions.SET_ERRORS:
      return { ...state, errors: payload, callingAPI: false };
    case ChangePasswordActions.START_CALLING_API:
      return { ...state, callingAPI: true };
    case ChangePasswordActions.FINISH_CALLING_API:
      return { ...state, callingAPI: false };
    default:
      return state;
  }
}
