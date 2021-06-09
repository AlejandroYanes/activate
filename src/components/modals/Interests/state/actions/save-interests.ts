import interestsApi from 'api/interests';
import { ApiErrorResponse, ApiErrorType } from 'api/base';
import { NotificationType, showNotification } from 'notifications';
import { Actions } from '../reducer';

export default function saveInterests(
  dispatch,
  interests: string[],
  closeModal,
) {
  return () => {
    if (interests.length === 0) {
      return dispatch({
        type: Actions.SET_ERROR,
        payload: 'You need to select some interests',
      });
    }

    dispatch({ type: Actions.START_CALLING_API });

    const onSuccess = () => {
      closeModal();
      showNotification({
        type: NotificationType.SUCCESS,
        message: 'Your interests have been updated, go discover what\'s new',
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
      .then(onSuccess)
      .catch(onError);
  };
}
