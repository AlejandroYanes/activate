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

export default function handleSubmit(
  dispatch,
  profile: ProfileDto,
  image: File,
  onNext: (profile: ProfilePayload) => Promise<ApiErrorResponse | null>) {
  return () => {
    const { hasErrors, errors } = validateEntity(profile, profileRules);

    if (hasErrors) {
      dispatch({
        type: ProfileStepActions.SET_ERRORS,
        payload: errors,
      });
    } else {
      const payload = { ...profile, usePhoto: !!image, image };
      onNext(payload)
        .catch((error: ApiErrorResponse) => {
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
        });
    }
  };
}
