import { AxiosResponse } from 'axios';
import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { UserInfo, VerificationLevel } from 'models/user';
import { NotificationType, showNotification } from 'notifications';
import { ProfilePayload, StarterActions } from '../reducer';

export default function updateProfile(dispatch, updateUserInfo) {
  return (profile: ProfilePayload) => {
    dispatch({ type: StarterActions.START_API_CALL });
    const { image, ...rest } = profile;

    const onProfileUpdated = (response) => {
      if (!!profile.image) {
        return authApi.updateAvatar(image);
      }
      return response;
    };

    const onSuccess = (response: AxiosResponse<UserInfo>) => {
      const { data } = response;
      updateUserInfo(data);
      dispatch({ type: StarterActions.GO_NEXT_STEP });
    };

    const onError = (error: ApiErrorResponse) => {
      dispatch({ type: StarterActions.FINISH_API_CALL });

      if (error.errorType === ApiErrorType.ERROR) {
        return showNotification({
          type: NotificationType.ERROR,
          message: 'There has is been an issue with your profile',
        });
      }

      return error;
    };

    const payload = {
      ...rest,
      verificationLevel: VerificationLevel.USER_INFO_ADDED,
    };

    return authApi.updateProfile(payload)
      .then(onProfileUpdated)
      .then(onSuccess)
      .catch(onError);
  };
}
