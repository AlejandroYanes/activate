import React, { FunctionComponent, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import PublisherActions from './PublisherActions';
import { UsersCard } from './styled';
import { ConsumerProvider } from '../context';

const Following: FunctionComponent = () => {
  const { push } = useHistory();
  const { userId } = useParams<any>();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    [QueryKey.FETCH_PUBLISHERS_OF, userId],
    () => usersApi.listPublishersOf(userId),
    { enabled: !!userId },
  );

  const handleClick = useCallback((publisher: UserModel) => {
    push(`/app/publisher/${publisher.id}`);
  }, []);

  return (
    <UsersCard>
      <ConsumerProvider consumer={userId}>
        <UsersList
          loading={isLoading}
          errored={!!error}
          errorMessage="We couldn't load the publishers list."
          users={response?.data}
          onClick={handleClick}
          userActions={PublisherActions}
        />
      </ConsumerProvider>
    </UsersCard>
  );
};

export default Following;
