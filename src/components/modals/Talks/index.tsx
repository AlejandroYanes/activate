import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import faker from 'faker';
import { Case, Switch } from 'components/base-components/Switch';
import { IconButton } from 'components/base-components/Button';
import Modal from 'components/base-components/Modal';
import UsersList from 'components/experience/UsersList';
import Messages from 'components/experience/Messages';
import { Modals } from 'components/modals';

const arrowBackStyles = { marginRight: '4px' };

const TalksModal: FunctionComponent = () => {
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
      icon="ARROW_LEFT"
      color="background"
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
    new Array(faker.random.number({ min: 20, max: 30 }))
      .fill(1)
      .map(() => ({
        id: faker.random.uuid(),
        avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        lastMessage: (
          activeView === Modals.TALKS
            ? faker.lorem.words(20)
            : undefined
        ),
        active: faker.random.boolean(),
      }))
  ), [activeView]);

  const showContactsButton = (
    <IconButton
      size="large"
      variant="fill"
      color="accent"
      icon="PENCIL"
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
          padding="0 0 0 16px"
          scroll
        />
        <Case
          value={Modals.TALKS_CONTACTS}
          component={UsersList}
          onClick={openTalk}
          users={users}
          padding="0 0 0 16px"
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

