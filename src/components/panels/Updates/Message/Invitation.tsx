import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import { EventLinkingUpdate } from '../types';
import { MessageProps } from './index';

const Invitation: FunctionComponent<MessageProps> = ({ content }) => {
  const {
    user: {
      name: user,
    },
    event: {
      name: event,
      going,
    },
  } = content as EventLinkingUpdate;

  return (
    <Text>
      <Text weight="bold">{user}</Text>
      <RenderIf
        condition={going}
        fallback={<Text> is asking you to go to </Text>}
      >
        <Text> is thinking of going to </Text>
      </RenderIf>
      <Text weight="bold">{event}</Text>
    </Text>
  );
};

export default Invitation;
