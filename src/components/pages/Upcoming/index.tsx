import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { useEventCenterUpdate } from 'event-center';
import { Modals } from 'components/modals';
import { QueryKey } from 'components/providers/Query';
import { Button } from 'components/base-components/Button';
import Page from 'components/base-components/Page';
import { Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import EventsGrid from 'components/experience/EventsGrid';
import EventSortBy from 'components/experience/EventSortBy';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';

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

  const { push } = useHistory();
  const toggleFilters = useCallback(() => {
    push(Modals.FILTERS);
  }, []);

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

  const title = (
    <FlexBox direction="column" align="flex-start" margin="0 0 32px 0">
      <Title
        color="brand"
        weight="bold"
        level={1}
        size={80}
        lineHeight={68}
      >
        Your <br />
        events
      </Title>
    </FlexBox>
  );

  return (
    <Page data-el="feed-page">
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
      <EventsGrid events={response.data.results} title={title} cols={3} />
    </Page>
  );
};

export default UpcomingPage;
