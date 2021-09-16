import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import faker from 'faker';
import { IconButton } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import { Case, Switch } from 'components/base-components/Switch';
import Messages from 'components/experience/Messages';
import UsersList from 'components/experience/UsersList';

enum TalkViews {
  TALK_LIST = 'TALK_LIST',
  CONTACT_LIST = 'CONTACT_LIST',
  MESSAGES = 'MESSAGES',
}

const arrowBackStyles = { marginRight: '4px' };

const UserView = (props) => (
  <FlexBox
    direction="column"
    align="stretch"
    padding="0 0 16px 0"
    height="100%"
  >
    <UsersList {...props} />
  </FlexBox>
);

const TabletBody: FunctionComponent = () => {
  const [{ activeView, activeUser }, setState] = useState({
    activeView: TalkViews.TALK_LIST,
    activeUser: undefined,
  });

  const openTalk = useCallback((user) => {
    setState({
      activeView: TalkViews.MESSAGES,
      activeUser: user,
    });
  }, []);

  const closeTalk = useCallback(() => {
    setState({
      activeView: TalkViews.TALK_LIST,
      activeUser: undefined,
    });
  }, []);

  const openContactList = useCallback(() => {
    setState({
      activeView: TalkViews.CONTACT_LIST,
      activeUser: undefined,
    });
  }, []);

  const users = useMemo(() => (
    new Array(faker.random.number({ min: 20, max: 30 }))
      .fill(1)
      .map(() => ({
        id: faker.random.uuid(),
        avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        lastMessage: (
          activeView === TalkViews.TALK_LIST
            ? faker.lorem.words(8)
            : undefined
        ),
        active: faker.random.boolean(),
      }))
  ), [activeView]);

  const leftAction = (
    <IconButton
      style={arrowBackStyles}
      onClick={closeTalk}
      icon="ARROW_LEFT"
      color="background"
      variant="flat"
    />
  );

  const rightAction = (
    <IconButton
      onClick={() => undefined}
      icon="MORE_VERT"
      color="background"
      variant="flat"
    />
  );

  const showContactsButton = (
    <IconButton
      size="large"
      variant="fill"
      color="accent"
      icon="PENCIL"
      onClick={openContactList}
    />
  );

  const talksHeader = (
    <FlexBox align="center" height="100%">
      <Title level={3}>Select a talk</Title>
    </FlexBox>
  );

  const newTalkHeader = (
    <FlexBox align="center" height="100%">
      {leftAction}
      <Title level={3}>Select a contact</Title>
    </FlexBox>
  );

  return (
    <Switch by={activeView}>
      <Case
        value={TalkViews.TALK_LIST}
        component={UserView}
        action={showContactsButton}
        onClick={openTalk}
        users={users}
        header={talksHeader}
        padding="0 0 0 16px"
        showScroll
      />
      <Case
        value={TalkViews.CONTACT_LIST}
        component={UserView}
        onClick={openTalk}
        users={users}
        header={newTalkHeader}
        padding="0 0 0 16px"
        showScroll
      />
      <Case
        value={TalkViews.MESSAGES}
        component={Messages}
        user={activeUser}
        leftActions={leftAction}
        rightActions={rightAction}
        viewMode="page"
      />
    </Switch>
  );
};

export default TabletBody;
