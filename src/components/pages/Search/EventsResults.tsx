import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { parseSearchQuery } from 'helpers';
import { Modals } from 'components/modals';
import { QueryKey } from 'components/providers/Query';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Button } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import EventsGrid from 'components/experience/EventsGrid';
import EventSortBy from 'components/experience/EventSortBy';
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
  const { push } = useHistory();
  const layout = useAppLayout();

  const toggleFilters = useCallback(() => {
    const route = layout === Layout.MOBILE
      ? '/app/filters'
      : `${search}${Modals.FILTERS}`;
    push(route);
  }, [layout]);

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

  return (
    <>
      <FlexBox justify="space-between" margin="0 0 48px 0" align="flex-end">
        <EventSortBy hideLabel={layout === Layout.MOBILE} />
        <Button
          onClick={toggleFilters}
          leftIcon="FILTER"
          label="Filters"
          color="background"
          variant="outline"
        />
      </FlexBox>
      <EventsGrid events={response.data} />
    </>
  );
};

export default EventsResults;
