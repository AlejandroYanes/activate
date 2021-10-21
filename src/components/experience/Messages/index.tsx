import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Avatar, FlexBox, IconButton, RenderIf, Text } from 'activate-components';
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
          onChange={setMessage}
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
