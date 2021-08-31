import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';
import EventCard from 'components/experience/EventCard';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';

const Events = (): any => {
  const { userId } = useParams<any>();
  const { isLoading, data: response, error } = useQuery(
    [QueryKey.FETCH_EVENTS_ATTENDED_BY, userId],
    () => eventsApi.listAttendedBy(userId),
  );

  const eventCards = useMemo(() => {
    if (response) {
      return response.data.map((event) => (
        <EventCard key={event.id} event={event} />
      ));
    }
    return null;
  }, [response]);

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

  return eventCards;
};

export default Events;
