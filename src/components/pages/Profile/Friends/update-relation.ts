import usersApi from 'api/users';
import { NotificationType, showNotification } from 'notifications';
import { QueryKey } from 'components/providers/Query';

export enum Actions {
  MUTE,
  UNMUTE,
  BLOCK,
  UNFRIEND,
}

const actionsMap = {
  [Actions.MUTE]: usersApi.muteFriend,
  [Actions.UNMUTE]: usersApi.unMuteFriend,
  [Actions.BLOCK]: usersApi.blockFriend,
  [Actions.UNFRIEND]: usersApi.unFriend,
};

export default function updateRelation(friend: string, action: Actions, queryClient) {
  const apiAction = actionsMap[action];

  apiAction(friend)
    .then(() => {
      queryClient.invalidateQueries(QueryKey.FETCH_MY_FRIENDS);
    })
    .catch(() => {
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    });
}
