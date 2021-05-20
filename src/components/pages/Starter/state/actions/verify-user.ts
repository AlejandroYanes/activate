import { AxiosResponse } from 'axios';
import authApi from 'api/auth';
import { ApiErrorResponse } from 'api/base';
import { UserInfo } from 'models/user';
import { NotificationType, showNotification } from 'notifications';
import { StarterActions } from '../reducer';

export default function verifyUser(dispatch, updateUserInfo) {
  return (code: number) => {
    dispatch({ type: StarterActions.START_API_CALL });

    const onSuccess = (response: AxiosResponse<UserInfo>) => {
      const { data } = response;
      updateUserInfo(data);
      dispatch({ type: StarterActions.GO_NEXT_STEP });
    };

    const onError = (response: ApiErrorResponse) => {
      showNotification({
        type: NotificationType.ERROR,
        message: response.errorMessage,
      });
      dispatch({ type: StarterActions.FINISH_API_CALL });
    };

    return authApi.verify(code)
      .then(onSuccess)
      .catch(onError);
  };
}
