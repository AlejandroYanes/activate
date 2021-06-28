import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { ConsumerModel } from 'models/user';
import { useEventCenterUpdate } from 'event-center';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import FollowerActions from './FollowerActions';
import { UsersCard } from '../styled';
import { PublisherProvider } from './context';

const Followers = () => {
  const { publisherId } = useParams<any>();
  const {
    isLoading,
    data: response,
    error,
    refetch,
  } = useQuery(
    [QueryKey.FETCH_FOLLOWERS_OF, publisherId],
    () => usersApi.listFollowersOf(publisherId),
    { enabled: !!publisherId },
  );

  useEventCenterUpdate('FETCH_PUBLISHER_FOLLOWERS', refetch);

  const { push } = useHistory();
  const goToProfile = useCallback((friend: ConsumerModel) => {
    push(`/app/user/${friend.id}`);
  }, []);

  return (
    <UsersCard>
      <PublisherProvider publisher={publisherId}>
        <UsersList
          loading={isLoading}
          errored={!!error}
          users={response?.data}
          onClick={goToProfile}
          userActions={FollowerActions}
        />
      </PublisherProvider>
    </UsersCard>
  );
};

export default Followers;
