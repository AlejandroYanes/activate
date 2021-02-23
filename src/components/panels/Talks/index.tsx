import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import faker from 'faker';
import { EventChannelList, notifyEventChannel } from 'components/event-center';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { useAppColors } from 'components/providers/Theme';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import Messages from 'components/experience/Messages';
import { Action, ActiveDot, AvatarSection, Info, Panel, Talk } from './styled';

interface Props {
  onClose?: () => void;
}

const talks = new Array(faker.random.number({ min: 6, max: 16 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    image: `user${faker.random.number({ min: 1, max: 12 })}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    txt: faker.lorem.words(10),
    active: faker.random.boolean(),
  }));

const arrowBackStyles = { marginRight: '4px' };

const TalksPanel: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const layout = useAppLayout();
  const { push } = useHistory();
  const { pathname } = useLocation();

  const { onClose } = props;

  const [showMessages, setShowMessages] = useState(false);
  const [activeUser, setActiveUser] = useState(undefined);

  const openTalk = useCallback((event) => {
    const { id } = event.target.dataset;
    const user = talks.find((t) => t.id === id);

    if (pathname.includes('talks')) {
      notifyEventChannel(EventChannelList.USER_SELECTED_FOR_CHAT, user);
      if (onClose) {
        onClose();
      }
    } else {
      setActiveUser(user);
      setShowMessages(true);
    }

  }, [pathname, onClose]);

  const closeTalk = useCallback(() => {
    setActiveUser(undefined);
    setShowMessages(false);
  }, []);

  const maximizeTalk = useCallback(() => {
    setActiveUser(undefined);
    setShowMessages(false);
    push('/talks');
    setTimeout(() => {
      notifyEventChannel(EventChannelList.USER_SELECTED_FOR_CHAT, activeUser);
      if (onClose) {
        onClose();
      }
    }, 100);
  }, [activeUser]);

  const talksElements = useMemo(() => (
    talks.map(({ id, image, name, txt, active }) => (
      <Talk key={id} data-id={id} onClick={openTalk}>
        <AvatarSection>
          <Avatar icon={image} />
          <RenderIf condition={active}>
            <ActiveDot />
          </RenderIf>
        </AvatarSection>
        <Info>
          <Text align="left">{name}</Text>
          <Text align="left" size="small" color="gray" ellipsis>{txt}</Text>
        </Info>
      </Talk>
    ))
  ), [openTalk]);

  const leftAction = (
    <IconButton
      style={arrowBackStyles}
      onClick={closeTalk}
      icon={Icons.ARROW_LEFT}
      color={colors.FONT}
      buttonColor="font"
      variant="flat"
    />
  );

  const rightAction = (
    <IconButton
      onClick={maximizeTalk}
      icon={Icons.MAXIMIZE}
      color={colors.FONT}
      buttonColor="font"
      variant="flat"
    />
  );

  return (
    <>
      <RenderIf condition={!showMessages}>
        <Panel>
          {talksElements}
          <Action>
            <IconButton
              onClick={() => undefined}
              icon={Icons.ADD_USER}
              color={colors.WHITE}
              buttonColor="accent"
              variant="fill"
              size="large"
            />
          </Action>
        </Panel>
      </RenderIf>
      <RenderIf condition={showMessages}>
        <Messages
          user={activeUser}
          leftActions={leftAction}
          rightActions={layout !== Layout.SMALL ? rightAction : undefined}
          smallView
        />
      </RenderIf>
    </>
  );
};

export default TalksPanel;
