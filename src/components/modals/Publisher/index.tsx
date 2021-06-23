import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import { formatAmount } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Paragraph, Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import { IconButton } from 'components/base-components/Button';
import UsersList from 'components/experience/UsersList';
import EventCard from 'components/experience/EventCard';
import { events } from '../../pages/Discover/events';
import { users } from '../Profile/users';

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

const EventsList = () => (
  <>
    <EventCard {...events[3]} isAFollowedEvent={faker.random.boolean()} hideAuthor />
    <EventCard {...events[0]} isAFollowedEvent={faker.random.boolean()} hideAuthor />
    <EventCard {...events[1]} isAFollowedEvent={faker.random.boolean()} hideAuthor />
  </>
);

const emptyAction = () => undefined;

const PublisherModal: FunctionComponent = () => {
  const layout = useAppLayout();
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
      <IconButton onClick={goBack} icon="ARROW_LEFT" />
      <Title level={3} padding="0 0 0 6px" ellipsis>
        {name}
      </Title>
      <IconButton
        onClick={() => undefined}
        icon="STAR"
        margin="0 0 0 auto"
      />
    </FlexBox>
  );

  const modalSize = layout === Layout.MOBILE ? 'mobile' : 'drawer';

  return (
    <Modal visible title={header} onClose={goBack} size={modalSize}>
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
          <Avatar size="xx-large" src="user1" />
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
            icon="CALENDAR"
          />
          <Tab
            name={ProfileTabs.FOLLOWERS}
            label={ProfileTabs.FOLLOWERS}
            icon="USERS"
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case
            value={ProfileTabs.FOLLOWERS}
            component={UsersList}
            users={users}
            onClick={emptyAction}
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
