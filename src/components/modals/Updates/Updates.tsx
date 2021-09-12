import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import updatesApi from 'api/udpates';
import { UpdateModel } from 'models/update';
import { QueryKey } from 'components/providers/Query';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import Update from './Update';

function updateFactory(updates: UpdateModel[]) {
  return updates.map((update) => <Update key={update.id} data={update as any} />);
}

const UpdatesPanel: FunctionComponent = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.FETCH_MY_UPDATES, updatesApi.listMyUpdates);

  const updateCards = useMemo(() => {
    if (response?.data) {
      return updateFactory(response.data.results);
    }
    return null;
  }, [response]);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (error) {
    return (
      <NoConnectionScreen message="We couldn't load your updates." />
    );
  }

  return (
    <>
      {updateCards}
    </>
  );
};

export default UpdatesPanel;
