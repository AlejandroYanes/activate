import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { EventChannelList, useEventCenterUpdate } from 'event-center';
import { useAppColors } from 'components/providers/Theme';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import RenderIf from 'components/base-components/RenderIf';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Messages from 'components/experience/Messages';
import SplashScreen from './SplashScreen';

const DesktopBody: FunctionComponent = () => {
  const colors = useAppColors();
  const { setActiveSection } = usePanelActions();

  const [activeUser, setActiveUser] = useState(undefined);

  const receiveActiveUser = useCallback((user) => {
    setActiveUser(user);
  }, []);

  useEventCenterUpdate(
    EventChannelList.USER_SELECTED_FOR_CHAT,
    receiveActiveUser,
  );

  useEffect(() => {
    setActiveSection(AuxPanelSection.TALKS);
  }, []);

  const actions = useMemo(() => (
    <IconButton
      onClick={() => undefined}
      icon={Icons.MORE_VERT}
      color={colors.FONT}
      buttonColor="font"
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
