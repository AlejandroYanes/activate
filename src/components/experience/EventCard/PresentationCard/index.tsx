import React, { FunctionComponent } from 'react';
import Colors from 'styles/colors';
import { formatDate } from 'helpers';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Avatar from 'components/base-components/Avatar';
import {
  AuthorName,
  Avatars,
  Bookmark,
  Card,
  Content,
  Header,
  Image,
  ImageSection,
  Info,
  InfoEntry,
  Row,
  Title,
} from './styled';

interface Props {
  image: string;
  title: string;
  author: string;
  address: string;
  date: Date;
  tickets: string;
}

const avatars = [
  { icon: (<Avatar icon="user1" />) },
  { icon: (<Avatar icon="user2" />) },
  { icon: (<Avatar icon="user6" />) },
];

const PresentationCard: FunctionComponent<Props> = (props) => {
  const {
    image,
    title,
    author,
    address,
    date,
    tickets,
  } = props;

  return (
    <Card>
      <ImageSection>
        <Image src={image} alt="event" />
        <Bookmark>
          <IconButton
            size="large"
            buttonColor="brand"
            color={Colors.DARK}
            secondaryColor="transparent"
            icon={Icons.BOOKMARK_FILLED}
            onClick={() => undefined}
          />
        </Bookmark>
      </ImageSection>
      <Content>
        <Row>
          <Header>
            <Title>{title}</Title>
            <AuthorName>{author}</AuthorName>
            <InfoEntry>
              <Avatars avatars={avatars} maxAvatars={3} />
              <span>Fabianne y otras 16k personas asistiran</span>
            </InfoEntry>
          </Header>
          <Info>
            <InfoEntry>
              <SvgIcon icon={Icons.MAP_PIN} color={Colors.GRAY_DARK} />
              <span>{address}</span>
            </InfoEntry>
            <InfoEntry>
              <SvgIcon icon={Icons.CALENDAR_FILLED} color={Colors.GRAY_DARK} />
              <span>{`${formatDate(date)}. Lasts 4 days.`}</span>
            </InfoEntry>
            <InfoEntry>
              <SvgIcon icon={Icons.TICKET} color={Colors.GRAY_DARK} />
              <span>{tickets}</span>
            </InfoEntry>
          </Info>
        </Row>
      </Content>
    </Card>
  );
};

export default PresentationCard;
