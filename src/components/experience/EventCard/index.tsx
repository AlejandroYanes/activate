import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { EventModel } from 'models/event';
import { Layout, useAppLayout } from 'components/providers/Layout';
import RenderIf from 'components/base-components/RenderIf';
import EventImage from 'components/experience/EventImage';
import Header from './Header';
import InviteButton from './InviteButton';
import ActionsMenu from './ActionsMenu';
import BookmarkButton from './BookmarkButton';
import UnfollowModal from './UnfollowModal';
import Attendance from './Attendance';
import { Actions, Card, Content, Divider, Footer } from './styled';
import useEventState from './state';

import EventSkeleton from './Skeleton';
import { Paragraph } from '../../base-components/Typography';
import { Button } from '../../base-components/Button';
export { EventSkeleton };

interface Props {
  event: EventModel;
  hideAuthor?: boolean;
  readonly?: boolean;
}

const EventCard: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { event, hideAuthor, readonly } = props;
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
    author,
    image,
    description,
    going,
  } = event;

  const link = layout !== Layout.MOBILE ? '/app/event-details' : '#event-details';

  return (
    <>
      <Card isBooked={isBooked}>
        <Header
          date={date}
          title={name}
          address={address}
          author={author}
          hideAuthor={hideAuthor}
          readonly={readonly}
        />
        <Content>
          <Link to={link}>
            <EventImage src={image} alt={name} />
          </Link>
          <RenderIf condition={!!description}>
            <Button
              sm
              onClick={toggleMoreContent}
              label={showMore ? 'Show less' : 'Show more'}
              margin="6px 0 6px auto"
            />
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
