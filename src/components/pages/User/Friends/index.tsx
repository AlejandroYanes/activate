import { FunctionComponent, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import UsersList from 'components/experience/UsersList';
import { ConsumerActions } from 'components/experience/UserActions';
import { UsersCard } from './styled';

const Friends: FunctionComponent = () => {
  const { push } = useHistory();
  const { userId } = useParams<any>();
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
    push(`/app/user/${friend.userName}`);
  }, []);

  const action = useCallback(({ user }) => (
    <ConsumerActions user={user} queryKey={queryKey} />
  ), [userId]);

  return (
    <UsersCard>
      <UsersList
        loading={isLoading}
        errored={!!error}
        errorMessage="We couldn't load the friends list."
        users={response?.data.results}
        onClick={goToProfile}
        userActions={action}
      />
    </UsersCard>
  );
};

export default Friends;
