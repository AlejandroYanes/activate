import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Option, Options } from 'activate-components';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import FriendActions from './FriendActions';

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
    push(`/app/user/${friend.userName}`);
  }, []);

  return (
    <>
      <Options
        margin="12px 0 24px 0"
        fullWidth
        color="accent"
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
    </>
  );
};

export default Friends;
