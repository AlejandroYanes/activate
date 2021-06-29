import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import { Modals } from 'components/modals';
import UsersList from 'components/experience/UsersList';
import PublisherActions from './PublisherActions';
import { ConsumerProvider } from '../context';

interface Props {
  user: string;
}

const Following: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    [QueryKey.FETCH_PUBLISHERS_OF, user],
    () => usersApi.listPublishersOf(user),
    { enabled: !!user },
  );

  const { push } = useHistory();
  const handleClick = useCallback((publisher: UserModel) => {
    push(Modals.PUBLISHER, { id: publisher.id });
  }, []);

  return (
    <ConsumerProvider consumer={user}>
      <UsersList
        loading={isLoading}
        errored={!!error}
        errorMessage="We couldn't load the publishers list."
        users={response?.data}
        onClick={handleClick}
        userActions={PublisherActions}
      />
    </ConsumerProvider>
  );
};

export default Following;
