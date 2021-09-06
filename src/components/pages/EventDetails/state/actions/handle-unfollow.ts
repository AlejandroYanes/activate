import { SetStateAction } from 'react';
import { EventModel } from 'models/event';
import eventsApi from 'api/events';
import { notifyEventChannel } from 'event-center';
import { NotificationType, showNotification } from 'notifications';
import { EventState } from '../';

export default function handleUnfollow(
  event: EventModel,
  setState: (state: SetStateAction<EventState>) => void,
) {
  return () => {
    const { id } = event;

    const onSuccess = () => {
      setState((old) => ({ ...old, isBooked: false, showUnfollowModal: false }));
      notifyEventChannel('EVENT_UNFOLLOWED');
    };

    const onError = () => {
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    };

    return eventsApi.unfollow(id)
      .then(onSuccess)
      .catch(onError);
  }
}
