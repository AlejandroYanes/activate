import React, { FunctionComponent, useCallback, useState } from 'react';
import { getMonthLabel } from 'helpers';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import EventImage from './EventImage';
import {
  Actions,
  Address,
  Card,
  DateBadge,
  Content,
  Description,
  Divider,
  Footer,
  Header,
  Title,
  TitleAndAddress,
  Users,
  Avatars,
} from './styled';
import { useAppColors } from '../../../providers/Theme';

interface Props {
  title: string;
  address: string;
  date: Date;
  price: number[];
  image: string;
  description?: string;
}

const avatars = [
  { icon: (<Avatar icon="user1" />) },
  { icon: (<Avatar icon="user2" />) },
  { icon: (<Avatar icon="user6" />) },
];

const PresentationCard: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const {
    date,
    title,
    address,
    image,
    description,
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
          <Title>{title}</Title>
          <Address>
            <SvgIcon icon={Icons.MAP_PIN} color={Colors.FONT} />
            <span>{address}</span>
          </Address>
        </TitleAndAddress>
        <Avatar icon="user2" size="small" />
      </Header>
      <Content>
        <EventImage src={image} alt="event" />
        <RenderIf condition={!!description}>
          <Description>
            {description}
          </Description>
        </RenderIf>
      </Content>
      <Divider />
      <Footer>
        <Users>
          <Avatars avatars={avatars} maxAvatars={3} />
          <span>+16k</span>
        </Users>
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
          <IconButton
            size="large"
            buttonColor="success"
            variant="flat"
            icon={Icons.BOOKMARK_FILLED}
            color={Colors.ACCENT}
            secondaryColor={isBooked ? Colors.ACCENT : 'transparent'}
            onClick={handleBookActionClick}
          />
        </Actions>
      </Footer>
    </Card>
  );
};

export default PresentationCard;
