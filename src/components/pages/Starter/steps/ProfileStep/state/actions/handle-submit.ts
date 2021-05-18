import { ProfileDto } from 'models/user';
import { ApiErrorResponse, ErrorType } from 'api/base';
import { validateEntity } from 'helpers';
import {
  NotificationType,
  showNotification,
} from 'components/experience/NotificationCenter';
import { ProfilePayload } from 'components/pages/Starter/state';
import { profileRules } from '../rules';
import { ProfileStepActions } from '../reducer';
import { AvatarOptions } from '../types';

export default function handleSubmit(
  dispatch,
  profile: ProfileDto,
  image: File,
  onNext: (profile: ProfilePayload) => Promise<ApiErrorResponse | null>) {
  return () => {
    const { hasErrors, errors } = validateEntity(profile, profileRules);

    if (hasErrors) {
      return dispatch({
        type: ProfileStepActions.SET_ERRORS,
        payload: errors,
      });
    }

    const onError = (error: ApiErrorResponse) => {
      if (!error) return;

      if (error.errorType === ErrorType.VALIDATION) {
        dispatch({
          type: ProfileStepActions.SET_ERRORS,
          payload: errors,
        });
      } else {
        showNotification({
          type: NotificationType.ERROR,
          message: 'There is been an issue with your profile',
        });
      }
    }

    const profileImage = (
      profile.avatar === AvatarOptions.PHOTO
        ? image
        : undefined
    );
    const payload = { ...profile, image: profileImage };

    return onNext(payload)
      .then(onError);
  };
}
