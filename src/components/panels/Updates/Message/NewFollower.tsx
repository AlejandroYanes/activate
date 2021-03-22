import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { EventLinkingUpdate } from '../types';
import { MessageProps } from './index';

const NewFollower: FunctionComponent<MessageProps> = ({ content }) => {
  const {
    user: {
      name: user,
    },
  } = content as EventLinkingUpdate;

  return (
    <Text>
      <Text weight="bold">{user}</Text>
      <Text> started following you </Text>
    </Text>
  );
};

export default NewFollower;
