import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { EventChannelList, useEventCenterUpdate } from 'components/event-center';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import Page from 'components/base-components/Page';
import RenderIf from 'components/base-components/RenderIf';
import { Card, } from './styled/page';
import SplashScreen from './SplashScreen';
import Messages from './Messages';

const MessagesPage: FunctionComponent = () => {
  const { setActiveSection } = usePanelActions();
  const [activeUser, setActiveUser] = useState(undefined);

  const receiveActiveUser = useCallback((user) => {
    setActiveUser(user);
  }, []);

  useEventCenterUpdate(EventChannelList.USER_SELECTED_FOR_CHAT, receiveActiveUser);

  useEffect(() => {
    setActiveSection(AuxPanelSection.TALKS);
  }, []);

  return (
    <Page>
      <Card>
        <RenderIf condition={!!activeUser} fallback={<SplashScreen />}>
          <Messages {...activeUser} />
        </RenderIf>
      </Card>
    </Page>
  );
};

export default MessagesPage;
