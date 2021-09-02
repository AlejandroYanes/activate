import { FunctionComponent, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { RelationshipStatus } from 'models/user';
import { formatAmount } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import { IconButton } from 'components/base-components/Button';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import Events from './Events';
import Friends from './Friends';
import Following from './Following';
import PrivateAccount from './PrivateAccount';
import useUserState, { Tabs } from './state';
import { QueryKey } from '../../providers/Query';
import { ConsumerActions } from '../../experience/UserActions';

const UserModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const {
    state: {
      isLoading,
      user,
      errored,
      activeTab,
    },
    actions: {
      setActiveTab,
    },
  } = useUserState();

  const queryKey = useMemo(() => [QueryKey.FETCH_CONSUMER, user?.id], [user]);

  if (isLoading) {
    return (
      <Modal visible onClose={goBack} size="mobile">
        <FlexBox
          data-el="profile-modal-body"
          direction="column"
          align="stretch"
          padding="80px 6px 16px"
        >
          <LoadingScreen />
        </FlexBox>
      </Modal>
    );
  }

  if (errored) {
    return (
      <Modal visible onClose={goBack} size="mobile">
        <FlexBox
          data-el="profile-modal-body"
          direction="column"
          align="stretch"
          padding="80px 6px 16px"
        >
          <NoConnectionScreen message="We couldn't load this user's profile." />
        </FlexBox>
      </Modal>
    );
  }

  const {
    avatar,
    name,
    userName,
    count: {
      following,
      friends,
    },
    relationStatus,
  } = user;

  const myFriend = (
    relationStatus === RelationshipStatus.ACCEPTED ||
    relationStatus === RelationshipStatus.MUTED
  );

  const header = (
    <FlexBox justify="space-between" align="center" grow width="100%">
      <IconButton onClick={goBack} icon="ARROW_LEFT" />
      <ConsumerActions user={user} queryKey={queryKey} />
    </FlexBox>
  );

  if (!myFriend) {
    return (
      <PrivateAccount user={user} header={header} goBack={goBack} />
    );
  }

  return (
    <Modal visible title={header} onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="0 6px 16px"
      >
        <FlexBox
          data-el="avatar-section"
          align="center"
          padding="8px"
        >
          <Avatar size="xx-large" src={avatar} />
          <FlexBox justify="space-around" grow>
            <FlexBox direction="column" align="center">
              <Text>Following</Text>
              <Title level={2} color="accent">{formatAmount(following)}</Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Friends</Text>
              <Title level={2} color="accent">{formatAmount(friends)}</Title>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          data-el="user-section"
          direction="column"
          align="flex-start"
          padding="16px 8px"
        >
          <Text>{`@${userName}`}</Text>
          <Title level={2} color="brand">
            {name}
          </Title>
        </FlexBox>
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          mT
          mB
        >
          <Tab
            name={Tabs.EVENTS}
            label={Tabs.EVENTS}
            icon="CALENDAR"
          />
          <Tab
            name={Tabs.FOLLOWING}
            label={Tabs.FOLLOWING}
            icon="MEGAPHONE"
          />
          <Tab
            name={Tabs.FRIENDS}
            label={Tabs.FRIENDS}
            icon="USERS"
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case
            value={Tabs.EVENTS}
            component={Events}
          />
          <Case
            value={Tabs.FOLLOWING}
            component={Following}
            user={user.id}
          />
          <Case
            value={Tabs.FRIENDS}
            component={Friends}
            user={user.id}
          />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default UserModal;
