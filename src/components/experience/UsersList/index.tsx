import React, { FunctionComponent, ReactNode } from 'react';
import { UserModel } from 'models/user';
import { UserTalkModel } from 'models/message';
import { PositionProps } from 'helpers';
import { mobileHeaderHeight } from 'styles/variables';
import RenderIf from 'components/base-components/RenderIf';
import FlexBox from 'components/base-components/FlexBox';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import Users from './Users';
import { ActionNotch, List, Section } from './styled';

interface Props extends PositionProps {
  loading?: boolean;
  errored?: boolean;
  errorMessage?: string;
  header?: ReactNode;
  users: (UserModel | UserTalkModel)[];
  onClick: (user) => void;
  userActions?: (props: { user }) => any;
  action?: ReactNode;
  selectedUsers?: { id: string; [x: string]: any }[];
  showScroll?: boolean;
}

const UsersList: FunctionComponent<Props> = (props) => {
  const {
    loading,
    errored,
    errorMessage,
    header,
    users,
    selectedUsers,
    onClick,
    action,
    userActions,
    showScroll,
    ...rest
  } = props;

  if (loading) {
    return (
      <LoadingScreen />
    );
  }

  if (errored) {
    return (
      <NoConnectionScreen message={errorMessage} />
    );
  }

  return (
    <Section data-el="user-list" scroll={showScroll} {...rest}>
      <RenderIf condition={!!header}>
        <FlexBox height={mobileHeaderHeight}>
          {header}
        </FlexBox>
      </RenderIf>
      <List>
        <Users
          users={users}
          selectedUsers={selectedUsers}
          onClick={onClick}
          actions={userActions}
        />
      </List>
      <RenderIf condition={!!action}>
        <ActionNotch>
          {action}
        </ActionNotch>
      </RenderIf>
    </Section>
  );
};

export default UsersList;
