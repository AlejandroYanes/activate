import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { EventLinkingUpdate } from '../types';
import { MessageProps } from './index';

const FriendRequestAccepted: FunctionComponent<MessageProps> = ({ content }) => {
  const {
    user: {
      name: user,
    },
  } = content as EventLinkingUpdate;

  return (
    <Text>
      <Text weight="bold">{user}</Text>
      <Text> accepted your friend request </Text>
    </Text>
  );
};

export default FriendRequestAccepted;
