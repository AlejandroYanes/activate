import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { EventLinkingUpdate } from '../types';
import { MessageProps } from './index';

const EventUpdated: FunctionComponent<MessageProps> = ({ content }) => {
  const {
    user: {
      name: user,
    },
    event: {
      name: event,
    },
  } = content as EventLinkingUpdate;

  return (
    <Text>
      <Text weight="bold">{user}</Text>
      <Text> updated </Text>
      <Text weight="bold">{event}</Text>
    </Text>
  );
};

export default EventUpdated;
