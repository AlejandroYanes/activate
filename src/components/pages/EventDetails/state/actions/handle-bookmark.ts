import { SetStateAction } from 'react';
import { EventModel } from 'models/event';
import eventsApi from 'api/events';
import { notifyEventChannel } from 'event-center';
import { NotificationType, showNotification } from 'notifications';
import { EventState } from '../';

export default function handleBookmark(
  event: EventModel,
  state: EventState,
  setState: (state: SetStateAction<EventState>) => void,
) {
  return () => {
    const { isBooked } = state;

    if (isBooked) {
      return setState((old) => ({
        ...old,
        isBooked,
        showUnfollowModal: true,
      }));
    }

    const { id, name } = event;

    const onSuccess = () => {
      notifyEventChannel('EVENT_FOLLOWED');
      showNotification({
        type: NotificationType.SUCCESS,
        title: 'You are following the event:',
        message: name,
      });
      setState((old) => ({ ...old, isBooked: true, showUnfollowModal: false }));
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
