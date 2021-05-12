import React, { FunctionComponent } from 'react';
import { useAuthActions } from 'components/providers/Auth';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import ProfileCard from 'components/experience/ProfileCard';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import IconButton from 'components/base-components/IconButton';
import { ProfileTabs } from '.';

interface Props {
  activeTab: string;
  setActiveTab: (tab) => void;
}

const ProfileData: FunctionComponent<Props> = (props) => {
  const { activeTab, setActiveTab } = props;
  const { logout } = useAuthActions();

  return (
    <ProfileCard
      image="user7"
      name="Alejandro Yanes"
      userName="@alejandro.yanes94"
      leftStatLabel="Following"
      leftStatValue={120}
      rightStatLabel="Friends"
      rightStatValue={80}
    >
      <AbsoluteContent top={16} right={16}>
        <IconButton onClick={logout} icon={Icons.LOGOUT} />
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
