import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { MessageProps } from './index';

const FriendRequestAccepted: FunctionComponent<MessageProps> = ({ user }) => {
  const { name, lastName } = user;
  const fullName = `${name} ${lastName}`;

  return (
    <Text>
      <Text weight="bold">{fullName}</Text>
      <Text> accepted your friend request </Text>
    </Text>
  );
};

export default FriendRequestAccepted;
