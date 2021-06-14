import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import faker from 'faker';
import { IconButton } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
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
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        secondary: (
          activeView === TalkViews.CONTACT_LIST
            ? `@${faker.internet.userName()}`
            : faker.lorem.words(10)
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
    <FlexBox align="center" height="100%" padding="0 0 0 16px">
      <Text>Select a talk</Text>
    </FlexBox>
  );

  const newTalkHeader = (
    <FlexBox align="center" height="100%" padding="0 0 0 16px">
      {leftAction}
      <Text>Select a contact</Text>
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
        showScroll
      />
      <Case
        value={TalkViews.CONTACT_LIST}
        component={UserView}
        onClick={openTalk}
        users={users}
        header={newTalkHeader}
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
