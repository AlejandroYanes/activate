import { AxiosResponse } from 'axios';
import interestsApi from 'api/interests';
import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { ProfileDto, UserInfo, VerificationLevel } from 'models/user';
import { NotificationType, showNotification } from 'notifications';
import { Actions } from '../reducer';

export default function saveInterests(
  dispatch,
  interests: string[],
  updateUserInfo,
  push,
) {
  return () => {
    if (interests.length === 0) {
      return dispatch({
        type: Actions.SET_ERROR,
        payload: 'You need to select some interests',
      });
    }

    dispatch({ type: Actions.START_CALLING_API });

    const updateProfile = () => {
      return authApi.updateProfile({
        verificationLevel: VerificationLevel.INTERESTS_ADDED,
      } as ProfileDto);
    };

    const onSuccess = (response: AxiosResponse<UserInfo>) => {
      const { data } = response;
      updateUserInfo(data);
      push('/app');
      showNotification({
        type: NotificationType.SUCCESS,
        message: 'Your profile has been all set, enjoy the app',
      });
    };

    const onError = (response: ApiErrorResponse) => {
      const { errorType } = response;

      if (errorType === ApiErrorType.VALIDATION) {
        return dispatch({
          type: Actions.SET_ERROR,
          payload: 'You need to select some interests',
        });
      }

      dispatch({ type: Actions.FINISH_CALLING_API });
      showNotification({
        type: NotificationType.ERROR,
        message: 'There has been an issue setting your interests',
      });
    };

    return interestsApi.update(interests)
      .then(updateProfile)
      .then(onSuccess)
      .catch(onError);
  };
}
