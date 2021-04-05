import React, { FunctionComponent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatAmount } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Paragraph } from 'components/base-components/Typography';
import EventImage from 'components/experience/EventImage';
import Header from './Header';
import ForwardButton from './ForwardButton';
import { Actions, Card, Content, Divider, Footer } from './styled';

interface Props {
  title: string;
  address: string;
  date: Date;
  author: {
    name: string;
    userName: string;
    following: boolean;
  };
  image: string;
  description?: string;
  attendees?: number;
  isAFollowedEvent?: boolean;
}


const avatars = ['user1', 'user2', 'user6'];

const EventCard: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const Colors = useAppColors();
  const {
    date,
    title,
    address,
    author,
    image,
    description,
    attendees,
    isAFollowedEvent,
  } = props;
  const [isBooked, setIsBooked] = useState(false);

  const handleBookActionClick = useCallback(() => {
    setIsBooked((previousState) => !previousState);
  }, []);

  const link = layout !== Layout.MOBILE ? '/event-details' : '#event-details';

  return (
    <Card isBooked={isBooked} layout={layout}>
      <Header title={title} address={address} author={author} date={date} />
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
      <Divider />
      <Footer>
        <AvatarGroup icons={avatars} label={formatAmount(attendees)} size="small" />
        <Actions>
          <ForwardButton />
          <RenderIf condition={!isAFollowedEvent}>
            <IconButton
              size="large"
              buttonColor="accent"
              variant="flat"
              icon={isBooked ? Icons.BOOKMARK_FILLED : Icons.ADD_BOOKMARK}
              color={Colors.ACCENT}
              secondaryColor={isBooked ? Colors.ACCENT : 'transparent'}
              onClick={handleBookActionClick}
            />
          </RenderIf>
        </Actions>
      </Footer>
    </Card>
  );
};

export default EventCard;
