import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { EventChannelList, useEventCenterUpdate } from 'event-center';
import { AuxPanelSection, setActivePanel } from 'components/panels';
import RenderIf from 'components/base-components/RenderIf';
import { IconButton } from 'components/base-components/Button';
import Messages from 'components/experience/Messages';
import SplashScreen from './SplashScreen';

const DesktopBody: FunctionComponent = () => {
  const [activeUser, setActiveUser] = useState(undefined);

  const receiveActiveUser = useCallback((user) => {
    setActiveUser(user);
  }, []);

  useEventCenterUpdate(
    EventChannelList.USER_SELECTED_FOR_CHAT,
    receiveActiveUser,
  );

  useEffect(() => {
    setActivePanel(AuxPanelSection.TALKS);
  }, []);

  const actions = useMemo(() => (
    <IconButton
      onClick={() => undefined}
      icon="MORE_VERT"
      color="background"
      variant="flat"
    />
  ), []);

  return (
    <RenderIf condition={!!activeUser} fallback={<SplashScreen />}>
      <Messages user={activeUser} rightActions={actions} viewMode="page" />
    </RenderIf>
  );
};

export default DesktopBody;
