import { AxiosResponse } from 'axios';
import { UserInfo, VerificationLevel } from 'models/user';
import { ApiErrorResponse } from 'api/base';
import authApi from 'api/auth';
import { ProfilePayload, StarterActions } from '../reducer';

export default function updateProfile(dispatch, updateUserInfo) {
  return (profile: ProfilePayload) => {
    dispatch({ type: StarterActions.START_API_CALL });
    const { image, ...rest } = profile;

    const onProfileUpdated = (response) => {
      if (profile.usePhoto) {
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
