import React, { FunctionComponent, useState } from 'react';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import UsersList from 'components/experience/UsersList';
import { users } from 'components/modals/Profile/users';
import ProfileData from './ProfileData';
import Settings from './Settings';
import { UsersCard } from './styled';

export enum ProfileTabs {
  Following = 'Following',
  Friends = 'Friends',
  Setting = 'Settings',
}

const emptyAction = () => undefined;

const Users = () => (
  <UsersCard>
    <UsersList users={users} onClick={emptyAction} />
  </UsersCard>
);

const ProfilePage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(ProfileTabs.Setting);

  return (
    <Page>
      <ProfileData activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch by={activeTab}>
        <Case value={ProfileTabs.Following} component={Users} />
        <Case value={ProfileTabs.Friends} component={Users} />
        <Case value={ProfileTabs.Setting} component={Settings} />
      </Switch>
    </Page>
  );
};

export default ProfilePage;
