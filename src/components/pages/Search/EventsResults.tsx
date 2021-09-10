import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { parseSearchQuery } from 'helpers';
import { QueryKey } from 'components/providers/Query';
import EventCard from 'components/experience/EventCard';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import { ResultPageProps } from './types';
import NoResults from './NoResults';

const EventsResults: FunctionComponent<ResultPageProps> = (props): any => {
  const { search } = props;
  const { term } = parseSearchQuery<{ term: string }>(search);
  const { isLoading, data: response, error } = useQuery(
    [QueryKey.SEARCH_EVENTS, term],
    () => eventsApi.search(term),
    { enabled: !!term },
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
    return <LoadingScreen />;
  }

  if (!!error) {
    return (
      <NoConnectionScreen message="we could not complete the search." />
    );
  }

  if (response.data.length === 0) {
    return (
      <NoResults />
    );
  }

  return eventCards;
};

export default EventsResults;
