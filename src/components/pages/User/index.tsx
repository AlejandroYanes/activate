import React, { FunctionComponent } from 'react';
import { RelationshipStatus } from 'models/user';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PrivateAccount from './PrivateAccount';
import ProfileData from './ProfileData';
import Following from './Following';
import Friends from './Friends';
import Events from './Events';
import useUserState, { Tabs } from './state';
import FlexBox from '../../base-components/FlexBox';

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
        <Switch by={activeTab}>
          <Case value={Tabs.EVENTS} component={Events} />
          <Case value={Tabs.FOLLOWING} component={Following} />
          <Case value={Tabs.FRIENDS} component={Friends} />
        </Switch>
      </FlexBox>
    </Page>
  );
};

export default UserPage;
