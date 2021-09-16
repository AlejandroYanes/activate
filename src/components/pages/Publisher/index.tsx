import React, { FunctionComponent } from 'react';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import ProfileData from './ProfileData';
import Events from './Events';
import Followers from './Followers';
import usePublisherState, { Tabs } from './state';
import FlexBox from '../../base-components/FlexBox';

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
        <Switch by={activeTab}>
          <Case value={Tabs.EVENTS} component={Events} />
          <Case value={Tabs.FOLLOWERS} component={Followers} />
        </Switch>
      </FlexBox>
    </Page>
  );
};

export default PublisherPage;
