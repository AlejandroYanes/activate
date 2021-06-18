import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';

export enum Tabs {
  EVENTS = 'Events',
  FOLLOWERS = 'Followers',
}

export default function usePublisherState() {
  const [activeTab, setActiveTab] = useState(Tabs.EVENTS);

  const { publisherId } = useParams<any>();
  const { isLoading, data: response, error } = useQuery(
    QueryKey.FETCH_PUBLISHER,
    () => usersApi.findPublisher(publisherId),
    { enabled: !!publisherId },
  );

  return {
    state: {
      activeTab,
      isLoading,
      publisher: response?.data,
      errored: !!error,
    },
    actions: {
      setActiveTab,
    },
  };
}
