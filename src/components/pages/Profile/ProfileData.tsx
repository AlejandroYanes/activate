import React, { FunctionComponent } from 'react';
import { Icons } from 'components/base-components/SvgIcon';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Tab, Tabset } from 'components/base-components/Tabset';
import ProfileCard from 'components/experience/ProfileCard';
import { ProfileTabs } from '.';

interface Props {
  activeTab: string;
  setActiveTab: (tab) => void;
}

const ProfileData: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { activeTab, setActiveTab } = props;

  return (
    <ProfileCard
      image="user2"
      name="Alejandro Yanes"
      userName="@alejandro.yanes94"
      leftStatLabel="Following"
      leftStatValue={120}
      rightStatLabel="Friends"
      rightStatValue={80}
    >
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        compact={layout === Layout.SMALL}
        fullWidth
        mT
      >
        <Tab
          name={ProfileTabs.Following}
          label={ProfileTabs.Following}
          icon={Icons.MEGAPHONE}
        />
        <Tab
          name={ProfileTabs.Friends}
          label={ProfileTabs.Friends}
          icon={Icons.USERS}
        />
        <Tab
          name={ProfileTabs.Setting}
          label={ProfileTabs.Setting}
          icon={Icons.SETTINGS}
        />
      </Tabset>
    </ProfileCard>
  );
};

export default ProfileData;
