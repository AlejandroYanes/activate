import React, { FunctionComponent, useState } from 'react';
import Colors from 'styles/colors';
import Button from 'components/base-components/Button';
import Avatar from 'components/base-components/Avatar';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Wave from './Wave';
import {
  Author,
  AuthorName,
  Card,
  Content,
  ContentImage,
  ContentWrapper,
  Date,
  Description,
  Footer,
  FooterContent,
  Separator,
  Stats,
  Title,
} from './styled';

const formatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

const arrowRightIcon = (
  <SvgIcon icon={Icons.CHEVRON_RIGHT} color={Colors.WHITE} />
);
const notFollowingIcon = (
  <SvgIcon icon={Icons.BOOKMARK_FILLED} secondaryColor={Colors.WHITE} color={Colors.DARK} />
);
const followingIcon = (
  <SvgIcon icon={Icons.BOOKMARK_FILLED} color={Colors.SUCCESS} />
);

interface Props {
  image: string;
  title: string;
  date: Date;
  description: string;
  author: {
    photo: string;
    name: string;
    email: string;
  };
  following?: boolean;
  comments: number;
}

const EventCard: FunctionComponent<Props> = (props) => {
  const {
    image,
    title,
    date,
    description,
    author: {
      photo,
      name,
    },
  } = props;
  const [following, setFollowing] = useState(false);

  return (
    <Card>
      <ContentWrapper>
        <ContentImage src={image} />
        <Content>
          <Title>{title}</Title>
          <Date>{formatter.format(date)}</Date>
          <Description>{description}</Description>
          <Separator />
          <Button
            color="white"
            label="Continue Reading"
            rightIcon={arrowRightIcon}
            onClick={() => undefined}
          />
        </Content>
      </ContentWrapper>
      <Footer>
        <Wave />
        <FooterContent>
          <Author>
            <Avatar icon={photo} size="small" />
            <AuthorName>{name}</AuthorName>
          </Author>
          <Stats>
            <Button
              onClick={() => setFollowing(!following)}
              color={following ? 'success' : 'gray'}
            >
              {following ? followingIcon : notFollowingIcon}
            </Button>
          </Stats>
        </FooterContent>
      </Footer>
    </Card>
  );
};

EventCard.defaultProps = {};

export default EventCard;
