import React, { FunctionComponent, useState } from 'react';
import { Case, FlexBox, Page, Switch } from 'activate-components';
import ProfileData from './ProfileData';
import Following from './Following';
import Friends from './Friends';

export enum Tabs {
  Following = 'Following',
  Friends = 'Friends',
  Setting = 'Settings',
}

const ProfilePage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(Tabs.Following);

  return (
    <Page>
      <FlexBox direction="column" align="stretch" width={680} margin="0 auto">
        <ProfileData activeTab={activeTab} setActiveTab={setActiveTab} />
        <Switch by={activeTab}>
          <Case value={Tabs.Following} component={Following} />
          <Case value={Tabs.Friends} component={Friends} />
        </Switch>
      </FlexBox>
    </Page>
  );
};

export default ProfilePage;
