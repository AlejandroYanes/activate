import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { MessageProps } from './index';

const NewComment: FunctionComponent<MessageProps> = ({ user, event }) => {
  const { name: eventName } = event;
  const { name } = user;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> posted a comment on </Text>
      <Text weight="bold">{eventName}</Text>
    </Text>
  );
};

export default NewComment;
