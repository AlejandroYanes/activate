import { useCallback, useState } from 'react';
import { ConsumerModel } from 'models/user';
import resolveStatus from './actions/resolve-status';
import sendFriendRequest from './actions/send-friend-request';
import acceptFriendRequest from './actions/accept-friend-request';

export default function useUserState(user: ConsumerModel) {
  const [state, setState] = useState(() => resolveStatus(user.relationStatus));

  return {
    state,
    actions: {
      sendFriendRequest: useCallback(sendFriendRequest(user, setState), []),
      acceptFriendRequest: useCallback(acceptFriendRequest(user, setState), []),
    },
  };
}
