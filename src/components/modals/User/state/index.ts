import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';

export enum Tabs {
  EVENTS = 'Events',
  FOLLOWING = 'Following',
  FRIENDS = 'Friends',
}

export default function useUserState() {
  const [activeTab, setActiveTab] = useState(Tabs.EVENTS);

  const { location: { state } } = useHistory();
  const userId = (state as any)?.id;
  const { isLoading, data: response, error } = useQuery(
    [QueryKey.FETCH_CONSUMER, userId],
    () => usersApi.findConsumer(userId),
    { enabled: !!userId },
  );

  return {
    state: {
      activeTab,
      isLoading,
      user: response?.data,
      errored: !!error,
    },
    actions: {
      setActiveTab,
    },
  };
}
