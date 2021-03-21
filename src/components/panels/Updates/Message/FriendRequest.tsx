import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { EventLinkingUpdate } from '../types';
import { MessageProps } from './index';

const FriendRequest: FunctionComponent<MessageProps> = ({ content }) => {
  const {
    user: {
      name: user,
    },
  } = content as EventLinkingUpdate;

  return (
    <Text>
      <Text weight="bold">{user}</Text>
      <Text> wants to be your friend </Text>
    </Text>
  );
};

export default FriendRequest;
