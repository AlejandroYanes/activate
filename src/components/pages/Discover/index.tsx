import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { Page } from 'activate-components';
import eventsApi from 'api/events';
import { EventChannel, useEventCenterUpdates } from 'event-center';
import { QueryKey } from 'components/providers/Query';
import EventsGrid from 'components/experience/EventsGrid';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PageTitle from './PageTitle';
import Changers from './Changers';

const channels: EventChannel[] = ['EVENT_FOLLOWED', 'EVENT_UNFOLLOWED'];
const title = <PageTitle key="discovery-page-title" />;

const DiscoverPage: FunctionComponent = () => {
  const {
    isLoading,
    data: response,
    error,
    refetch,
  } = useQuery(QueryKey.DISCOVER_EVENTS, () => eventsApi.discover());
  useEventCenterUpdates(channels, refetch);

  if (isLoading) {
    return (
      <Page>
        <LoadingScreen />
      </Page>
    );
  }

  if (!!error) {
    return (
      <Page>
        <NoConnectionScreen
          message="We couldn't load new events for you."
        />
      </Page>
    );
  }

  return (
    <Page>
      <Changers />
      <EventsGrid
        title={title}
        events={response?.data}
      />
    </Page>
  );
};

export default DiscoverPage;
