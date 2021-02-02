import React, { FunctionComponent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Paragraph, Text } from 'components/base-components/Typography';
import EventImage from './EventImage';
import AuthorMenu from './AuthorMenu';
import {
  Actions,
  Address,
  Card,
  Content,
  DateBadge,
  Divider,
  Footer,
  Header,
  Title,
  TitleAndAddress,
} from './styled';

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
  isAFollowedEvent?: boolean;
}


const avatars = ['user1', 'user2', 'user6'];

const PresentationCard: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const {
    date,
    title,
    address,
    author,
    image,
    description,
    isAFollowedEvent,
  } = props;
  const [isBooked, setIsBooked] = useState(false);

  const handleBookActionClick = useCallback(() => {
    setIsBooked((previousState) => !previousState);
  }, []);

  return (
    <Card isBooked={isBooked}>
      <Header>
        <DateBadge>
          <span>{getMonthLabel(date).slice(0, 3)}</span>
          <span>{date.getDate()}</span>
        </DateBadge>
        <TitleAndAddress>
          <Link to="/event-detail">
            <Title level={3}>{title}</Title>
          </Link>
          <Address>
            <SvgIcon icon={Icons.MAP_PIN} color={Colors.FONT} />
            <Text>{address}</Text>
          </Address>
        </TitleAndAddress>
        <AuthorMenu {...author} />
      </Header>
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
        <AvatarGroup icons={avatars} label="+ 16k" size="small" />
        <Actions>
          <IconButton
            mR
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
              buttonColor="success"
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
