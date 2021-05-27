import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import { EventChannelList, notifyEventChannel } from 'event-center';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { useAppColors } from 'components/providers/Theme';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import { Text } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import Messages from 'components/experience/Messages';
import UsersList from 'components/experience/UsersList';
import FlexBox from 'components/base-components/FlexBox';

const arrowBackStyles = { marginRight: '4px' };

enum TalkViews {
  TALK_LIST = 'TALK_LIST',
  CONTACT_LIST = 'CONTACT_LIST',
  MESSAGES = 'MESSAGES',
}

const TalksPanel: FunctionComponent = () => {
  const colors = useAppColors();
  const layout = useAppLayout();
  const { location: { pathname }, push } = useHistory();

  const [{ activeView, activeUser }, setState] = useState({
    activeView: TalkViews.TALK_LIST,
    activeUser: undefined,
  });

  const openTalk = useCallback((user) => {
    if (pathname.includes('talks')) {
      notifyEventChannel(EventChannelList.USER_SELECTED_FOR_CHAT, user);
      setState({
        activeView: TalkViews.TALK_LIST,
        activeUser: undefined,
      });
    } else {
      setState({
        activeView: TalkViews.MESSAGES,
        activeUser: user,
      });
    }
  }, [pathname]);

  const closeTalk = useCallback(() => {
    setState({
      activeView: TalkViews.TALK_LIST,
      activeUser: undefined,
    });
  }, []);

  const maximizeTalk = useCallback(() => {
    setState({
      activeView: TalkViews.TALK_LIST,
      activeUser: undefined,
    });
    push('/talks');
    setTimeout(() => {
      notifyEventChannel(EventChannelList.USER_SELECTED_FOR_CHAT, activeUser);
    }, 100);
  }, [activeUser]);

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
            : faker.lorem.words(20)
        ),
        active: faker.random.boolean(),
      }))
  ), [activeView]);

  const leftAction = (
    <IconButton
      style={arrowBackStyles}
      onClick={closeTalk}
      icon={Icons.ARROW_LEFT}
      color={colors.FONT}
      buttonColor="font"
      variant="flat"
    />
  );

  const rightAction = (
    <IconButton
      onClick={maximizeTalk}
      icon={Icons.MAXIMIZE}
      color={colors.FONT}
      buttonColor="font"
      variant="flat"
    />
  );

  const showContactsButton = (
    <IconButton
      size="large"
      variant="fill"
      buttonColor="accent"
      color={colors.WHITE}
      icon={Icons.PENCIL}
      onClick={openContactList}
    />
  );

  const header = (
    <FlexBox align="center" height="100%" padding="0 0 0 16px">
      {leftAction}
      <Text>Select a contact</Text>
    </FlexBox>
  );

  return (
    <Switch by={activeView}>
      <Case
        value={TalkViews.TALK_LIST}
        component={UsersList}
        action={showContactsButton}
        onClick={openTalk}
        users={users}
        scroll
      />
      <Case
        value={TalkViews.CONTACT_LIST}
        component={UsersList}
        onClick={openTalk}
        users={users}
        header={header}
        scroll
      />
      <Case
        value={TalkViews.MESSAGES}
        component={Messages}
        user={activeUser}
        leftActions={leftAction}
        rightActions={layout !== Layout.MOBILE ? rightAction : undefined}
        viewMode="panel"
      />
    </Switch>
  );
};

export default TalksPanel;
