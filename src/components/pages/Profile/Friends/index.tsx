import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import { Option, Options } from 'components/base-components/Options';
import UsersList from 'components/experience/UsersList';
import FriendActions from './FriendActions';
import { UsersCard } from './styled';

enum UserType {
  FRIENDS = 'FRIENDS',
  PENDING = 'PENDING',
}

const queryMap = {
  [UserType.FRIENDS]: {
    key: QueryKey.FETCH_MY_FRIENDS,
    action: usersApi.listMyFriends,
  },
  [UserType.PENDING]: {
    key: QueryKey.FETCH_MY_PENDING,
    action: usersApi.listMyPending,
  },
};

const Friends: FunctionComponent = () => {
  const { push } = useHistory();
  const [userType, setUserType] = useState<UserType>(UserType.FRIENDS);
  const { key, action } = queryMap[userType];
  const { isLoading, data: response, error } = useQuery(key, action);

  const goToProfile = useCallback((friend: UserModel) => {
    push(`/app/user/${friend.id}`);
  }, []);

  return (
    <UsersCard>
      <Options
        color="accent"
        margin="0 0 24px auto"
        value={userType}
        onChange={setUserType}
      >
        <Option value={UserType.FRIENDS} label="Friends" />
        <Option value={UserType.PENDING} label="Pending" />
      </Options>
      <UsersList
        loading={isLoading}
        errored={!!error}
        errorMessage="We couldn't load your friends."
        users={response?.data.results}
        onClick={goToProfile}
        userActions={FriendActions}
      />
    </UsersCard>
  );
};

export default Friends;
