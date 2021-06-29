import usersApi from 'api/users';
import { NotificationType, showNotification } from 'notifications';
import { QueryKey } from 'components/providers/Query';

enum Actions {
  MUTE,
  UNMUTE,
  BLOCK,
  UNFOLLOW,
}

export const actions: Actions[] = [
  Actions.MUTE,
  Actions.UNMUTE,
  Actions.BLOCK,
  Actions.UNFOLLOW,
];

const actionsMap = {
  [Actions.MUTE]: usersApi.mutePublisher,
  [Actions.UNMUTE]: usersApi.unMutePublisher,
  [Actions.BLOCK]: usersApi.blockPublisher,
  [Actions.UNFOLLOW]: usersApi.unFollow,
};

export default function updateRelation(friend: string, action: Actions, queryClient) {
  const apiAction = actionsMap[action];

  apiAction(friend)
    .then(() => {
      queryClient.invalidateQueries(QueryKey.FETCH_MY_PUBLISHERS);
    })
    .catch(() => {
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    });
}
