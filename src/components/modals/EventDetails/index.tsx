import React, { FunctionComponent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { capitalizeFirstLetter } from 'helpers';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { IconButton } from 'components/base-components/Button';
import Avatar from 'components/base-components/Avatar';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import EventImage from 'components/experience/EventImage';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import EventMenu from 'components/experience/EventMenu';
import Description from './Description';
import Comments from './Comnments';
import UnfollowModal from './UnfollowModal';
import useEventDetailsState, { Tabs } from './state';

const EventDetailsModal: FunctionComponent = () => {
  const { goBack, push } = useHistory();
  const {
    state: {
      activeTab,
      isLoading,
      failed,
      event,
      isBooked,
      showUnfollowModal,
    },
    actions: {
      setActiveTab,
      handleBookmark,
      handleUnfollow,
      closeModal,
    },
  } = useEventDetailsState();

  const inviteUsers = useCallback(() => {
    const { id, name } = event;
    push(`/app/event/invite`, { event: { id, name } });
  }, [event]);

  if (isLoading) {
    return (
      <Modal onClose={goBack} size="mobile" visible>
        <LoadingScreen />
      </Modal>
    );
  }

  if (failed) {
    return (
      <Modal onClose={goBack} size="mobile" visible>
        <NoConnectionScreen message="We could not load the event's details" />
      </Modal>
    );
  }

  const { name, image, author, comments } = event;

  return (
    <Modal onClose={goBack} size="mobile" visible>
      <FlexBox direction="column" align="stretch" padding="0 16px 32px">
        <EventImage src={image} alt="virtual tour" margin="6px 0 0 0" />
        <FlexBox align="center" padding="16px 0">
          <IconButton
            onClick={goBack}
            icon="ARROW_LEFT"
            color="background"
            variant="flat"
          />
          <IconButton
            size="large"
            variant="flat"
            margin="0 0 0 auto"
            onClick={handleBookmark}
            color={isBooked ? 'accent' : 'background'}
            icon={isBooked ? 'BOOKMARK_FILLED' : 'BOOKMARK'}
          />
          <IconButton
            size="large"
            color="background"
            variant="flat"
            icon="FORWARD"
            onClick={inviteUsers}
          />
          <EventMenu
            inDetails
            event={event}
            going={isBooked}
            handleBookmark={handleBookmark}
          />
        </FlexBox>
        <Title level={1} size={32} padding="16px 0 24px">
          {capitalizeFirstLetter(name)}
        </Title>
        <Link to={`/app/publisher/${author.userName}`}>
          <FlexBox align="center">
            <Avatar src={author.avatar} />
            <FlexBox direction="column" padding="0 0 0 6px">
              <Text size="small" color="secondary">@{author.userName}</Text>
              <Text padding="4px 0 0 0">{author.name}</Text>
            </FlexBox>
          </FlexBox>
        </Link>
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
          <Case value={Tabs.Comments} component={Comments} comments={comments} />
        </Switch>
        <UnfollowModal
          title={name}
          onClose={closeModal}
          onAccept={handleUnfollow}
          isVisible={showUnfollowModal}
        />
      </FlexBox>
    </Modal>
  );
};

export default EventDetailsModal;

