import { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import { Modals } from 'components/modals';
import UsersList from 'components/experience/UsersList';
import { ConsumerActions } from 'components/experience/UserActions';

interface Props {
  user: string;
}

const Friends: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const { push } = useHistory();
  const queryKey = [QueryKey.FETCH_FRIENDS_OF, user];
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    queryKey,
    () => usersApi.listFriendsOf(user),
    { enabled: !!user },
  );

  const goToProfile = useCallback((friend: UserModel) => {
    push(Modals.USER, { id: friend.id });
  }, []);

  const action = useMemo(() => (
    (friend) => <ConsumerActions user={friend} queryKey={queryKey} />
  ), [user]);

  return (
    <UsersList
      loading={isLoading}
      errored={!!error}
      errorMessage="We couldn't load the friends list."
      users={response?.data}
      onClick={goToProfile}
      userActions={action}
    />
  );
};

export default Friends;
