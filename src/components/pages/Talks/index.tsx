import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { EventChannelList, useEventCenterUpdate } from 'event-center';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Page from 'components/base-components/Page';
import RenderIf from 'components/base-components/RenderIf';
import Messages from 'components/experience/Messages';
import SplashScreen from './SplashScreen';
import { Card, } from './styled/page';

const TalksPage: FunctionComponent = () => {
  const colors = useAppColors();
  const { setActiveSection } = usePanelActions();
  const [activeUser, setActiveUser] = useState(undefined);

  const receiveActiveUser = useCallback((user) => {
    setActiveUser(user);
  }, []);

  useEventCenterUpdate(EventChannelList.USER_SELECTED_FOR_CHAT, receiveActiveUser);

  useEffect(() => {
    setActiveSection(AuxPanelSection.TALKS);
  }, []);

  const actions = (
    <IconButton
      onClick={() => undefined}
      icon={Icons.MORE_VERT}
      color={colors.FONT}
      buttonColor="font"
      variant="flat"
    />
  );

  return (
    <Page>
      <Card>
        <RenderIf condition={!!activeUser} fallback={<SplashScreen />}>
          <Messages user={activeUser} rightActions={actions} />
        </RenderIf>
      </Card>
    </Page>
  );
};

export default TalksPage;
