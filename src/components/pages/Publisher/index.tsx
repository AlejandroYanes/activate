import React, { FunctionComponent } from 'react';
import Page from 'components/base-components/Page';
import { IconButton } from 'components/base-components/Button';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import ProfileCard from 'components/experience/ProfileCard';
import LoadingScreen from 'components/experience/LoadingScreen';
import { NoConnectionScreen } from 'components/experience/ErrorScreen';
import Events from './Events';
import Followers from './Followers';
import usePublisherState, { Tabs } from './state';

const emptyAction = () => undefined;

const PublisherPage: FunctionComponent = () => {
  const {
    state: {
      activeTab,
      isLoading,
      errored,
      publisher,
    },
    actions: {
      setActiveTab,
    },
  } = usePublisherState();

  if (isLoading) {
    return (
      <Page>
        <LoadingScreen />
      </Page>
    );
  }

  if (errored) {
    return (
      <Page>
        <NoConnectionScreen message="We couldn't load this publisher's profile." />
      </Page>
    );
  }

  const { events, followers, ...rest } = publisher;

  return (
    <Page>
      <ProfileCard
        avatar="user4"
        leftStatLabel="Events"
        leftStatValue={events}
        rightStatLabel="Followers"
        rightStatValue={followers}
        {...rest}
      >
        <AbsoluteContent top={16} right={16}>
          <IconButton
            icon="STAR"
            size="large"
            color="accent"
            variant="flat"
            onClick={emptyAction}
          />
        </AbsoluteContent>
        <Tabset activeTab={activeTab} onTabChange={setActiveTab}>
          <Tab
            name={Tabs.EVENTS}
            label={Tabs.EVENTS}
            icon="CALENDAR_FILLED"
          />
          <Tab
            name={Tabs.FOLLOWERS}
            label={Tabs.FOLLOWERS}
            icon="USERS"
          />
        </Tabset>
      </ProfileCard>
      <Switch by={activeTab}>
        <Case value={Tabs.EVENTS} component={Events} />
        <Case value={Tabs.FOLLOWERS} component={Followers} />
      </Switch>
    </Page>
  );
};

export default PublisherPage;
