import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { PublisherModel } from 'models/user';
import { Tab, Tabset } from 'components/base-components/Tabset';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import ProfileCard from 'components/experience/ProfileCard';
import { IconButton } from 'components/base-components/Button';
import Actions from './Actions';
import { Tabs } from '../state';

interface Props {
  user: PublisherModel;
  activeTab: string;
  setActiveTab: (tab) => void;
}

const ProfileData: FunctionComponent<Props> = (props) => {
  const { goBack } = useHistory();
  const { activeTab, setActiveTab, user } = props;
  const { avatar, userName, name, lastName, events, followers } = user;

  return (
    <ProfileCard
      avatar={avatar}
      name={`${name} ${lastName}`}
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
        <Actions user={user} />
      </AbsoluteContent>
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        fullWidth
        mT
      >
        <Tab name={Tabs.EVENTS} label="Events" icon="CALENDAR_FILLED" />
        <Tab name={Tabs.FOLLOWERS} label="Followers" icon="USERS" />
      </Tabset>
    </ProfileCard>
  );
};

export default ProfileData;
