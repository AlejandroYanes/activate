import React, { FunctionComponent } from 'react';
import { FlexBox, formatDateTime, Paragraph, Text } from 'activate-components';
import { EventModel } from 'models/event';
import Attendance from 'components/experience/Attendance';
import { paragraphs } from './description';

interface Props {
  event: EventModel;
}

const description = paragraphs.map((text, index) => (
  <Paragraph padding="8px 8px 16px" size="large" key={index}>
    {text}
  </Paragraph>
));

const Description: FunctionComponent<Props> = (props) => {
  const { event } = props;
  const { date, address } = event;

  return (
    <>
      <FlexBox mT mB padding="0 16px">
        <FlexBox direction="column" width={260}>
          <Text weight="bold" padding="0 0 4px 0">Date</Text>
          <Text size="large">{formatDateTime(date)}</Text>
        </FlexBox>
        <FlexBox direction="column" grow>
          <Text weight="bold" padding="0 0 4px 0">Address</Text>
          <Text size="large">{address}</Text>
        </FlexBox>
      </FlexBox>
      <Attendance event={event} mB padding="0 16px" />
      {description}
    </>
  );
};

export default Description;
