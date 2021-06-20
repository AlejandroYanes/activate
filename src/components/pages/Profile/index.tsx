import React, { FunctionComponent, useState } from 'react';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import ProfileData from './ProfileData';
import Following from './Following';
import Settings from './Settings';
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
      <ProfileData activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch by={activeTab}>
        <Case value={Tabs.Following} component={Following} />
        <Case value={Tabs.Friends} component={Friends} />
        <Case value={Tabs.Setting} component={Settings} />
      </Switch>
    </Page>
  );
};

export default ProfilePage;
