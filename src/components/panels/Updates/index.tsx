import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import updatesApi from 'api/udpates';
import { UpdateModel } from 'models/update';
import { QueryKey } from 'components/providers/Query';
import FlexBox from 'components/base-components/FlexBox';
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
      <FlexBox direction="column" align="stretch" height="100%" padding="0 16px">
        <LoadingScreen />
      </FlexBox>
    );
  }

  if (error) {
    return (
      <FlexBox direction="column" align="stretch" height="100%" padding="0 16px">
        <NoConnectionScreen message="We couldn't load your updates." />
      </FlexBox>
    );
  }

  return (
    <FlexBox direction="column" align="stretch" height="100%" padding="0 16px">
      {updateCards}
    </FlexBox>
  );
};

export default UpdatesPanel;
