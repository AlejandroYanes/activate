import React, { FunctionComponent } from 'react';
import { Case, FlexBox, Page, Switch } from 'activate-components';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import ProfileData from './ProfileData';
import Events from './Events';
import Followers from './Followers';
import usePublisherState, { Tabs } from './state';

const PublisherPage: FunctionComponent = () => {
  const {
    state: {
      activeTab,
      isLoading,
      errored,
      publisher,
    },
    actions: {
      setActiveTab,
    },
  } = usePublisherState();

  if (isLoading) {
    return (
      <Page>
        <LoadingScreen />
      </Page>
    );
  }

  if (errored) {
    return (
      <Page>
        <NoConnectionScreen message="We couldn't load this publisher's profile." />
      </Page>
    );
  }

  return (
    <Page>
      <FlexBox direction="column" align="stretch" width={680} margin="0 auto">
        <ProfileData
          user={publisher}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </FlexBox>
      <Switch by={activeTab}>
        <Case value={Tabs.EVENTS} component={Events} />
        <Case value={Tabs.FOLLOWERS} component={Followers} />
      </Switch>
    </Page>
  );
};

export default PublisherPage;
