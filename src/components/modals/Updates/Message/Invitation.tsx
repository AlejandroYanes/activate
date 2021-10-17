import React, { FunctionComponent } from 'react';
import { RenderIf, Text } from 'activate-components';
import { MessageProps } from './index';

const Invitation: FunctionComponent<MessageProps> = ({ user, event }) => {
  const { going, name: eventName } = event;
  const { name } = user;

  return (
    <Text>
      <Text weight="bold">{name}</Text>
      <RenderIf
        condition={going}
        fallback={<Text> is asking you to go to </Text>}
      >
        <Text> is thinking of going to </Text>
      </RenderIf>
      <Text weight="bold">{eventName}</Text>
    </Text>
  );
};

export default Invitation;
