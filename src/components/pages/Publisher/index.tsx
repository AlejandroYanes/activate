import React, { FunctionComponent } from 'react';
import * as faker from 'faker';
import { useAppColors } from 'components/providers/Theme';
import EventCard from 'components/experience/EventCard';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import IconButton from 'components/base-components/IconButton';
import ProfileCard from 'components/experience/ProfileCard';
import { events } from '../Discover/events';

const publisher = {
  name: faker.company.companyName(),
  userName: `@${faker.internet.userName()}`,
  eventsCount: faker.random.number(200),
  followersCount: faker.random.number(2000),
  bio: faker.lorem.lines(4),
};

const PublisherPage: FunctionComponent = () => {
  const Colors = useAppColors();
  const { eventsCount, followersCount, ...rest } = publisher;

  const action = (
    <IconButton
      onClick={() => undefined}
      icon={Icons.STAR}
      color={Colors.ACCENT}
      buttonColor="accent"
      size="large"
      variant="flat"
    />
  );

  return (
    <Page>
      <ProfileCard
        image="user6"
        leftStatLabel="Events"
        leftStatValue={eventsCount}
        rightStatLabel="Followers"
        rightStatValue={followersCount}
        action={action}
        {...rest}
      />
      <EventCard {...events[3]} />
      <EventCard {...events[0]} />
      <EventCard {...events[1]} />
    </Page>
  );
};

export default PublisherPage;
