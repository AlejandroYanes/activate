import React from 'react';
import UsersList from 'components/experience/UsersList';
import { users } from '../../../modals/Profile/users';
import { UsersCard } from '../styled';

const emptyAction = () => undefined;

const Followers = () => (
  <UsersCard>
    <UsersList users={users} onClick={emptyAction} />
  </UsersCard>
);

export default Followers;
