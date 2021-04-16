import React, { FunctionComponent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatAmount } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import RenderIf from 'components/base-components/RenderIf';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Paragraph } from 'components/base-components/Typography';
import EventImage from 'components/experience/EventImage';
import {
  NotificationType,
  showNotification,
} from 'components/experience/NotificationCenter';
import Header from './Header';
import ForwardButton from './ForwardButton';
import ActionsMenu from './ActionsMenu';
import BookmarkButton from './BookmarkButton';
import UnfollowModal from './UnfollowModal';
import { Actions, Card, Content, Divider, Footer } from './styled';

interface Props {
  title: string;
  address: string;
  date: Date;
  author: {
    id: string;
    avatarUrl: string;
    name: string;
  };
  image: string;
  description?: string;
  attendees?: number;
  isAFollowedEvent?: boolean;
  hideAuthor?: boolean;
  hideFooter?: boolean;
}

const avatars = ['user1', 'user2', 'user6', 'user12'];

const EventCard: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const {
    date,
    title,
    address,
    author,
    image,
    description,
    attendees,
    isAFollowedEvent,
    hideAuthor,
    hideFooter,
  } = props;
  const [{ isBooked, showUnfollowModal }, setState] = useState({
    isBooked: isAFollowedEvent,
    showUnfollowModal: false,
  });

  const handleBookmark = useCallback(() => {
    if (isBooked) {
      setState({
        isBooked,
        showUnfollowModal: true,
      });
    } else {
      showNotification({
        id: 'following-event',
        type: NotificationType.SUCCESS,
        title: 'Congrats',
        message: `You are now following the event: ${title}`,
      });
      setState({ isBooked: true, showUnfollowModal: false });
    }
  }, [isBooked]);

  const handleUnfollow = useCallback(() => {
    setState({ isBooked: false, showUnfollowModal: false });
  }, []);

  const closeModal = useCallback(() => {
    setState({ isBooked: true, showUnfollowModal: false });
  }, []);

  const link = layout !== Layout.MOBILE ? '/event-details' : '#event-details';

  return (
    <>
      <Card isBooked={isBooked} layout={layout}>
        <Header
          date={date}
          title={title}
          address={address}
          author={author}
          hideAuthor={hideAuthor}
        />
        <Content>
          <Link to={link}>
            <EventImage src={image} alt={title} />
          </Link>
          <RenderIf condition={!!description}>
            <Paragraph mT>
              {description}
            </Paragraph>
          </RenderIf>
        </Content>
        <RenderIf condition={!hideFooter}>
          <Divider />
          <Footer>
            <AvatarGroup
              icons={avatars}
              label={formatAmount(attendees)}
              size="small"
            />
            <Actions>
              <BookmarkButton
                isBooked={isBooked}
                onClick={handleBookmark}
              />
              <ForwardButton />
              <ActionsMenu author={author.name} />
            </Actions>
          </Footer>
        </RenderIf>
      </Card>
      <UnfollowModal
        title={title}
        isVisible={showUnfollowModal}
        onAccept={handleUnfollow}
        onClose={closeModal}
      />
    </>
  );
};

EventCard.defaultProps = {
  isAFollowedEvent: false,
    hideAuthor: false,
};

export default EventCard;
