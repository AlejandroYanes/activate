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
import { users } from '../Profile/users';

enum ProfileTabs {
  FOLLOWING = 'Following',
  FRIENDS = 'Friends',
  EVENTS = 'Events',
}

const user = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  userName: `@${faker.internet.userName()}`,
  followingCount: faker.random.number(100),
  friendCount: faker.random.number(200),
  bio: faker.lorem.lines(4),
};

const EventsList = () => (
  <>
    <EventCard {...events[3]} />
    <EventCard {...events[0]} />
    <EventCard {...events[1]} />
  </>
);

const emptyAction = () => undefined;

const UserModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const [activeTab, setActiveTab] = useState(ProfileTabs.EVENTS);

  const {
    name,
    userName,
    followingCount,
    friendCount,
    bio,
  } = user;

  const header = (
    <FlexBox align="center" grow width="100%">
      <IconButton onClick={goBack} icon={Icons.ARROW_LEFT} />
      <Title level={3} padding="0 0 0 6px" ellipsis>
        {name}
      </Title>
      <IconButton
        onClick={() => undefined}
        icon={Icons.ADD_USER}
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
              <Text>Following</Text>
              <Title level={2} color="accent">{formatAmount(followingCount)}</Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Friends</Text>
              <Title level={2} color="accent">{formatAmount(friendCount)}</Title>
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
            name={ProfileTabs.FOLLOWING}
            label={ProfileTabs.FOLLOWING}
            icon={Icons.MEGAPHONE}
          />
          <Tab
            name={ProfileTabs.FRIENDS}
            label={ProfileTabs.FRIENDS}
            icon={Icons.USERS}
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case
            value={ProfileTabs.EVENTS}
            component={EventsList}
          />
          <Case
            value={ProfileTabs.FOLLOWING}
            component={UsersList}
            users={users}
            onClick={emptyAction}
          />
          <Case
            value={ProfileTabs.FRIENDS}
            component={UsersList}
            users={users}
            onClick={emptyAction}
          />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default UserModal;
