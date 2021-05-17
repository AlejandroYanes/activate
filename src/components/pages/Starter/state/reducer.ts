import { ProfileDto } from 'models/user';

export enum StarterActions {
  SET_STEP = 'SET_STEP',
  GO_NEXT_STEP = 'GO_NEXT_STEP',
  GO_PREV_STEP = 'GO_PREV_STEP',
  START_API_CALL = 'START_API_CALL',
  FINISH_API_CALL = 'FINISH_API_CALL',
}

export interface ProfilePayload extends ProfileDto {
  image?: File;
}

export interface StarterState {
  activeStep: number;
  callingAPI: boolean;
}

export default function starterReducer(state: StarterState, action): StarterState {
  const { type, payload } = action;

  switch (type as StarterActions) {
    case StarterActions.SET_STEP:
      return  { ...state, activeStep: payload };
    case StarterActions.GO_NEXT_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
        callingAPI: false,
      };
    case StarterActions.GO_PREV_STEP:
      return { ...state, activeStep: state.activeStep - 1 };
    case StarterActions.START_API_CALL:
      return { ...state, callingAPI: true };
    case StarterActions.FINISH_API_CALL:
      return { ...state, callingAPI: false };
    default:
      return state;
  }
}
