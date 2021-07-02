import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { Modals } from 'components/modals';
import { QueryKey } from 'components/providers/Query';
import { Option, Options } from 'components/base-components/Options';
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
    push(Modals.USER, { id: friend.id });
  }, []);

  return (
    <>
      <Options
        margin="12px 0 24px 0"
        highlight
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
        users={response?.data}
        onClick={goToProfile}
        userActions={FriendActions}
      />
    </>
  );
};

export default Friends;
