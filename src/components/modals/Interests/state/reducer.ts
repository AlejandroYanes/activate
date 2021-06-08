export enum Actions {
  SET_INTERESTS = 'SET_INTERESTS',
  SET_ERROR = 'SET_ERROR',
  START_CALLING_API = 'START_CALLING_API',
  FINISH_CALLING_API = 'FINISH_CALLING_API',
}

export interface State {
  interests: string[];
  error: string;
  callingAPI: boolean;
}

export default function interestsReducer(state: State, action) {
  const { type, payload } = action;

  switch (type as Actions) {
    case Actions.SET_INTERESTS:
      return { ...state, interests: payload };
    case Actions.SET_ERROR:
      return { ...state, error: payload, callingAPI: false };
    case Actions.START_CALLING_API:
      return { ...state, callingAPI: true };
    case Actions.FINISH_CALLING_API:
      return { ...state, callingAPI: false };
    default:
      return state;
  }
}
