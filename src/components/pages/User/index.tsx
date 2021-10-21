import React, { FunctionComponent } from 'react';
import { Case, FlexBox, Page, Switch } from 'activate-components';
import { RelationshipStatus } from 'models/user';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PrivateAccount from './PrivateAccount';
import ProfileData from './ProfileData';
import Following from './Following';
import Friends from './Friends';
import Events from './Events';
import useUserState, { Tabs } from './state';

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

  const { relationStatus } = user;
  const myFriend = (
    relationStatus === RelationshipStatus.ACCEPTED ||
    relationStatus === RelationshipStatus.MUTED
  );

  if (!myFriend) {
    return (
      <PrivateAccount user={user} />
    );
  }


  return (
    <Page>
      <FlexBox direction="column" align="stretch" width={680} margin="0 auto">
        <ProfileData user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      </FlexBox>
      <Switch by={activeTab}>
        <Case value={Tabs.EVENTS} component={Events} />
        <Case value={Tabs.FOLLOWING} component={Following} />
        <Case value={Tabs.FRIENDS} component={Friends} />
      </Switch>
    </Page>
  );
};

export default UserPage;
