import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { EventLinkingUpdate } from '../types';
import { MessageProps } from './index';

const CommentResponded: FunctionComponent<MessageProps> = ({ content }) => {
  const {
    user: {
      name: user,
    },
    event: {
      name: event,
    },
  } = content as EventLinkingUpdate;

  return (
    <Text>
      <Text weight="bold">{user}</Text>
      <Text> responded to your comment on </Text>
      <Text weight="bold">{event}</Text>
    </Text>
  );
};

export default CommentResponded;
