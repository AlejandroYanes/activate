import React, { FunctionComponent, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Avatar,
  Case,
  FlexBox,
  IconButton,
  Page,
  Switch,
  Tab,
  Tabset,
  Text,
  Title,
  capitalizeFirstLetter,
} from 'activate-components';
import { Modals } from 'components/modals';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import EventMenu from 'components/experience/EventMenu';
import Description from './Description';
import Comments from './Comnments';
import UnfollowModal from './UnfollowModal';
import { Image } from './styled';
import useEventState, { Tabs } from './state';

const EventDetailsPage: FunctionComponent = () => {
  const { goBack, push } = useHistory();
  const {
    state: {
      isLoading,
      failed,
      event,
      activeTab,
      isBooked,
      showUnfollowModal,
    },
    actions: {
      setActiveTab,
      handleBookmark,
      handleUnfollow,
      closeModal,
    },
  } = useEventState();

  const inviteUsers = useCallback(() => {
    const { id, name } = event;
    push(Modals.INVITE, { event: { id, name } });
  }, [event]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (failed) {
    return (
      <NoConnectionScreen message="We could not load the event's details" />
    );
  }

  const { name, author, image, comments } = event;

  return (
    <Page>
      <FlexBox direction="row" width="100%">
        <FlexBox width="40%">
          <Image src={image} alt="event-2" />
        </FlexBox>
        <FlexBox
          direction="column"
          align="stretch"
          padding="0 32px"
          grow
        >
          <FlexBox margin="0 0 48px 0">
            <IconButton onClick={goBack} icon="ARROW_LEFT" margin="12px 0 0 0" />
            <Title level={1} mL>
              {capitalizeFirstLetter(name)}
            </Title>
          </FlexBox>
          <FlexBox align="center" margin="8px 0">
            <Link to={`/app/publisher/${author.userName}`}>
              <FlexBox align="center">
                <Avatar src={author.avatar} />
                <FlexBox direction="column" padding="0 0 0 6px">
                  <Text size="small" color="secondary">@{author.userName}</Text>
                  <Text padding="4px 0 0 0">{author.name}</Text>
                </FlexBox>
              </FlexBox>
            </Link>
            <IconButton
              size="large"
              variant="flat"
              margin="0 0 0 auto"
              onClick={handleBookmark}
              color={isBooked ? 'accent' : 'background'}
              icon={isBooked ? 'BOOKMARK_FILLED' : 'BOOKMARK'}
            />
            <IconButton
              onClick={inviteUsers}
              icon="FORWARD"
              color="background"
              variant="flat"
              size="large"
            />
            <EventMenu
              inDetails
              event={event}
              going={isBooked}
              handleBookmark={handleBookmark}
            />
          </FlexBox>
          <Tabset
            activeTab={activeTab}
            onTabChange={setActiveTab}
            fullWidth
            mT
            mB
          >
            <Tab name={Tabs.Details} label="Details" icon="FORM" />
            <Tab name={Tabs.Comments} label="Comments" icon="COMMENTS" />
          </Tabset>
          <Switch by={activeTab}>
            <Case value={Tabs.Details} component={Description} event={event} />
            <Case
              value={Tabs.Comments}
              component={Comments}
              comments={comments}
            />
          </Switch>
          <UnfollowModal
            title={name}
            onClose={closeModal}
            onAccept={handleUnfollow}
            isVisible={showUnfollowModal}
          />
        </FlexBox>
      </FlexBox>
    </Page>
  );
};

export default EventDetailsPage;
