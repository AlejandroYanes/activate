import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';
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

  const { isLoading, data: response, error } = useQuery(
    QueryKey.FETCH_MY_FRIENDS,
    usersApi.listMyFriends,
  );

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
          loading={isLoading}
          errored={!!error}
          users={response?.data.results}
          padding="0 0 0 16px"
          scroll
        />
        <Case
          value={viewMap.contacts}
          component={UsersList}
          onClick={openTalk}
          loading={isLoading}
          errored={!!error}
          users={response?.data.results}
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

