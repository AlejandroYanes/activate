import React, { FunctionComponent, useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import eventsApi from 'api/events';
import { EventChannel, useEventCenterUpdates } from 'event-center';
import { Modals } from 'components/modals';
import { QueryKey } from 'components/providers/Query';
import Page from 'components/base-components/Page';
import FlexBox from 'components/base-components/FlexBox';
import { Select, SelectOption } from 'components/base-components/Inputs';
import { Button } from 'components/base-components/Button';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import EventsGrid from 'components/experience/EventsGrid';
import { Header } from './styled';

const channels: EventChannel[] = ['EVENT_FOLLOWED', 'EVENT_UNFOLLOWED'];
const options: SelectOption[] = [
  { value: 'interests', label: 'Interests' },
  { value: 'trending', label: 'Trending' },
  { value: 'friends', label: 'Friends' },
  { value: 'date', label: 'By Date' },
  { value: 'location', label: 'Location' },
];

const DiscoverPage: FunctionComponent = () => {
  const {
    isLoading,
    data: response,
    error,
    refetch,
  } = useQuery(QueryKey.DISCOVER_EVENTS, () => eventsApi.discover());

  const [sortBy, setSortBy] = useState(options[0]);
  const { push } = useHistory();

  const toggleFilters = useCallback(() => {
    push(Modals.FILTERS);
  }, []);

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

  const title = (
    <FlexBox direction="column" align="flex-start" margin="0 0 32px 0">
      <Header>Discover</Header>
      <Header>new</Header>
      <Header>events</Header>
    </FlexBox>
  );

  return (
    <Page>
      <FlexBox justify="space-between" margin="0 0 48px 0" align="flex-end">
        <Select
          inline
          label="Sort By:"
          value={sortBy}
          options={options}
          onChange={setSortBy}
        />
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
