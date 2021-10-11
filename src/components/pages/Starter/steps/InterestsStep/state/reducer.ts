export enum Actions {
  SET_INTERESTS = 'SET_INTERESTS',
  START_CALLING_API = 'START_CALLING_API',
  FINISH_CALLING_API = 'FINISH_CALLING_API',
}

export interface State {
  interests: string[];
  callingAPI: boolean;
}

export default function interestsReducer(state: State, action): State {
  const { type, payload } = action;

  switch (type as Actions) {
    case Actions.SET_INTERESTS:
      return { ...state, interests: payload };
    case Actions.START_CALLING_API:
      return { ...state, callingAPI: true };
    case Actions.FINISH_CALLING_API:
      return { ...state, callingAPI: false };
    default:
      return state;
  }
}
