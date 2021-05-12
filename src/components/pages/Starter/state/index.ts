import { useCallback, useReducer } from 'react';
import { UserInfo } from 'models/user';
import { useAuthData } from 'components/providers/Auth';
import { useAtomicCall, useAtomicSet } from 'helpers';
import starterReducer, { StarterActions } from './reducer';
import verifyUser from './actions/verify-user';

export * from './reducer';
export * from './rules';

function initState(userInfo: UserInfo) {
  return {
    activeStep: userInfo.verificationLevel,
    callingAPI: false,
    errors: {},
  };
}

export default function useStarterState() {
  const { userInfo } = useAuthData();
  const [state, dispatch] = useReducer(starterReducer, userInfo, initState);

  return {
    state,
    actions: {
      setActiveStep: useAtomicSet(dispatch, StarterActions.SET_STEP),
      goNextStep: useAtomicCall(dispatch, StarterActions.GO_NEXT_STEP),
      goPrevStep: useAtomicCall(dispatch, StarterActions.GO_PREV_STEP),
      verify: useCallback(verifyUser(dispatch), []),
    },
  };
}
