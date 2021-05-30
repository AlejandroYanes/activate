import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { MessageProps } from './index';

const CommentResponded: FunctionComponent<MessageProps> = ({ user, event }) => {
  const { name, lastName } = user;
  const fullName = `${name} ${lastName}`;

  return (
    <Text>
      <Text weight="bold">{fullName}</Text>
      <Text> responded to your comment on </Text>
      <Text weight="bold">{event.name}</Text>
    </Text>
  );
};

export default CommentResponded;
