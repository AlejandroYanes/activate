import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { useEventCenterUpdate } from 'event-center';
import { QueryKey } from 'components/providers/Query';
import Page from 'components/base-components/Page';
import EventsGrid from 'components/experience/EventsGrid';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PageTitle from './PageTitle';
import Changers from './Changers';

const title = <PageTitle />

const UpcomingPage: FunctionComponent = () => {
  const {
    isLoading,
    data: response,
    error,
    refetch: refetchEvents,
  } = useQuery(
    QueryKey.FETCH_MY_UPCOMING_EVENTS,
    () => eventsApi.listMyUpcoming(),
  );
  useEventCenterUpdate('EVENT_FOLLOWED', refetchEvents);

  if (isLoading) {
    return (
      <Page data-el="feed-page">
        <LoadingScreen />
      </Page>
    );
  }

  if (!!error) {
    return (
      <Page data-el="feed-page">
        <NoConnectionScreen message="We could not load your events" />
      </Page>
    );
  }

  return (
    <Page data-el="feed-page">
      <Changers />
      <EventsGrid events={response.data.results} title={title} />
    </Page>
  );
};

export default UpcomingPage;
