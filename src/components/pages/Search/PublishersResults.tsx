import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { parseSearchQuery } from 'helpers';
import { QueryKey } from 'components/providers/Query';
import PublisherCard from 'components/experience/PublisherCard';
import {
  LoadingScreen,
  MessageScreen,
  NoConnectionScreen,
} from 'components/experience/Screens';
import { ResultPageProps } from './types';
import { Grid } from './styled';

const PublishersResults: FunctionComponent<ResultPageProps> = (props) => {
  const { search } = props;
  const { term } = parseSearchQuery<{ term: string }>(search);
  const { isLoading, data: response, error } = useQuery(
    [QueryKey.SEARCH_PUBLISHERS, term],
    () => usersApi.searchPublishers(term),
    { enabled: !!term },
  );

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
      <MessageScreen
        icon="INBOX"
        color="INFO"
        title="We found nothing"
        lines={['Maybe you can try different words']}
      />
    );
  }

  return (
    <Grid>
      {publisherCards}
    </Grid>
  );
};

export default PublishersResults;
