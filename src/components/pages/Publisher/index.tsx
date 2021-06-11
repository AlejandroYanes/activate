import React, { FunctionComponent, useState } from 'react';
import * as faker from 'faker';
import EventCard from 'components/experience/EventCard';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import { IconButton } from 'components/base-components/Button';
import { Tab, Tabset } from 'components/base-components/Tabset';
import ProfileCard from 'components/experience/ProfileCard';
import { Case, Switch } from 'components/base-components/Switch';
import UsersList from 'components/experience/UsersList';
import { users } from '../../modals/Profile/users';
import { events } from '../Discover/events';
import { UsersCard } from './styled';

enum Tabs {
  EVENTS = 'Events',
  FOLLOWERS = 'Followers',
}

const publisher = {
  name: faker.company.companyName(),
  userName: `@${faker.internet.userName()}`,
  eventsCount: faker.random.number(200),
  followersCount: faker.random.number(2000),
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

const PublisherPage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(Tabs.EVENTS);
  const { eventsCount, followersCount, ...rest } = publisher;

  const action = (
    <IconButton
      onClick={() => undefined}
      icon={Icons.STAR}
      color="accent"
      size="large"
      variant="flat"
    />
  );

  return (
    <Page>
      <ProfileCard
        avatar="user4"
        leftStatLabel="Events"
        leftStatValue={eventsCount}
        rightStatLabel="Followers"
        rightStatValue={followersCount}
        action={action}
        {...rest}
      >
        <Tabset activeTab={activeTab} onTabChange={setActiveTab}>
          <Tab name={Tabs.EVENTS} icon={Icons.CALENDAR_FILLED} label={Tabs.EVENTS} />
          <Tab name={Tabs.FOLLOWERS} icon={Icons.USERS} label={Tabs.FOLLOWERS} />
        </Tabset>
      </ProfileCard>
      <Switch by={activeTab}>
        <Case value={Tabs.EVENTS} component={EventList} />
        <Case value={Tabs.FOLLOWERS} component={Users} />
      </Switch>
    </Page>
  );
};

export default PublisherPage;
