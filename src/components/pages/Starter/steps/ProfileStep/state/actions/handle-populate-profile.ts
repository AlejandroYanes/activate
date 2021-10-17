import { NotificationType, showNotification } from 'activate-components';
import { getUserInfo } from 'helpers';
import { ProfileStepActions } from '../reducer';

async function loadSocialProviderProfileImage(dispatch, avatar, sub) {
  try {
    const res = await fetch(avatar, { method: 'GET' });
    const blob = await res.blob();
    const fileExtension = blob.type.split('/')[1]
    const fileName = `${sub}.${fileExtension}`
    const image = new File([blob], fileName, {type: blob.type});

    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch({
          type: ProfileStepActions.LOAD_IMAGE,
          payload: { image, imagePreview: reader.result },
        });
      };

      reader.readAsDataURL(image);
    }
  } catch {
    dispatch({ type: ProfileStepActions.FINISH_LOADING_DATA });
    showNotification({
      type: NotificationType.ERROR,
      message: `We couldn't load your avatar.`,
    });
  }
}

export async function handlePopulateProfile(dispatch) {
  const { sub, name, lastName, userName, avatar } = getUserInfo()
  dispatch({
    type: ProfileStepActions.SET_PROFILE,
    payload: {name, lastName, userName, avatar}
  });

  if (avatar) {
    await loadSocialProviderProfileImage(dispatch, avatar, sub)
  } else {
    dispatch({ type: ProfileStepActions.FINISH_LOADING_DATA });
  }
}
