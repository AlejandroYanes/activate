import React, { FunctionComponent, useState } from 'react';
import Avatar from 'components/base-components/Avatar';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import { ProfileData, StyledProfile, UserName } from './styled';

enum Tabs {
  UPCOMING = 'UPCOMING',
  SETTINGS = 'SETTINGS',
}

const ProfilePage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(Tabs.UPCOMING);

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
    </StyledProfile>
  );
};

export default ProfilePage;
