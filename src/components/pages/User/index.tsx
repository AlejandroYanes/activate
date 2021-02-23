import React, { FunctionComponent, useState } from 'react';
import * as faker from 'faker';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { useAppColors } from 'components/providers/Theme';
import { PresentationCard } from 'components/experience/EventCard';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import IconButton from 'components/base-components/IconButton';
import ProfileCard from 'components/experience/ProfileCard';
import { events } from '../Discover/events';

const user = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  userName: `@${faker.internet.userName()}`,
  followingCount: faker.random.number(100),
  friendCount: faker.random.number(200),
  bio: faker.lorem.lines(4),
};

enum UserTabs {
  EVENTS = 'Events',
  FOLLOWING = 'Following',
  FRIENDS = 'Friends',
}

const UserPage: FunctionComponent = () => {
  const Colors = useAppColors();
  const layout = useAppLayout();

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
          compact={layout === Layout.SMALL}
          fullWidth
          mT
        >
          <Tab name={UserTabs.EVENTS} label="Events" icon={Icons.CALENDAR_FILLED} />
          <Tab name={UserTabs.FOLLOWING} label="Following" icon={Icons.MEGAPHONE} />
          <Tab name={UserTabs.FRIENDS} label="Friends" icon={Icons.USERS} />
        </Tabset>
      </ProfileCard>
      <PresentationCard {...events[0]} />
      <PresentationCard {...events[2]} />
      <PresentationCard {...events[4]} />
    </Page>
  );
};

export default UserPage;
