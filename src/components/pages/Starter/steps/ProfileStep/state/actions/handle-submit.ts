import { ProfileDto } from 'models/user';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { validateEntity } from 'helpers';
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

    const onResponse = (response: ApiErrorResponse) => {
      if (response && response.errorType === ApiErrorType.VALIDATION) {
        dispatch({
          type: ProfileStepActions.SET_ERRORS,
          payload: response.validationErrors,
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
      .then(onResponse);
  };
}
