import React, { FunctionComponent } from 'react';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import LoadingScreen from 'components/experience/LoadingScreen';
import { NoConnectionScreen } from 'components/experience/ErrorScreen';
import useUserState, { Tabs } from './state';
import Events from './Events';
import ProfileData from './ProfileData';
import Following from './Following';
import Friends from './Friends';

const UserPage: FunctionComponent = () => {
  const {
    state: {
      activeTab,
      isLoading,
      errored,
      user,
    },
    actions: {
      setActiveTab,
    },
  } = useUserState();

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
        <NoConnectionScreen message="We couldn't load this user's profile." />
      </Page>
    );
  }


  return (
    <Page>
      <ProfileData user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch by={activeTab}>
        <Case value={Tabs.EVENTS} component={Events} />
        <Case value={Tabs.FOLLOWING} component={Following} />
        <Case value={Tabs.FRIENDS} component={Friends} />
      </Switch>
    </Page>
  );
};

export default UserPage;
