import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';
import Page from 'components/base-components/Page';
import RenderIf from 'components/base-components/RenderIf';
import EventCard from 'components/experience/EventCard';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PageTitle from './PageTitle';

const errorScreen = (
  <NoConnectionScreen
    message="We couldn't load new events for you."
  />
);

const DiscoverPage: FunctionComponent = () => {

  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.DISCOVER_EVENTS, () => eventsApi.discover());

  const eventCards = useMemo(() => {
    if (response) {
      return response.data.map((event) => (
        <EventCard key={event.id} event={event} />
      ));
    }
    return null;
  }, [response]);

  return (
    <Page>
      <PageTitle />
      <RenderIf condition={!error} fallback={errorScreen}>
        <RenderIf condition={!isLoading} fallback={<LoadingScreen />}>
          {eventCards}
        </RenderIf>
      </RenderIf>
    </Page>
  );
};

export default DiscoverPage;
