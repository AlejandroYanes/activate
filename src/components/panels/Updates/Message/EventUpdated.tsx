import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { MessageProps } from './index';

const EventUpdated: FunctionComponent<MessageProps> = ({ user, event }) => {
  const { name, lastName } = user;
  const fullName = `${name} ${lastName}`;

  return (
    <Text>
      <Text weight="bold">{fullName}</Text>
      <Text> updated </Text>
      <Text weight="bold">{event.name}</Text>
    </Text>
  );
};

export default EventUpdated;
