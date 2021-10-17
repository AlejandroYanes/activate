import React, { FunctionComponent } from 'react';
import { Text } from 'activate-components';
import { MessageProps } from './index';

const EventUpdated: FunctionComponent<MessageProps> = ({ user, event }) => {
  const { name } = user;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> updated </Text>
      <Text weight="bold">{event.name}</Text>
    </Text>
  );
};

export default EventUpdated;
