import React, { FunctionComponent } from 'react';
import { EventModel } from 'models/event';
import { formatDateTime } from 'helpers';
import { Paragraph, Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Attendance from 'components/experience/Attendance';
import { paragraphs } from './description';

interface Props {
  event: EventModel;
}

const description = paragraphs.map((text, index) => (
  <Paragraph padding="4px 16px" key={index}>
    {text}
  </Paragraph>
));

const Description: FunctionComponent<Props> = (props) => {
  const { event } = props;
  const { date, address } = event;

  return (
    <>
      <FlexBox direction="column" padding="0 16px" mB>
        <Text color="secondary" padding="0 0 4px 0">Date</Text>
        <Text>{formatDateTime(date)}</Text>
      </FlexBox>
      <FlexBox direction="column" padding="0 16px" mB>
        <Text color="secondary" padding="0 0 4px 0">Address</Text>
        <Text>{address}</Text>
      </FlexBox>
      <Attendance event={event} mB padding="0 16px" />
      {description}
    </>
  );
};

export default Description;
