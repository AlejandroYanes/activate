import React, { FunctionComponent } from 'react';
import faker from 'faker';
import { EventModel } from 'models/event';
import { formatDateTime } from 'helpers';
import { Paragraph, Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Attendance from 'components/experience/Attendance';

interface Props {
  event: EventModel;
}

const description = new Array(6).fill(1).map((_, index) => (
  <Paragraph padding="8px 8px 16px" key={index}>
    {faker.lorem.lines(10)}
  </Paragraph>
));

const Description: FunctionComponent<Props> = (props) => {
  const { event } = props;
  const { date, address } = event;

  return (
    <>
      <FlexBox mT mB padding="0 16px">
        <FlexBox direction="column" width={220}>
          <Text color="secondary" padding="0 0 4px 0">Date</Text>
          <Text>{formatDateTime(date)}</Text>
        </FlexBox>
        <FlexBox direction="column" grow>
          <Text color="secondary" padding="0 0 4px 0">Address</Text>
          <Text>{address}</Text>
        </FlexBox>
      </FlexBox>
      <Attendance event={event} mB padding="0 16px" />
      {description}
    </>
  );
};

export default Description;
