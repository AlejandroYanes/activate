import React, { FunctionComponent } from 'react';
import { useAuthData } from 'components/providers/Auth';
import { Tab, Tabset } from 'components/base-components/Tabset';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import ProfileCard from 'components/experience/ProfileCard';
import ProfileActions from './ProfileActions';
import { ProfileTabs } from '../';

interface Props {
  activeTab: string;
  setActiveTab: (tab) => void;
}

const ProfileData: FunctionComponent<Props> = (props) => {
  const { activeTab, setActiveTab } = props;
  const {
    userInfo: {
      avatar,
      userName,
      name,
      lastName,
    },
  } = useAuthData();

  return (
    <ProfileCard
      avatar={avatar}
      name={`${name} ${lastName}`}
      userName={userName}
      leftStatLabel="Following"
      leftStatValue={120}
      rightStatLabel="Friends"
      rightStatValue={80}
    >
      <AbsoluteContent top={16} right={16}>
        <ProfileActions />
      </AbsoluteContent>
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        fullWidth
        mT
      >
        <Tab
          name={ProfileTabs.Following}
          label={ProfileTabs.Following}
          icon="MEGAPHONE"
        />
        <Tab
          name={ProfileTabs.Friends}
          label={ProfileTabs.Friends}
          icon="USERS"
        />
        <Tab
          name={ProfileTabs.Setting}
          label={ProfileTabs.Setting}
          icon="SLIDERS_VERT"
        />
      </Tabset>
    </ProfileCard>
  );
};

export default ProfileData;
