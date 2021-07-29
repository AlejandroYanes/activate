import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { EventModel } from 'models/event';
import { Layout, useAppLayout } from 'components/providers/Layout';
import RenderIf from 'components/base-components/RenderIf';
import EventImage from 'components/experience/EventImage';
import { Paragraph } from 'components/base-components/Typography';
import Header from './Header';
import InviteButton from './InviteButton';
import ActionsMenu from './ActionsMenu';
import BookmarkButton from './BookmarkButton';
import UnfollowModal from './UnfollowModal';
import Attendance from './Attendance';
import EventSkeleton from './Skeleton';
import { Actions, Card, Content, Divider, Footer } from './styled';
import useEventState from './state';

export { EventSkeleton };

interface Props {
  event: EventModel;
  hideAuthor?: boolean;
  readonly?: boolean;
}

const EventCard: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { event, readonly } = props;
  const {
    state: {
      isBooked,
      showUnfollowModal,
      showMore,
    },
    actions: {
      toggleMoreContent,
      handleBookmark,
      handleUnfollow,
      closeModal,
    },
  } = useEventState(event);

  const {
    date,
    name,
    address,
    image,
    description,
    going,
  } = event;

  const link = layout !== Layout.MOBILE ? '/app/event-details' : '#event-details';

  return (
    <>
      <Card isBooked={isBooked}>
        <Link to={link}>
          <EventImage src={image} alt={name} />
        </Link>
        <Content>
          <Header
            date={date}
            title={name}
            address={address}
            hasDescription={!!description}
            showMore={showMore}
            toggleMoreContent={toggleMoreContent}
          />
          <RenderIf condition={!!description}>
            <RenderIf condition={showMore}>
              <Paragraph mT mB>
                {description}
              </Paragraph>
            </RenderIf>
          </RenderIf>
        </Content>
        <Divider />
        <Footer>
          <Attendance event={event} />
          <RenderIf condition={!readonly}>
            <Actions>
              <BookmarkButton
                isBooked={isBooked}
                onClick={handleBookmark}
              />
              <InviteButton event={event} />
              <ActionsMenu
                event={name}
                going={going}
                handleBookmark={handleBookmark}
              />
            </Actions>
          </RenderIf>
        </Footer>
      </Card>
      <UnfollowModal
        title={name}
        isVisible={showUnfollowModal}
        onAccept={handleUnfollow}
        onClose={closeModal}
      />
    </>
  );
};

EventCard.defaultProps = {
  hideAuthor: false,
};

export default EventCard;
