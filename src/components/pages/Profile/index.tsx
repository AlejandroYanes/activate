import React, { FunctionComponent, useState } from 'react';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import PublishersResults from '../Search/PublishersResults';
import UsersResults from '../Search/UsersResults';
import ProfileData from './ProfileData';
import Settings from './Settings';

export enum ProfileTabs {
  Following = 'Following',
  Friends = 'Friends',
  Setting = 'Settings',
}

const ProfilePage: FunctionComponent = () => {


  const [activeTab, setActiveTab] = useState(ProfileTabs.Setting);

  return (
    <Page>
      <ProfileData activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch by={activeTab}>
        <Case value={ProfileTabs.Following} component={PublishersResults} />
        <Case value={ProfileTabs.Friends} component={UsersResults} />
        <Case value={ProfileTabs.Setting} component={Settings} />
      </Switch>
    </Page>
  );
};

export default ProfilePage;
