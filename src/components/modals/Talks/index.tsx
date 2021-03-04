import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppColors } from 'components/providers/Theme';
import { Case, Switch } from 'components/base-components/Switch';
import { Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import TalksList from 'components/experience/TalkList';
import Messages from 'components/experience/Messages';
import { Modals } from 'components/experience/ModalStack';
import { Body, Header, StyledTalksModal } from './styled';

const arrowBackStyles = { marginRight: '4px' };

const TalksModal: FunctionComponent = () => {
  const colors = useAppColors();
  const { location, push, replace, goBack } = useHistory();
  const { hash: activeView } = useLocation();

  const openTalk = useCallback((user) => {
    const routingMethod = activeView === Modals.TALKS_CONTACTS ? replace : push;
    routingMethod(Modals.TALKS_MESSAGES, { user });
  }, [activeView]);

  const openContactList = useCallback(() => {
    push(Modals.TALKS_CONTACTS);
  }, []);

  const leftAction = (
    <IconButton
      style={arrowBackStyles}
      onClick={goBack}
      icon={Icons.ARROW_LEFT}
      color={colors.FONT}
      buttonColor="font"
      variant="flat"
    />
  );

  const title = useMemo(() => {
    switch (activeView) {
      case Modals.TALKS:
        return 'Talks';
      case Modals.TALKS_CONTACTS:
        return 'Select a contact'
      default:
        return 'Messages';
    }
  }, [activeView]);

  return (
    <StyledTalksModal>
      <RenderIf condition={activeView !== Modals.TALKS_MESSAGES}>
        <Header>
          <IconButton
            onClick={goBack}
            icon={Icons.ARROW_LEFT}
            color={colors.FONT}
            buttonColor="font"
            variant="flat"
          />
          <Title level={2} color="font">{title}</Title>
        </Header>
      </RenderIf>
      <Body>
        <Switch by={activeView}>
          <Case
            value={Modals.TALKS}
            component={TalksList}
            openTalk={openTalk}
            openContactList={openContactList}
          />
          <Case
            value={Modals.TALKS_CONTACTS}
            component={TalksList}
            openTalk={openTalk}
            asContactList
          />
          <Case
            value={Modals.TALKS_MESSAGES}
            component={Messages}
            user={(location?.state as any)?.user}
            leftActions={leftAction}
            smallView
          />
        </Switch>
      </Body>
    </StyledTalksModal>
  );
};

export default TalksModal;

