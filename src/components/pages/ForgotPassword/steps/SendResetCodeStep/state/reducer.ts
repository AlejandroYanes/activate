export enum Actions {
  SET_FORM_VALUE = 'SET_FORM_VALUE',
  SET_ERRORS = 'SET_ERRORS',
  START_CALLING_API = 'START_CALLING_API',
  FINISH_CALLING_API = 'FINISH_CALLING_API',
}

export interface State {
  formValue: { email: string };
  errors: any;
  callingAPI: boolean;
}

export default function reducer(state: State, action): State {
  const { type, payload } = action;

  switch (type as Actions) {
    case Actions.SET_FORM_VALUE:
      return { ...state, formValue: payload };
    case Actions.SET_ERRORS:
      return { ...state, errors: payload, callingAPI: false };
    case Actions.START_CALLING_API:
      return { ...state, callingAPI: true };
    case Actions.FINISH_CALLING_API:
      return { ...state, callingAPI: false };
    default:
      return state;
  }
}
