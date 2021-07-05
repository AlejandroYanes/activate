import { SetStateAction } from 'react';
import { NotificationType, showNotification } from 'notifications';
import eventsApi from 'api/events';
import { EventModel } from 'models/event';
import { EventState } from '../';

export default function handleBookmark(
  event: EventModel,
  state: EventState,
  setState: (state: SetStateAction<EventState>) => void,
) {
  return () => {
    const { isBooked } = state;

    if (isBooked) {
      return setState({
        isBooked,
        showUnfollowModal: true,
      });
    }

    const { id, name } = event;

    const onSuccess = () => {
      showNotification({
        type: NotificationType.SUCCESS,
        title: 'Congrats',
        message: `You are now following the event: ${name}`,
      });
      setState({ isBooked: true, showUnfollowModal: false });
    };

    const onError = () => {
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    };

    return eventsApi.follow(id)
      .then(onSuccess)
      .catch(onError);
  };
}
