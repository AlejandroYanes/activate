import { PublisherModel } from 'models/user';
import usersApi from 'api/users';
import { notifyEventChannel } from 'event-center';
import { NotificationType, showNotification } from 'notifications';

export default function follow(publisher: PublisherModel, setFollowing) {
  return () => {
    const { id, name } = publisher;
    setFollowing(true);

    const onSuccess = () => {
      showNotification({
        type: NotificationType.SUCCESS,
        title: 'You now follow',
        message: name,
      });
      notifyEventChannel('PUBLISHER_FOLLOWED');
    };

    const onError = () => {
      setFollowing(false);
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    };

    return usersApi.follow(id)
      .then(onSuccess)
      .catch(onError);
  };
}
