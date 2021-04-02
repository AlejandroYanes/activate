import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import { formatAmount } from 'helpers';
import { Paragraph, Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import IconButton from 'components/base-components/IconButton';
import UsersList from 'components/experience/UsersList';
import EventCard from 'components/experience/EventCard';
import { events } from '../../pages/Discover/events';

enum ProfileTabs {
  FOLLOWERS = 'Followers',
  EVENTS = 'Events',
}

const publisher = {
  name: faker.company.companyName(),
  userName: `@${faker.internet.userName()}`,
  eventsCount: faker.random.number(200),
  followersCount: faker.random.number(2000),
  bio: faker.lorem.lines(4),
};

const users = new Array(faker.random.number({ min: 6, max: 16 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    image: `user${faker.random.number({ min: 1, max: 12 })}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    secondary: `@${faker.internet.userName()}`,
    active: faker.random.boolean(),
  }));

const EventsList = () => (
  <>
    <EventCard {...events[3]} />
    <EventCard {...events[0]} />
    <EventCard {...events[1]} />
  </>
);

const PublisherModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const [activeTab, setActiveTab] = useState(ProfileTabs.EVENTS);

  const {
    name,
    userName,
    followersCount,
    eventsCount,
    bio,
  } = publisher;

  const header = (
    <FlexBox align="center" grow width="100%">
      <IconButton onClick={goBack} icon={Icons.ARROW_LEFT} />
      <Title level={3} padding="0 0 0 6px" ellipsis>
        {name}
      </Title>
      <IconButton
        onClick={() => undefined}
        icon={Icons.STAR}
        margin="0 0 0 auto"
      />
    </FlexBox>
  );

  return (
    <Modal visible title={header} onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="0 6px 16px"
      >
        <FlexBox
          data-el="avatar-section"
          align="center"
          padding="8px"
        >
          <Avatar size="xx-large" icon="user2" />
          <FlexBox justify="space-around" grow>
            <FlexBox direction="column" align="center">
              <Text>Events</Text>
              <Title level={2} color="accent">{formatAmount(eventsCount)}</Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Followers</Text>
              <Title level={2} color="accent">{formatAmount(followersCount)}</Title>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          data-el="user-section"
          direction="column"
          align="flex-start"
          padding="16px 8px"
        >
          <Text>{userName}</Text>
          <Title level={2} color="brand">
            {name}
          </Title>
        </FlexBox>
        <Paragraph>{bio}</Paragraph>
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fullWidth
          mT
          mB
        >
          <Tab
            name={ProfileTabs.EVENTS}
            label={ProfileTabs.EVENTS}
            icon={Icons.CALENDAR_FILLED}
          />
          <Tab
            name={ProfileTabs.FOLLOWERS}
            label={ProfileTabs.FOLLOWERS}
            icon={Icons.MEGAPHONE}
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case
            value={ProfileTabs.FOLLOWERS}
            component={UsersList}
            users={users}
          />
          <Case
            value={ProfileTabs.EVENTS}
            component={EventsList}
          />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default PublisherModal;