import { NotificationType, showNotification } from 'activate-components';
import { ConsumerModel } from 'models/user';
import usersApi from 'api/users';
import { notifyEventChannel } from 'event-center';

export default function sendFriendRequest(user: ConsumerModel, setSate) {
  return () => {
    setSate({
      isPending: true,
      isPendingForMe: false,
      isMyFriend: false,
    });

    const onSuccess = () => {
      showNotification({
        type: NotificationType.SUCCESS,
        message: 'Friend request sent',
      });
      notifyEventChannel('SENT_FRIEND_REQUEST');
    };

    const onError = () => {
      setSate({
        isPending: false,
        isPendingForMe: false,
        isMyFriend: false,
      });
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    };

    return usersApi.sendFriendRequest(user.id)
      .then(onSuccess)
      .catch(onError);
  };
}
