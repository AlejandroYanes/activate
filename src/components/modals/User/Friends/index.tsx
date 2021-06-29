import { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { UserModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import { Modals } from 'components/modals';
import UsersList from 'components/experience/UsersList';
import { ConsumerProvider } from '../context';
import FriendActions from './FriendActions';

interface Props {
  user: string;
}

const Friends: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    [QueryKey.FETCH_FRIENDS_OF, user],
    () => usersApi.listFriendsOf(user),
    { enabled: !!user },
  );

  const { push } = useHistory();
  const goToProfile = useCallback((friend: UserModel) => {
    push(Modals.USER, { id: friend.id });
  }, []);

  return (
    <ConsumerProvider consumer={user}>
      <UsersList
        loading={isLoading}
        errored={!!error}
        errorMessage="We couldn't load the friends list."
        users={response?.data}
        onClick={goToProfile}
        userActions={FriendActions}
      />
    </ConsumerProvider>
  );
};

export default Friends;
