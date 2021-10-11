import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { parseSearchQuery } from 'helpers';
import { useEventCenterUpdate } from 'event-center';
import { QueryKey } from 'components/providers/Query';
import PublisherCard from 'components/experience/PublisherCard';
import { LoadingScreen, NoConnectionScreen, } from 'components/experience/Screens';
import { ResultPageProps } from './types';
import { Grid } from './styled';
import NoResults from './NoResults';

const PublishersResults: FunctionComponent<ResultPageProps> = (props) => {
  const { search } = props;
  const { term } = parseSearchQuery<{ term: string }>(search);
  const { isLoading, data: response, error, refetch } = useQuery(
    [QueryKey.SEARCH_PUBLISHERS, term],
    () => usersApi.searchPublishers(term),
    { enabled: !!term },
  );

  useEventCenterUpdate('PUBLISHER_FOLLOWED', refetch);

  const publisherCards = useMemo(() => {
    if (response) {
      return response.data.map((user) => (
        <PublisherCard key={user.id} user={user} />
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

  return (
    <Grid>
      {publisherCards}
    </Grid>
  );
};

export default PublishersResults;
