import React, { FunctionComponent } from 'react';
import { Text } from 'activate-components';
import { MessageProps } from './index';

const FriendRequestAccepted: FunctionComponent<MessageProps> = ({ user }) => {
  const { name } = user;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> accepted your friend request </Text>
    </Text>
  );
};

export default FriendRequestAccepted;
