import React, { FunctionComponent, useCallback, useState } from 'react';
import { formatAmount } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Paragraph } from 'components/base-components/Typography';
import Header from './Header';
import EventImage from './EventImage';
import { Actions, Card, Content, Divider, Footer, } from './styled';
import { useAppLayout } from '../../../providers/Layout';

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

const PresentationCard: FunctionComponent<Props> = (props) => {
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

  return (
    <Card isBooked={isBooked} layout={layout}>
      <Header title={title} address={address} author={author} date={date} />
      <Content>
        <EventImage src={image} alt="event" />
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
          <IconButton
            size="large"
            buttonColor="success"
            variant="flat"
            icon={Icons.SHARE}
            color={Colors.SUCCESS}
            onClick={() => undefined}
          />
          <IconButton
            size="large"
            buttonColor="info"
            variant="flat"
            icon={Icons.SEND}
            color={Colors.INFO}
            onClick={() => undefined}
          />
          <RenderIf condition={!isAFollowedEvent}>
            <IconButton
              size="large"
              buttonColor="success"
              variant="flat"
              icon={isBooked ? Icons.BOOKMARK_FILLED : Icons.ADD_BOOKMARK}
              color={Colors.ACCENT}
              secondaryColor={isBooked ? Colors.ACCENT : 'transparent'}
              onClick={handleBookActionClick}
            />
          </RenderIf>
          <RenderIf condition={isAFollowedEvent}>
            <IconButton
              size="large"
              buttonColor="error"
              variant="flat"
              icon={Icons.REMOVE_BOOKMARK}
              color={Colors.ERROR}
              onClick={() => undefined}
            />
          </RenderIf>
        </Actions>
      </Footer>
    </Card>
  );
};

export default PresentationCard;
