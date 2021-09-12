import React, { FunctionComponent, useCallback } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import eventsApi from 'api/events';
import { EventChannel, useEventCenterUpdates } from 'event-center';
import { Modals } from 'components/modals';
import { QueryKey } from 'components/providers/Query';
import Page from 'components/base-components/Page';
import FlexBox from 'components/base-components/FlexBox';
import { Button } from 'components/base-components/Button';
import { Title } from 'components/base-components/Typography';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import EventsGrid from 'components/experience/EventsGrid';
import EventSortBy from 'components/experience/EventSortBy';

const channels: EventChannel[] = ['EVENT_FOLLOWED', 'EVENT_UNFOLLOWED'];

const DiscoverPage: FunctionComponent = () => {
  const {
    isLoading,
    data: response,
    error,
    refetch,
  } = useQuery(QueryKey.DISCOVER_EVENTS, () => eventsApi.discover());
  useEventCenterUpdates(channels, refetch);

  const { push } = useHistory();
  const toggleFilters = useCallback(() => {
    push(Modals.FILTERS);
  }, []);

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

  const title = (
    <FlexBox direction="column" align="flex-start" margin="0 0 32px 0">
      <Title
        color="brand"
        weight="bold"
        level={1}
        size={80}
        lineHeight={64}
      >
        Discover <br />
        new <br />
        events
      </Title>
    </FlexBox>
  );

  return (
    <Page>
      <FlexBox justify="space-between" margin="0 0 48px 0" align="flex-end">
        <EventSortBy />
        <Button
          onClick={toggleFilters}
          leftIcon="FILTER"
          label="Filters"
          color="background"
          variant="outline"
        />
      </FlexBox>
      <EventsGrid
        cols={3}
        title={title}
        events={response?.data}
      />
    </Page>
  );
};

export default DiscoverPage;
