import React, { FunctionComponent } from 'react';
import { formatDateTime } from 'helpers';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';
import { Event, Liner } from './styled/event';

interface Props {
  id: string;
  title: string;
  address: string;
  date: Date;
}

const UpcomingEvent: FunctionComponent<Props> = (props) => {
  const { title, date, address } = props;

  return (
    <Event data-el="upcoming-event">
      <Liner />
      <FlexBox direction="column" padding="8px 4px 8px 12px">
        <Text>{title}</Text>
        <FlexBox align="center" margin="4px 0">
          <SvgIcon height={16} width={16} icon={Icons.CALENDAR_FILLED} />
          <Text size="small" margin="0 0 0 6px">{formatDateTime(date)}</Text>
        </FlexBox>
        <FlexBox align="flex-start" margin="4px 0">
          <SvgIcon height={16} width={16} icon={Icons.MAP_PIN} />
          <Text size="small" margin="0 0 0 6px">{address}</Text>
        </FlexBox>
      </FlexBox>
    </Event>
  );
};

export default UpcomingEvent;
