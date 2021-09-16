import React, { FunctionComponent, useState } from 'react';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import ProfileData from './ProfileData';
import Following from './Following';
import Settings from './Settings';
import Friends from './Friends';
import FlexBox from '../../base-components/FlexBox';

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
          <Case value={Tabs.Setting} component={Settings} />
        </Switch>
      </FlexBox>
    </Page>
  );
};

export default ProfilePage;
