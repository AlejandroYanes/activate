import React, { FunctionComponent, ReactNode, useState } from 'react';
import { getEventValue } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Conversation from './Conversation';
import {
  Messages as StyledMessages,
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
  leftActions?: ReactNode;
  rightActions?: ReactNode;
  smallView?: boolean;
}

const Messages: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { user: { image, name, active }, leftActions, rightActions, smallView } = props;
  const [message, setMessage] = useState('');

  return (
    <StyledMessages>
      <Header small={smallView}>
        {leftActions}
        <AvatarSection>
          <Avatar icon={image} />
          <RenderIf condition={active}>
            <ActiveDot />
          </RenderIf>
        </AvatarSection>
        <Info>
          <Text>{name}</Text>
          <Text size="small" color="secondary">active 10min ago</Text>
        </Info>
        {rightActions}
      </Header>
      <Content>
        <Conversation />
      </Content>
      <Actions small={smallView}>
        <TextBox
          autosize
          rows={1}
          maxLength={smallView ? 250 : 500}
          placeholder="Type your message here"
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
    </StyledMessages>
  );
};

export default Messages;
