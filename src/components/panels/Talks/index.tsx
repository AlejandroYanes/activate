import React, { FunctionComponent, useCallback, useMemo } from 'react';
import faker from 'faker';
import { EventChannelList, notifyEventChannel } from 'components/event-center';
import { useAppColors } from 'components/providers/Theme';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import { Action, ActiveDot, AvatarSection, Info, Panel, Talk } from './styled';

const talks = new Array(faker.random.number({ min: 6, max: 16 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    image: `user${faker.random.number({ min: 1, max: 12 })}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    txt: faker.lorem.words(10),
    active: faker.random.boolean(),
  }));

const TalksPanel: FunctionComponent = () => {
  const colors = useAppColors();

  const openTalk = useCallback((event) => {
    const { id } = event.target.dataset;
    const user = talks.find((t) => t.id === id);
    notifyEventChannel(EventChannelList.USER_SELECTED_FOR_CHAT, user);
  }, [talks]);

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

  return (
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
  );
};

export default TalksPanel;
