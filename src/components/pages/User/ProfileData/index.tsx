import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { ConsumerModel } from 'models/user';
import { Tab, Tabset } from 'components/base-components/Tabset';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import ProfileCard from 'components/experience/ProfileCard';
import { IconButton } from 'components/base-components/Button';
import Actions from './Actions';
import { Tabs } from '../state';

interface Props {
  user: ConsumerModel;
  activeTab: string;
  setActiveTab: (tab) => void;
}

const ProfileData: FunctionComponent<Props> = (props) => {
  const { goBack } = useHistory();
  const { activeTab, setActiveTab, user } = props;
  const { avatar, userName, name, lastName, friends, following } = user;

  return (
    <ProfileCard
      avatar={avatar}
      userName={userName}
      name={`${name} ${lastName}`}
      leftStatLabel="Following"
      leftStatValue={following}
      rightStatLabel="Friends"
      rightStatValue={friends}
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
        <Tab name={Tabs.FOLLOWING} label="Following" icon="MEGAPHONE" />
        <Tab name={Tabs.FRIENDS} label="Friends" icon="USERS" />
      </Tabset>
    </ProfileCard>
  );
};

export default ProfileData;
