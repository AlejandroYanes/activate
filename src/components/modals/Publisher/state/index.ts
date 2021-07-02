import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';

export enum Tabs {
  EVENTS = 'Events',
  FOLLOWERS = 'Followers',
}

export default function usePublisherState() {
  const [activeTab, setActiveTab] = useState(Tabs.EVENTS);

  const { location: { state } } = useHistory();
  const publisherId = (state as any)?.id;
  const { isLoading, data: response, error } = useQuery(
    [QueryKey.FETCH_PUBLISHER, publisherId],
    () => usersApi.findPublisher(publisherId),
    { enabled: !!publisherId },
  );

  return {
    state: {
      activeTab,
      isLoading,
      publisher: response?.data,
      errored: !!error || !publisherId,
    },
    actions: {
      setActiveTab,
    },
  };
}
