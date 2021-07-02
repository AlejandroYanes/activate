import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { ConsumerModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import { ConsumerActions } from 'components/experience/UserActions';
import { UsersCard } from '../styled';

const Followers = () => {
  const { push } = useHistory();
  const { publisherId } = useParams<any>();
  const queryKey = [QueryKey.FETCH_FOLLOWERS_OF, publisherId];

  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    queryKey,
    () => usersApi.listFollowersOf(publisherId),
    { enabled: !!publisherId },
  );

  const goToProfile = useCallback((friend: ConsumerModel) => {
    push(`/app/user/${friend.id}`);
  }, []);

  const action = useCallback(({ user }) => (
    <ConsumerActions user={user} queryKey={queryKey} />
  ), [publisherId]);

  return (
    <UsersCard>
      <UsersList
        loading={isLoading}
        errored={!!error}
        errorMessage="We couldn't load the publishers list."
        users={response?.data.results}
        onClick={goToProfile}
        userActions={action}
      />
    </UsersCard>
  );
};

export default Followers;
