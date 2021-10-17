import React, { FunctionComponent, useMemo } from 'react';
import { Text } from 'activate-components';
import { Conversation as StyledConversation, TextBubble } from './styled/conversation';
import { messages } from './messages';

const Conversation: FunctionComponent = () => {
  const bubbles = useMemo(
    () => messages.map(({ id, text, sent }) => (
      <TextBubble key={id} sent={sent}>
        <Text color={sent ? 'background' : 'font'}>{text}</Text>
      </TextBubble>
    )),
    [],
  );

  return (
    <StyledConversation>
      {bubbles}
    </StyledConversation>
  );
};

export default Conversation;
