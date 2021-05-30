import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import { MessageProps } from './index';

const Invitation: FunctionComponent<MessageProps> = ({ user, event }) => {
  const { going, name: eventName } = event;
  const { name, lastName } = user;
  const fullName = `${name} ${lastName}`;

  return (
    <Text>
      <Text weight="bold">{fullName}</Text>
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
