import React, { FunctionComponent, useMemo } from 'react';
import { useQuery } from 'react-query';
import { UpdateModel } from 'models/update';
import updatesApi from 'api/udpates';
import { QueryKey } from 'components/providers/Query';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import Update from './Update';
import Page from '../../base-components/Page';
import FlexBox from '../../base-components/FlexBox';
import { Title } from '../../base-components/Typography';

function updateFactory(updates: UpdateModel[]) {
  return updates.map((update) => <Update key={update.id} data={update as any} />);
}

const UpdatesPage: FunctionComponent = () => {
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
      <LoadingScreen margin="48px auto 0" />
    );
  }

  if (!!error) {
    return (
      <NoConnectionScreen
        margin="48px auto 0"
        message="We could not load your recent activities"
      />
    );
  }

  return (
    <Page>
      <Title color="brand" level={1} align="center" mB>
        Notifications
      </Title>
      <FlexBox direction="column" align="stretch" width={680} margin="0 auto">
        {updateCards}
      </FlexBox>
    </Page>
  );
};

export default UpdatesPage;
