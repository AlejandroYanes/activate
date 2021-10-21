import { NotificationType, showNotification } from 'activate-components';
import usersApi from 'api/users';

export enum UserType {
  CONSUMER,
  PUBLISHER,
}

export enum Actions {
  FOLLOW,
  SEND_REQUEST,
  ACCEPT_REQUEST,
  REMOVE_REQUEST,
  MUTE,
  UNMUTE,
  BLOCK,
  REMOVE,
}

export const publisherActions: Actions[] = [
  Actions.FOLLOW,
  Actions.MUTE,
  Actions.UNMUTE,
  Actions.BLOCK,
  Actions.REMOVE,
];

export const consumerActions: Actions[] = [
  Actions.SEND_REQUEST,
  Actions.ACCEPT_REQUEST,
  Actions.REMOVE_REQUEST,
  Actions.MUTE,
  Actions.UNMUTE,
  Actions.BLOCK,
  Actions.REMOVE,
];

const actionsMap = {
  [UserType.CONSUMER]: {
    [Actions.SEND_REQUEST]: usersApi.sendFriendRequest,
    [Actions.ACCEPT_REQUEST]: usersApi.acceptFriendRequest,
    [Actions.REMOVE_REQUEST]: usersApi.declineFriendRequest,
    [Actions.MUTE]: usersApi.muteFriend,
    [Actions.UNMUTE]: usersApi.unmuteFriend,
    [Actions.BLOCK]: usersApi.blockFriend,
    [Actions.REMOVE]: usersApi.unfriend,
  },
  [UserType.PUBLISHER]: {
    [Actions.FOLLOW]: usersApi.follow,
    [Actions.MUTE]: usersApi.mutePublisher,
    [Actions.UNMUTE]: usersApi.unmutePublisher,
    [Actions.BLOCK]: usersApi.blockPublisher,
    [Actions.REMOVE]: usersApi.unfollow,
  },
};


export default function updateRelation(
  queryClient,
  queryKey,
  user: string,
  userType: UserType,
  action: Actions,
) {
  const apiAction = actionsMap[userType][action];

  return apiAction(user)
    .then(() => {
      queryClient.invalidateQueries(queryKey);
    })
    .catch(() => {
      showNotification({
        type: NotificationType.ERROR,
        message: 'We couldn\'t complete the request, please try again later.',
      });
    });
}
