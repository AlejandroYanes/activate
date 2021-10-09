import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import { PublisherActions } from 'components/experience/UserActions';

interface Props {
  user: string;
}

const Following: FunctionComponent<Props> = (props) => {
  const { user: userId } = props;
  const { push } = useHistory();
  const queryKey = [QueryKey.FETCH_PUBLISHERS_OF, userId];
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    queryKey,
    () => usersApi.listPublishersOf(userId),
    { enabled: !!userId },
  );

  const handleClick = useCallback((publisher: UserModel) => {
    push(`/app/publisher/${publisher.userName}`);
  }, []);

  const action = useCallback(({ user }) => (
    <PublisherActions user={user} queryKey={queryKey} />
  ), [userId]);

  return (
    <UsersList
      loading={isLoading}
      errored={!!error}
      errorMessage="We couldn't load the publishers list."
      users={response?.data.results}
      onClick={handleClick}
      userActions={action}
    />
  );
};

export default Following;
