import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { parseSearchQuery } from 'helpers';
import { QueryKey } from 'components/providers/Query';
import UserCard from 'components/experience/UserCard';
import {
  LoadingScreen,
  MessageScreen,
  NoConnectionScreen,
} from 'components/experience/Screens';
import { ResultPageProps } from './types';
import { Grid } from './styled';

const UsersResults: FunctionComponent<ResultPageProps> = (props) => {
  const { search } = props;
  const { term } = parseSearchQuery<{ term: string }>(search);
  const { isLoading, data: response, error } = useQuery(
    [QueryKey.SEARCH_CONSUMERS, term],
    () => usersApi.searchConsumers(term),
    { enabled: !!term },
  );

  const consumerCards = useMemo(() => {
    if (response) {
      return response.data.map((user) => (
        <UserCard key={user.id} user={user} />
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
      {consumerCards}
    </Grid>
  );
};

export default UsersResults;
