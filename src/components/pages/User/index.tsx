import React, { FunctionComponent, useState } from 'react';
import * as faker from 'faker';
import { useAppColors } from 'components/providers/Theme';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import IconButton from 'components/base-components/IconButton';
import EventCard from 'components/experience/EventCard';
import ProfileCard from 'components/experience/ProfileCard';
import UsersList from 'components/experience/UsersList';
import { Case, Switch } from 'components/base-components/Switch';
import { users } from '../../modals/Profile/users';
import { events } from '../Discover/events';
import { ProfileTabs } from '../Profile';
import { UsersCard } from '../Profile/styled';

enum UserTabs {
  EVENTS = 'Events',
  FOLLOWING = 'Following',
  FRIENDS = 'Friends',
}

const user = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  userName: `@${faker.internet.userName()}`,
  followingCount: faker.random.number(100),
  friendCount: faker.random.number(200),
  bio: faker.lorem.lines(4),
};

const EventList = () => (
  <>
    <EventCard {...events[3]} />
    <EventCard {...events[0]} />
    <EventCard {...events[1]} />
  </>
);

const emptyAction = () => undefined;

const Users = () => (
  <UsersCard>
    <UsersList users={users} onClick={emptyAction} />
  </UsersCard>
);

const UserPage: FunctionComponent = () => {
  const Colors = useAppColors();

  const [activeTab, setActiveTab] = useState(UserTabs.EVENTS);
  const { friendCount, followingCount, ...rest } = user;

  const action = (
    <IconButton
      onClick={() => undefined}
      icon={Icons.ADD_USER}
      color={Colors.ACCENT}
      buttonColor="accent"
      size="large"
      variant="flat"
    />
  );

  return (
    <Page>
      <ProfileCard
        image="user8"
        leftStatLabel="Following"
        leftStatValue={followingCount}
        rightStatLabel="Friends"
        rightStatValue={friendCount}
        action={action}
        {...rest}
      >
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fullWidth
          mT
        >
          <Tab name={UserTabs.EVENTS} label="Events" icon={Icons.CALENDAR_FILLED} />
          <Tab name={UserTabs.FOLLOWING} label="Following" icon={Icons.MEGAPHONE} />
          <Tab name={UserTabs.FRIENDS} label="Friends" icon={Icons.USERS} />
        </Tabset>
      </ProfileCard>
      <Switch by={activeTab}>
        <Case value={UserTabs.EVENTS} component={EventList} />
        <Case value={ProfileTabs.Following} component={Users} />
        <Case value={ProfileTabs.Friends} component={Users} />
      </Switch>
    </Page>
  );
};

export default UserPage;
