import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import faker from 'faker';
import { useAppColors } from 'components/providers/Theme';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Modal from 'components/base-components/Modal';
import UsersList from 'components/experience/UsersList';
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

  const users = useMemo(() => (
    new Array(faker.random.number({ min: 6, max: 16 }))
      .fill(1)
      .map(() => ({
        id: faker.random.uuid(),
        avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        secondary: (
          activeView === Modals.TALKS_CONTACTS
            ? `@${faker.internet.userName()}`
            : faker.lorem.words(20)
        ),
        active: faker.random.boolean(),
      }))
  ), [activeView]);

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

  return (
    <Modal title={title} onClose={goBack} size="mobile" visible>
      <Switch by={activeView}>
        <Case
          value={Modals.TALKS}
          component={UsersList}
          onClick={openTalk}
          action={showContactsButton}
          users={users}
          scroll
        />
        <Case
          value={Modals.TALKS_CONTACTS}
          component={UsersList}
          onClick={openTalk}
          users={users}
          scroll
        />
        <Case
          value={Modals.TALKS_MESSAGES}
          component={Messages}
          user={(location?.state as any)?.user}
          leftActions={leftAction}
          viewMode="mobile"
        />
      </Switch>
    </Modal>
  );
};

export default TalksModal;

