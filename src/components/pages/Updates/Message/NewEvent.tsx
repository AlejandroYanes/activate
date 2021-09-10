import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { MessageProps } from './index';

const NewEvent: FunctionComponent<MessageProps> = (props) => {
  const { user: { name }, event: { name: eventName } } = props;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <Text> posted a new event: </Text>
      <Text weight="bold">{eventName}</Text>
    </Text>
  );
};

export default NewEvent;
