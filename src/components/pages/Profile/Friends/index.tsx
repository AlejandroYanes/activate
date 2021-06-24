import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import FriendActions from './FriendActions';
import { UsersCard } from './styled';

const Friends: FunctionComponent = () => {
  const { push } = useHistory();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.FETCH_MY_FRIENDS, usersApi.listMyFriends);

  const goToProfile = useCallback((friend: UserModel) => {
    push(`/app/user/${friend.id}`);
  }, []);

  return (
    <UsersCard>
      <UsersList
        loading={isLoading}
        errored={!!error}
        errorMessage="We couldn't load your friends."
        users={response?.data}
        onClick={goToProfile}
        userActions={FriendActions}
      />
    </UsersCard>
  );
};

export default Friends;
