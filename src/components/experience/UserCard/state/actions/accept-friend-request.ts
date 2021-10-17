import { NotificationType, showNotification } from 'activate-components';
import { ConsumerModel } from 'models/user';
import usersApi from 'api/users';
import { notifyEventChannel } from 'event-center';

export default function acceptFriendRequest(user: ConsumerModel, setSate) {
  return () => {
    const { id, name } = user;
    setSate({
      isPending: false,
      isPendingForMe: false,
      isMyFriend: true,
    });

    const onSuccess = () => {
      showNotification({
        type: NotificationType.SUCCESS,
        title: 'You are now friend with',
        message: name,
      });
      notifyEventChannel('ACCEPTED_FRIEND_REQUEST');
    };

    const onError = () => {
      setSate({
        isPending: false,
        isPendingForMe: true,
        isMyFriend: false,
      });
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    };

    return usersApi.acceptFriendRequest(id)
      .then(onSuccess)
      .catch(onError);
  };
}
