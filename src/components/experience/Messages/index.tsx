import React, { FunctionComponent, ReactNode, useState } from 'react';
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
} from './styled/messages';

interface Props {
  user: {
    image: string;
    name: string;
    active: boolean;
  };
  actions: ReactNode;
  smallView?: boolean;
}

const Messages: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { user: { image, name, active }, actions, smallView } = props;
  const [message, setMessage] = useState('');

  return (
    <>
      <Header small={smallView}>
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
        {actions}
      </Header>
      <Content>
        <Conversation />
      </Content>
      <Actions small={smallView}>
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
