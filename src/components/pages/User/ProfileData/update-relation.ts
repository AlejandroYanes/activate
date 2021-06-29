import usersApi from 'api/users';
import { NotificationType, showNotification } from 'notifications';
import { QueryKey } from 'components/providers/Query';

enum Actions {
  SEND_REQUEST,
  ACCEPT_REQUEST,
  MUTE,
  UNMUTE,
  BLOCK,
  UNFRIEND,
}

export const actions: Actions[] = [
  Actions.SEND_REQUEST,
  Actions.ACCEPT_REQUEST,
  Actions.MUTE,
  Actions.UNMUTE,
  Actions.BLOCK,
  Actions.UNFRIEND,
];

const actionsMap = {
  [Actions.SEND_REQUEST]: usersApi.sendFriendRequest,
  [Actions.ACCEPT_REQUEST]: usersApi.acceptFriendRequest,
  [Actions.MUTE]: usersApi.muteFriend,
  [Actions.UNMUTE]: usersApi.unMuteFriend,
  [Actions.BLOCK]: usersApi.blockFriend,
  [Actions.UNFRIEND]: usersApi.unFriend,
};

export default function updateRelation(
  consumer: string,
  action: Actions,
  queryClient,
) {
  const apiAction = actionsMap[action];

  apiAction(consumer)
    .then(() => {
      queryClient.invalidateQueries([QueryKey.FETCH_CONSUMER, consumer]);
    })
    .catch(() => {
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    });
}
