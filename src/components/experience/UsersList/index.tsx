import React, { FunctionComponent, ReactNode, useCallback, useMemo } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import User from './User';
import { Action, Section, Header, List } from './styled/list';

interface Props {
  header?: ReactNode;
  users: {
    id: string;
    avatarUrl: string;
    userName: string;
    name: string;
    secondary?: string;
    active?: boolean;
  }[];
  onClick?: (user) => void;
  action?: ReactNode;
}

const UsersList: FunctionComponent<Props> = (props) => {
  const { header, users, onClick, action } = props;

  const handleClick = useCallback((event) => {
    if (onClick) {
      const { id } = event.target.dataset;
      const user = users.find((t) => t.id === id);
      onClick(user);
    }

  }, [users, onClick]);

  const talksElements = useMemo(() => (
    users.map((user) => (
      <User
        key={user.id}
        {...user}
        onClick={handleClick}
      />
    ))
  ), [users, handleClick]);

  return (
    <Section data-el="user-list">
      <RenderIf condition={!!header}>
        <Header>
          {header}
        </Header>
      </RenderIf>
      <List>
        {talksElements}
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
