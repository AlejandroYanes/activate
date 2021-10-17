import React, { FunctionComponent } from 'react';
import { Text } from 'activate-components';
import { MessageProps } from './index';

const NewParticipant: FunctionComponent<MessageProps> = (props) => {
  const { user: { name }, event: { name: eventName } } = props;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> is coming to your event: </Text>
      <Text weight="bold">{eventName}</Text>
    </Text>
  );
};

export default NewParticipant;
