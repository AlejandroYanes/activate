import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { mobileHeaderHeight } from 'styles/variables';
import RenderIf from 'components/base-components/RenderIf';
import FlexBox from 'components/base-components/FlexBox';
import User from './User';
import { Action, List, Section } from './styled/list';

interface Props {
  header?: ReactNode;
  users: {
    id: string;
    avatarUrl: string;
    name: string;
    secondary?: string;
    active?: boolean;
  }[];
  onClick: (user) => void;
  action?: ReactNode;
  selectedUsers?: { id: string, [x: string]: any }[];
  scroll?: boolean;
}

const UsersList: FunctionComponent<Props> = (props) => {
  const { header, users, selectedUsers, onClick, action, scroll } = props;

  const userElements = useMemo(() => (
    users.map((user) => (
      <User
        key={user.id}
        user={user}
        showSelection={!!selectedUsers}
        isSelected={selectedUsers && selectedUsers.some(u => u.id === user.id)}
        onClick={onClick}
      />
    ))
  ), [users, selectedUsers]);

  return (
    <Section data-el="user-list" scroll={scroll}>
      <RenderIf condition={!!header}>
        <FlexBox height={mobileHeaderHeight}>
          {header}
        </FlexBox>
      </RenderIf>
      <List>
        {userElements}
      </List>
      <RenderIf condition={!!action}>
        <Action>
          {action}
        </Action>
      </RenderIf>
    </Section>
  );
};

export default UsersList;
