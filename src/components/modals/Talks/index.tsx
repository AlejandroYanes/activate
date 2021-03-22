import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppColors } from 'components/providers/Theme';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Modal from 'components/base-components/Modal';
import TalksList from 'components/experience/TalkList';
import Messages from 'components/experience/Messages';
import { Modals } from 'components/modals';

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
        return undefined;
    }
  }, [activeView]);

  return (
    <Modal title={title} onClose={goBack} size="mobile" visible>
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
    </Modal>
  );
};

export default TalksModal;

