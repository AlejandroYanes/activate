import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';
import EventsGrid from 'components/experience/EventsGrid';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';

const Events = (): any => {
  const { userId } = useParams<any>();
  const { isLoading, data: response, error } = useQuery(
    [QueryKey.FETCH_EVENTS_ATTENDED_BY, userId],
    () => eventsApi.listAttendedBy(userId),
  );

  if (isLoading) {
    return <LoadingScreen />
  }

  if (!!error) {
    return (
      <NoConnectionScreen
        message="We could not load the events of this publisher."
      />
    );
  }

  return (
    <EventsGrid events={response.data} />
  );
};

export default Events;
