import React, { FunctionComponent, useState } from 'react';
import { getEventValue } from 'helpers/events';
import { useAppColors } from 'components/providers/Theme';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Conversation from './Conversation';
import {
  Actions,
  ActiveDot,
  AvatarSection,
  Content,
  Header,
  Info,
  TextBox,
} from './styled/page';

interface Props {
  image: string;
  name: string;
  active: boolean;
}

const Messages: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { image, name, active } = props;
  const [message, setMessage] = useState('');

  return (
    <>
      <Header>
        <AvatarSection>
          <Avatar icon={image} />
          <RenderIf condition={active}>
            <ActiveDot />
          </RenderIf>
        </AvatarSection>
        <Info>
          <Text>{name}</Text>
          <Text size="small" color="gray">active 10min ago</Text>
        </Info>
        <IconButton
          onClick={() => undefined}
          icon={Icons.MORE_VERT}
          color={colors.FONT}
          buttonColor="font"
          variant="flat"
        />
      </Header>
      <Content>
        <Conversation />
      </Content>
      <Actions>
        <TextBox
          autosize
          rows={1}
          maxLength={500}
          value={message}
          onChange={(event) => setMessage(getEventValue(event))}
        />
        <IconButton
          onClick={() => undefined}
          icon={Icons.SEND}
          color={colors.ACCENT}
          buttonColor="accent"
          size="large"
        />
      </Actions>
    </>
  );
};

export default Messages;
