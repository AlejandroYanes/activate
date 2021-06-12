import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import { UsersCard } from './styled';
import { SpinningDots } from '../../../base-components/Loaders';

const emptyAction = () => undefined;

const Following: FunctionComponent = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.FETCH_MY_PUBLISHERS, usersApi.listMyPublishers);

  return (
    <UsersCard>
      <UsersList users={response?.data} onClick={emptyAction} />
    </UsersCard>
  );
};

export default Following;
