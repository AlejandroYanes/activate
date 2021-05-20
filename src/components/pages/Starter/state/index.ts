import { useCallback, useReducer } from 'react';
import { UserInfo } from 'models/user';
import { useAuthActions, useAuthData } from 'components/providers/Auth';
import { useAtomicCall, useAtomicSet } from 'helpers';
import verifyUser from './actions/verify-user';
import updateProfile from './actions/update-profile';
import starterReducer, { StarterActions } from './reducer';

export * from './reducer';

function initState(userInfo: UserInfo) {
  return {
    activeStep: userInfo.verificationLevel,
    callingAPI: false,
    errors: {},
  };
}

export default function useStarterState() {
  const { userInfo } = useAuthData();
  const { login } = useAuthActions();
  const [state, dispatch] = useReducer(starterReducer, userInfo, initState);

  return {
    state,
    actions: {
      setActiveStep: useAtomicSet(dispatch, StarterActions.SET_STEP),
      goNextStep: useAtomicCall(dispatch, StarterActions.GO_NEXT_STEP),
      goPrevStep: useAtomicCall(dispatch, StarterActions.GO_PREV_STEP),
      verify: useCallback(verifyUser(dispatch, login), []),
      updateProfile: useCallback(updateProfile(dispatch, login), []),
    },
  };
}
