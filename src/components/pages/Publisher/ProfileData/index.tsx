import React, { FunctionComponent, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { AbsoluteContent, IconButton, Tab, Tabset } from 'activate-components';
import { PublisherModel } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import ProfileCard from 'components/experience/ProfileCard';
import { PublisherActions } from 'components/experience/UserActions';
import { Tabs } from '../state';

interface Props {
  user: PublisherModel;
  activeTab: string;
  setActiveTab: (tab) => void;
}

const ProfileData: FunctionComponent<Props> = (props) => {
  const { goBack } = useHistory();
  const { activeTab, setActiveTab, user } = props;
  const { id, avatar, userName, name, count: { events, followers } } = user;
  const queryKey = useMemo(() => [QueryKey.FETCH_PUBLISHER, id], [id]);

  return (
    <ProfileCard
      avatar={avatar}
      name={name}
      userName={userName}
      leftStatLabel="Events"
      leftStatValue={events}
      rightStatLabel="Followers"
      rightStatValue={followers}
    >
      <AbsoluteContent top={16} left={16}>
        <IconButton
          variant="flat"
          icon="ARROW_LEFT"
          color="background"
          onClick={goBack}
        />
      </AbsoluteContent>
      <AbsoluteContent top={16} right={16}>
        <PublisherActions user={user} queryKey={queryKey} />
      </AbsoluteContent>
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        fullWidth
        mT
      >
        <Tab name={Tabs.EVENTS} label="Events" icon="CALENDAR" />
        <Tab name={Tabs.FOLLOWERS} label="Followers" icon="USERS" />
      </Tabset>
    </ProfileCard>
  );
};

export default ProfileData;
