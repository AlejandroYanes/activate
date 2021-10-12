import React, { FunctionComponent, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { formatAmount } from 'helpers';
import { QueryKey } from 'components/providers/Query';
import { Layout, useAppLayout } from 'components/base-components/Configuration';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import { IconButton } from 'components/base-components/Button';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import { PublisherActions } from 'components/experience/UserActions';
import Events from './Events';
import Followers from './Followers';
import usePublisherState from './state';

enum ProfileTabs {
  FOLLOWERS = 'Followers',
  EVENTS = 'Events',
}

const PublisherModal: FunctionComponent = () => {
  const layout = useAppLayout();
  const { goBack } = useHistory();
  const {
    state: {
      isLoading,
      publisher,
      errored,
      activeTab,
    },
    actions: {
      setActiveTab,
    },
  } = usePublisherState();

  const queryKey = useMemo(() => (
    [QueryKey.FETCH_PUBLISHER, publisher?.id]
  ), [publisher]);

  const modalSize = layout === Layout.MOBILE ? 'mobile' : 'drawer';

  if (isLoading) {
    return (
      <Modal visible onClose={goBack} size={modalSize}>
        <FlexBox
          data-el="profile-modal-body"
          direction="column"
          align="stretch"
          padding="80px 16px 16px"
        >
          <LoadingScreen />
        </FlexBox>
      </Modal>
    );
  }

  if (errored) {
    return (
      <Modal visible onClose={goBack} size={modalSize}>
        <FlexBox
          data-el="profile-modal-body"
          direction="column"
          align="stretch"
          padding="80px 16px 16px"
        >
          <NoConnectionScreen message="We couldn't load this publisher's profile." />
        </FlexBox>
      </Modal>
    );
  }

  const header = (
    <FlexBox justify="space-between" align="center" grow width="100%">
      <IconButton onClick={goBack} icon="ARROW_LEFT" />
      <PublisherActions user={publisher} queryKey={queryKey} />
    </FlexBox>
  );

  const {
    avatar,
    name,
    userName,
    count: {
      followers,
      events,
    },
  } = publisher;

  return (
    <Modal visible title={header} onClose={goBack} size={modalSize}>
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="0 16px 16px"
      >
        <FlexBox
          data-el="avatar-section"
          align="center"
          padding="8px"
        >
          <Avatar size="xx-large" src={avatar} />
          <FlexBox justify="space-around" grow>
            <FlexBox direction="column" align="center">
              <Text>Events</Text>
              <Title level={2} color="accent">{formatAmount(events)}</Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Followers</Text>
              <Title level={2} color="accent">{formatAmount(followers)}</Title>
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
          fullWidth
          mT
          mB
        >
          <Tab
            name={ProfileTabs.EVENTS}
            icon="CALENDAR"
          />
          <Tab
            name={ProfileTabs.FOLLOWERS}
            icon="USERS"
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case
            value={ProfileTabs.EVENTS}
            component={Events}
          />
          <Case
            value={ProfileTabs.FOLLOWERS}
            component={Followers}
            publisher={publisher.id}
          />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default PublisherModal;
