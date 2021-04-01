import React, { FunctionComponent, useState } from 'react';
import faker from 'faker';
import Page from 'components/base-components/Page';
import { Case, Switch } from 'components/base-components/Switch';
import UsersList from 'components/experience/UsersList';
import ProfileData from './ProfileData';
import Settings from './Settings';
import { UsersCard } from './styled';

export enum ProfileTabs {
  Following = 'Following',
  Friends = 'Friends',
  Setting = 'Settings',
}

const users = new Array(faker.random.number({ min: 6, max: 16 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    avatarUrl: `user${faker.random.number({ min: 1, max: 12 })}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    secondary: `@${faker.internet.userName()}`,
    active: faker.random.boolean(),
  }));

const Users = ({ users }) => (
  <UsersCard>
    <UsersList users={users} />
  </UsersCard>
);

const ProfilePage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(ProfileTabs.Setting);

  return (
    <Page>
      <ProfileData activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch by={activeTab}>
        <Case value={ProfileTabs.Following} component={Users} users={users} />
        <Case value={ProfileTabs.Friends} component={Users} users={users} />
        <Case value={ProfileTabs.Setting} component={Settings} />
      </Switch>
    </Page>
  );
};

export default ProfilePage;
