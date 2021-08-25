import React, { FunctionComponent } from 'react';
import { UserModel } from 'models/user';
import { UserTalkModel } from 'models/message';
import User from './User';

interface Props {
  users: (UserModel | UserTalkModel)[];
  onClick: (user) => void;
  actions?: (props: { user }) => any;
  selectedUsers?: { id: string; [x: string]: any }[];
}

const Users: FunctionComponent<Props> = (props): any => {
  const { users, selectedUsers, actions, onClick } = props;

  return users.map((user) => (
    <User
      key={user.id}
      user={user}
      showSelection={!!selectedUsers}
      isSelected={selectedUsers && selectedUsers.some(u => u.id === user.id)}
      onClick={onClick}
      actions={actions}
    />
  ));
};

export default Users;
