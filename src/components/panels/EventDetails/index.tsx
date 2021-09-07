import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { formatDateTime } from 'helpers';
import { QueryKey } from 'components/providers/Query';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Attendance from 'components/experience/Attendance';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import { Panel } from './styled';

const EventDetailsPanel: FunctionComponent = () => {
  const { pathname } = useLocation();
  const eventId = pathname.split('/')[3];
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    [QueryKey.FETCH_EVENT, eventId],
    () => eventsApi.getDetails(eventId),
    { enabled: !!eventId },
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!!error || !response?.data) {
    return (
      <NoConnectionScreen
        padding="16px"
        message="We could not load the event's details"
      />
    );
  }

  const event = response?.data;
  const { date, address } = event;

  return (
    <Panel>
      <FlexBox direction="column" mB>
        <Text weight="light" padding="0 0 4px 0">Date</Text>
        <Text>{formatDateTime(date)}</Text>
      </FlexBox>
      <FlexBox direction="column" mB>
        <Text weight="light" padding="0 0 4px 0">Address</Text>
        <Text>{address}</Text>
      </FlexBox>
      <Attendance event={event} />
    </Panel>
  );
};

export default EventDetailsPanel;
