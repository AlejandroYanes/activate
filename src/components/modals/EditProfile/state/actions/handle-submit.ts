import {
  NotificationType,
  showNotification,
  validateEntity,
} from 'activate-components';
import authApi from 'api/auth';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { ProfileDto, UserInfo } from 'models/user';
import { profileRules } from '../rules';
import { ProfileFormActions } from '../reducer';
import { AvatarOptions } from '../types';

export default function handleSubmit(
  dispatch,
  profile: ProfileDto,
  image: File,
  updateUserInfo: (userInfo: UserInfo) => void,
  closeModal: () => void,
) {
  return () => {
    const { hasErrors, errors } = validateEntity(profile, profileRules);

    if (hasErrors) {
      return dispatch({
        type: ProfileFormActions.SET_ERRORS,
        payload: errors,
      });
    }

    dispatch({
      type: ProfileFormActions.START_API_CALL,
    });

    const onProfileUpdated = (response) => {
      if (profile.avatar === AvatarOptions.PHOTO && image) {
        return authApi.updateAvatar(image);
      }
      return response;
    };

    const onSuccess = (response) => {
      showNotification({
        type: NotificationType.SUCCESS,
        message: 'Your profile has been updated.',
      });
      updateUserInfo(response.data);
      closeModal();
    }

    const onError = (response: ApiErrorResponse) => {
      if (response.errorType === ApiErrorType.VALIDATION) {
        dispatch({
          type: ProfileFormActions.SET_ERRORS,
          payload: response.validationErrors,
        });
      } else {
        dispatch({
          type: ProfileFormActions.FINISH_API_CALL,
        });
        showNotification({
          type: NotificationType.ERROR,
          message: 'There has is been an issue with your profile',
        });
      }
    };

    const { avatar, ...rest } = profile;
    const profileImage =  !!image ? AvatarOptions.PHOTO : undefined;
    const payload = {
      ...rest,
      avatar: avatar === AvatarOptions.PHOTO ? profileImage : avatar,
    };

    return authApi.updateProfile(payload)
      .then(onProfileUpdated)
      .then(onSuccess)
      .catch(onError);
  };
}
