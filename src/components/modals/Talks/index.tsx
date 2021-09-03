import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import { Case, Switch } from 'components/base-components/Switch';
import { IconButton } from 'components/base-components/Button';
import Modal from 'components/base-components/Modal';
import UsersList from 'components/experience/UsersList';
import Messages from 'components/experience/Messages';

const arrowBackStyles = { marginRight: '4px' };

const viewMap = {
  chats: '/app/talks',
  contacts: '/app/talks/contacts',
  messages: '/app/talks/messages',
};

const TalksModal: FunctionComponent = () => {
  const {
    location: {
      state,
      pathname,
    },
    push,
    replace,
    goBack,
  } = useHistory();

  const openTalk = useCallback((user) => {
    const routingMethod = pathname === viewMap.contacts ? replace : push;
    routingMethod(viewMap.messages, { user });
  }, [pathname]);

  const openContactList = useCallback(() => {
    push(viewMap.contacts);
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
    switch (pathname) {
      case viewMap.chats:
        return 'Talks';
      case viewMap.contacts:
        return 'Select a contact'
      default:
        return undefined;
    }
  }, [pathname]);

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
          pathname === viewMap.chats
            ? faker.lorem.words(20)
            : undefined
        ),
        active: faker.random.boolean(),
      }))
  ), [pathname]);

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
      <Switch by={pathname}>
        <Case
          value={viewMap.chats}
          component={UsersList}
          onClick={openTalk}
          action={showContactsButton}
          users={users}
          padding="0 0 0 16px"
          scroll
        />
        <Case
          value={viewMap.contacts}
          component={UsersList}
          onClick={openTalk}
          users={users}
          padding="0 0 0 16px"
          scroll
        />
        <Case
          value={viewMap.messages}
          component={Messages}
          user={(state as any)?.user}
          leftActions={leftAction}
          viewMode="mobile"
        />
      </Switch>
    </Modal>
  );
};

export default TalksModal;

