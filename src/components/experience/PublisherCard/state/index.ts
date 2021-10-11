import { useCallback, useState } from 'react';
import { PublisherModel } from 'models/user';
import amIFollowing from './actions/am-i-following';
import follow from './actions/follow';

export default function usePublisherState(publisher: PublisherModel) {
  const { followerStatus } = publisher;
  const [following, setFollowing] = useState(() => amIFollowing(followerStatus));

  return {
    state: {
      following,
    },
    actions: {
      follow: useCallback(follow(publisher, setFollowing), [publisher]),
    },
  };
}
