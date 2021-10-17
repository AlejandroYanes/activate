import React, { FunctionComponent } from 'react';
import { Text } from 'activate-components';
import { MessageProps } from './index';

const NewFollower: FunctionComponent<MessageProps> = ({ user }) => {
  const { name } = user;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> started following you </Text>
    </Text>
  );
};

export default NewFollower;
