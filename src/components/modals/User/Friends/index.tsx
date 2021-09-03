import { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import { ConsumerActions } from 'components/experience/UserActions';

interface Props {
  user: string;
}

const Friends: FunctionComponent<Props> = (props) => {
  const { user: userId } = props;
  const { push } = useHistory();
  const queryKey = [QueryKey.FETCH_FRIENDS_OF, userId];
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    queryKey,
    () => usersApi.listFriendsOf(userId),
    { enabled: !!userId },
  );

  const goToProfile = useCallback((friend: UserModel) => {
    push(`/app/user/${friend.id}`);
  }, []);

  const action = useCallback(({ user }) => (
    <ConsumerActions user={user} queryKey={queryKey} />
  ), [userId]);

  return (
    <UsersList
      loading={isLoading}
      errored={!!error}
      errorMessage="We couldn't load the friends list."
      users={response?.data.results}
      onClick={goToProfile}
      userActions={action}
    />
  );
};

export default Friends;
