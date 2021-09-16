import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { MessageProps } from './index';

const FriendRequest: FunctionComponent<MessageProps> = ({ user }) => {
  const { name } = user;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> wants to be your friend </Text>
    </Text>
  );
};

export default FriendRequest;
