import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import PublisherActions from './PublisherActions';
import { Modals } from '../../index';

const Following: FunctionComponent = () => {
  const { push } = useHistory();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.FETCH_MY_PUBLISHERS, usersApi.listMyPublishers);

  const handleClick = useCallback((publisher: UserModel) => {
    push(Modals.PUBLISHER, { id: publisher.id });
  }, []);

  return (
    <UsersList
      loading={isLoading}
      errored={!!error}
      errorMessage="We couldn't load the publishers you are currently following."
      users={response?.data}
      onClick={handleClick}
      userActions={PublisherActions}
    />
  );
};

export default Following;
