import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { ProfileStats } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import { useAuthData } from 'components/providers/Auth';
import { Tab, Tabset } from 'components/base-components/Tabset';
import ProfileCard from 'components/experience/ProfileCard';
import { Tabs } from '../';

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
    },
  } = useAuthData();

  const { data: response } = useQuery(
    QueryKey.FETCH_MY_PROFILE_STATS,
    usersApi.findMyStats,
  );
  const stats: ProfileStats = response?.data;

  return (
    <ProfileCard
      avatar={avatar}
      name={name}
      userName={userName}
      leftStatLabel="Following"
      leftStatValue={stats?.following}
      rightStatLabel="Friends"
      rightStatValue={stats?.friends}
    >
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        fullWidth
        mT
      >
        <Tab
          name={Tabs.Following}
          label={Tabs.Following}
          icon="MEGAPHONE"
        />
        <Tab
          name={Tabs.Friends}
          label={Tabs.Friends}
          icon="USERS"
        />
      </Tabset>
    </ProfileCard>
  );
};

export default ProfileData;
