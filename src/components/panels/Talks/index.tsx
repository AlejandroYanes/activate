import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { EventChannelList, notifyEventChannel } from 'event-center';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { useAppColors } from 'components/providers/Theme';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Messages from 'components/experience/Messages';
import TalksList from 'components/experience/TalkList';

interface Props {
  onClose?: () => void;
}

const arrowBackStyles = { marginRight: '4px' };

export enum TalkViews {
  TALK_LIST = 'TALK_LIST',
  CONTACT_LIST = 'CONTACT_LIST',
  MESSAGES = 'MESSAGES',
}

const TalksPanel: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const layout = useAppLayout();
  const { push } = useHistory();
  const { pathname } = useLocation();

  const { onClose } = props;

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
      if (onClose) {
        onClose();
      }
    }, 100);
  }, [activeUser]);

  const openContactList = useCallback(() => {
    setState({
      activeView: TalkViews.CONTACT_LIST,
      activeUser: undefined,
    });
  }, [])

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

  return (
    <Switch by={activeView}>
      <Case
        value={TalkViews.TALK_LIST}
        component={TalksList}
        openTalk={openTalk}
        openContactList={openContactList}
      />
      <Case
        value={TalkViews.CONTACT_LIST}
        component={TalksList}
        openTalk={openTalk}
        openContactList={openContactList}
        asContactList
      />
      <Case
        value={TalkViews.MESSAGES}
        component={Messages}
        user={activeUser}
        leftActions={leftAction}
        rightActions={layout !== Layout.SMALL ? rightAction : undefined}
        smallView
      />
    </Switch>
  );
};

export default TalksPanel;
