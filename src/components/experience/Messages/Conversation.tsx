import React, { FunctionComponent, useMemo } from 'react';
import faker from 'faker';
import { Text } from 'components/base-components/Typography';
import { Conversation as StyledConversation, TextBubble } from './styled/conversation';

interface Props {
  inverseColors?: boolean;
}

const texts = new Array(faker.random.number({ min: 10, max: 100 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    txt: faker.lorem.words(faker.random.number({ min: 3, max: 20 })),
    sent: faker.random.boolean(),
  }));

const Conversation: FunctionComponent<Props> = (props) => {
  const { inverseColors } = props;
  const bubbles = useMemo(
    () => texts.map(({ id, txt, sent }) => (
      <TextBubble key={id} sent={sent} inverseColors={inverseColors}>
        <Text color={sent ? 'background' : 'font'}>{txt}</Text>
      </TextBubble>
    )),
    [],
  );

  return (
    <StyledConversation>
      {bubbles}
    </StyledConversation>
  );
};

export default Conversation;
