import React, { FunctionComponent, useEffect, useState } from 'react';
import faker from 'faker';
import { usePanelActions } from 'components/providers/PanelSections';
import Avatar from 'components/base-components/Avatar';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import { Case, Switch } from 'components/base-components/Switch';
import { SummaryCard as EventCard } from 'components/experience/EventCard';
import { ProfileData, StyledProfile, UserName } from './styled';

enum Tabs {
  UPCOMING = 'UPCOMING',
  SETTINGS = 'SETTINGS',
}

const event = {
  title: faker.lorem.words(4),
  date: new Date(),
  description: faker.lorem.words(50),
  comments: faker.random.number(1000),
};

const UpcomingList = () => (
  <>
    <EventCard {...event} mB />
    <EventCard {...event} mB />
    <EventCard {...event} mB />
  </>
);

const ProfilePage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(Tabs.UPCOMING);
  const { resetPanelSections } = usePanelActions();

  useEffect(resetPanelSections, []);

  return (
    <StyledProfile>
      <ProfileData>
        <Avatar size="x-large" icon="user10" />
        <UserName>Scarlet</UserName>
      </ProfileData>
      <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mB>
        <Tab name={Tabs.UPCOMING} label="Upcoming Events" icon={Icons.BOOKMARKS} />
        <Tab name={Tabs.SETTINGS} label="Settings" icon={Icons.SETTINGS} />
      </Tabset>
      <Switch by={activeTab}>
        <Case value={Tabs.UPCOMING} component={UpcomingList} />
      </Switch>
    </StyledProfile>
  );
};

export default ProfilePage;
