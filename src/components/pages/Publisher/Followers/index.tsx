import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { ConsumerModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import FollowerActions from './FollowerActions';
import { UsersCard } from '../styled';

const Followers = () => {
  const { publisherId } = useParams<any>();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    [QueryKey.FETCH_FOLLOWERS_OF, publisherId],
    () => usersApi.listFollowersOf(publisherId),
    { enabled: !!publisherId },
  );
  const { push } = useHistory();

  const goToProfile = useCallback((friend: ConsumerModel) => {
    push(`/app/user/${friend.id}`);
  }, []);

  return (
    <UsersCard>
      <UsersList
        loading={isLoading}
        errored={!!error}
        users={response?.data}
        onClick={goToProfile}
        userActions={FollowerActions}
      />
    </UsersCard>
  );
};

export default Followers;
