import React, { FunctionComponent } from 'react';
import { Text } from 'activate-components';
import { MessageProps } from './index';

const CommentResponded: FunctionComponent<MessageProps> = ({ user, event }) => {
  const { name } = user;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> responded to your comment on </Text>
      <Text weight="bold">{event.name}</Text>
    </Text>
  );
};

export default CommentResponded;
