import React, { FunctionComponent, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { Tab, Tabset } from 'components/base-components/Tabset';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import { IconButton } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import ProfileCard from 'components/experience/ProfileCard';
import { ConsumerActions } from 'components/experience/UserActions';
import { Tabs } from '../state';
import { QueryKey } from '../../../providers/Query';

interface Props {
  user: ConsumerModel;
  activeTab?: string;
  setActiveTab?: (tab) => void;
}

const ProfileData: FunctionComponent<Props> = (props) => {
  const { goBack } = useHistory();
  const { activeTab, setActiveTab, user } = props;
  const { id, avatar, userName, name, friends, following, relationStatus } = user;
  const myFriend = (
    relationStatus === RelationshipStatus.ACCEPTED ||
    relationStatus === RelationshipStatus.MUTED
  );

  const queryKey = useMemo(() => [QueryKey.FETCH_CONSUMER, id], [id]);

  return (
    <ProfileCard
      avatar={avatar}
      userName={userName}
      name={name}
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
        <ConsumerActions user={user} queryKey={queryKey} />
      </AbsoluteContent>
      <RenderIf condition={myFriend}>
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fullWidth
          mT
        >
          <Tab name={Tabs.EVENTS} label="Events" icon="CALENDAR" />
          <Tab name={Tabs.FOLLOWING} label="Following" icon="MEGAPHONE" />
          <Tab name={Tabs.FRIENDS} label="Friends" icon="USERS" />
        </Tabset>
      </RenderIf>
    </ProfileCard>
  );
};

export default ProfileData;
