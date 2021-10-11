import { AxiosResponse } from 'axios';
import authApi from 'api/auth';
import { SocialAuthCredentials, UserInfo } from 'models/user';
import { SocialSignStateActions } from '../reducer';

export default function authenticate(
  dispatch,
) {
  return (credentials: SocialAuthCredentials) => {
    const { provider, urlParams } = credentials
    dispatch({ type: SocialSignStateActions.START_CALLING_API });

    const onSuccess = (response: AxiosResponse<UserInfo>) => {
      const { data: userInfo } = response;
      if (window.opener) {
        const message = {
          source: 'activate_social_sign.success',
          payload: userInfo,
        };
        window.opener.postMessage(message, '*');
        window.close();
      }
    };

    const onError = () => {
      if (window.opener) {
        const message = {
          source: 'activate_social_sign.error',
          payload: {provider},
        };
        window.opener.postMessage(message, '*');
        window.close();
      }
    };

    const onFinally = () => {
      dispatch({ type: SocialSignStateActions.FINISH_CALLING_API });
    };

    return authApi.socialAuth(provider, urlParams)
      .then(onSuccess)
      .catch(onError)
      .finally(onFinally)
  }
}
