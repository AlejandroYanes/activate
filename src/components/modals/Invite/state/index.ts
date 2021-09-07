import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';

export default function useInviteState() {
  const { location: { state } } = useHistory();
  const [search, setSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const { isLoading, data: response, error } = useQuery(
    QueryKey.FETCH_MY_FRIENDS,
    usersApi.listMyFriends,
  );

  return {
    event: (state as any)?.event,
    search,
    selectedUsers,
    isLoading,
    users: response?.data.results,
    errored: !!error,
    handleSearch: setSearch,
    handleSelection: useCallback((user) => {
      setSelectedUsers((oldSelection) => {
        const isSelected = oldSelection.some((u) => u.id === user.id);

        return isSelected
          ? oldSelection.filter((u) => u.id !== user.id)
          : oldSelection.concat([user]);
      });
    }, []),
  };
}
