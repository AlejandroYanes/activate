import { AxiosResponse } from 'axios';
import interestsApi from 'api/interests';
import authApi from 'api/auth';
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
        message: 'Your profile has been all set, welcome',
      });
    };

    const onError = () => {
      dispatch({ type: Actions.FINISH_CALLING_API });
      showNotification({
        type: NotificationType.ERROR,
        message: 'There has been an issue updating your profile',
      });
    };

    const initialAction = interests.length > 0
      ? interestsApi.update
      : () => Promise.resolve(null);

    return initialAction(interests)
      .then(updateProfile)
      .then(onSuccess)
      .catch(onError);
  };
}
