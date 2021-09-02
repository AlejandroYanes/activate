import { useEffect, useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import socialSignInStateReducer, { SocialSignInState } from './reducer';
import authenticate from './actions/authenticate';

export * from './reducer';

const { REACT_APP_API_URL } = process.env;

const initialState: SocialSignInState = {
  credentials: {} as any,
  callingApi: false,
};

export default function useSocialSignInPageState() {
  const { search } = useLocation();
  const { provider } = useParams<any>();
  const [state, dispatch] = useReducer(socialSignInStateReducer, initialState);

  useEffect(() => {
    if(!search) {
      window.location.href = `${REACT_APP_API_URL}auth/social/${provider}`
    } else {
      authenticate(dispatch)({provider, urlParams: search})
    }
  }, [search, provider])

  return { state };
}
