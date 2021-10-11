import React, { FunctionComponent, ReactNode, useState } from 'react';
import { getEventValue } from 'helpers';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import { IconButton } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import Conversation from './Conversation';
import {
  ActiveDot,
  AvatarSection,
  Content,
  Footer,
  Header,
  Messages as StyledMessages,
  TextBox,
} from './styled/messages';

interface Props {
  user: {
    avatar: string;
    name: string;
    active: boolean;
  };
  leftActions?: ReactNode;
  rightActions?: ReactNode;
  viewMode?: 'page' | 'panel' | 'mobile';
}

const Messages: FunctionComponent<Props> = (props) => {
  const {
    user: { avatar, name, active },
    leftActions,
    rightActions,
    viewMode,
  } = props;
  const [message, setMessage] = useState('');

  return (
    <StyledMessages viewMode={viewMode}>
      <Header viewMode={viewMode}>
        {leftActions}
        <AvatarSection>
          <Avatar src={avatar} />
          <RenderIf condition={active}>
            <ActiveDot />
          </RenderIf>
        </AvatarSection>
        <FlexBox direction="column" padding="0 8px" grow>
          <Text>{name}</Text>
          <Text size="small" color="secondary" margin="4px 0 0">active 10min ago</Text>
        </FlexBox>
        {rightActions}
      </Header>
      <Content>
        <Conversation />
      </Content>
      <Footer viewMode={viewMode}>
        <TextBox
          autosize
          rows={1}
          maxLength={250}
          value={message}
          onChange={(event) => setMessage(getEventValue(event))}
          placeholder="Type your message here"
        />
        <IconButton
          onClick={() => undefined}
          icon="SEND"
          color="accent"
          size="large"
        />
      </Footer>
    </StyledMessages>
  );
};

export default Messages;
