import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { ConsumerModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import { ConsumerActions } from 'components/experience/UserActions';

interface Props {
  publisher: string;
}

const Followers: FunctionComponent<Props> = (props) => {
  const { publisher } = props;
  const queryKey = [QueryKey.FETCH_FOLLOWERS_OF, publisher];
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    queryKey,
    () => usersApi.listFollowersOf(publisher),
    { enabled: !!publisher },
  );

  const { push } = useHistory();
  const goToProfile = useCallback((friend: ConsumerModel) => {
    push(`/app/user/${friend.userName}`);
  }, []);

  const action = useCallback(({ user }) => (
    <ConsumerActions user={user} queryKey={queryKey} />
  ), []);

  return (
    <UsersList
      loading={isLoading}
      errored={!!error}
      users={response?.data.results}
      onClick={goToProfile}
      userActions={action}
    />
  );
};

export default Followers;
