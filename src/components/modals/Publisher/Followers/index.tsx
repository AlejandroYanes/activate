import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { ConsumerModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import { Modals } from 'components/modals';
import UsersList from 'components/experience/UsersList';
import FollowerActions from './FollowerActions';
import { PublisherProvider } from './context';

interface Props {
  publisher: string;
}

const Followers: FunctionComponent<Props> = (props) => {
  const { publisher } = props;
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    [QueryKey.FETCH_FOLLOWERS_OF, publisher],
    () => usersApi.listFollowersOf(publisher),
    { enabled: !!publisher },
  );

  const { push } = useHistory();
  const goToProfile = useCallback((friend: ConsumerModel) => {
    push(Modals.USER, { id: friend.id });
  }, []);

  return (
    <PublisherProvider publisher={publisher}>
      <UsersList
        loading={isLoading}
        errored={!!error}
        users={response?.data}
        onClick={goToProfile}
        userActions={FollowerActions}
      />
    </PublisherProvider>
  );
};

export default Followers;
