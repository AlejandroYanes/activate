import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { formatDateTime } from 'helpers';
import { Text } from 'components/base-components/Typography';
import SvgIcon from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Event } from './styled/event';

interface Props {
  id: string;
  name: string;
  address: string;
  date: string;
}

const avatars = ['user1', 'user2', 'user4'];

const UpcomingEvent: FunctionComponent<Props> = (props) => {
  const { name, date, address } = props;

  return (
    <Link to="/app/event-details">
      <Event data-el="upcoming-event">
        {/*<Liner />*/}
        <FlexBox direction="column" padding="8px 4px 8px 14px">
          <Text>{name}</Text>
          <FlexBox align="center" margin="4px 0">
            <SvgIcon height={16} width={16} icon="CALENDAR" />
            <Text size="small" margin="0 0 0 6px">
              {formatDateTime(new Date(date))}
            </Text>
          </FlexBox>
          <FlexBox align="flex-start" margin="4px 0">
            <SvgIcon height={16} width={16} icon="MAP_PIN" />
            <Text size="small" margin="0 0 0 6px">{address}</Text>
          </FlexBox>
          <FlexBox>
            <AvatarGroup icons={avatars} label="and 120 more" size="x-small" />
          </FlexBox>
        </FlexBox>
      </Event>
    </Link>
  );
};

export default UpcomingEvent;
