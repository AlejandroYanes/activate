import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { MessageProps } from './index';

const NewFollower: FunctionComponent<MessageProps> = ({ user }) => {
  const { name, lastName } = user;
  const fullName = `${name} ${lastName}`;

  return (
    <Text>
      <Text weight="bold">{fullName}</Text>
      <Text> started following you </Text>
    </Text>
  );
};

export default NewFollower;
