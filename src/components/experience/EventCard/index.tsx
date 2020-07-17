import React, { FunctionComponent, useState } from 'react';
import Colors from 'styles/colors';
import Button from 'components/base-components/Button';
import Avatar from 'components/base-components/Avatar';
import SvgIcon from 'components/base-components/SvgIcon';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import {
  Card,
  Content,
  ContentWrapper,
  ContentImage,
  Title,
  Date,
  Description,
  Separator,
  Footer,
  Wave,
  FooterContent,
  Author,
  AuthorName,
  Stats,
} from './styled';

import backgroundImage from 'assets/images/cuba-1082913_1920.jpg';

const formatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

const arrowRightIcon = <SvgIcon icon={Icons.CHEVRON_RIGHT} strokeColor={Colors.WHITE} />;
const heartIcon = <SvgIcon icon={Icons.HEART} strokeColor={Colors.GRAY} />;
const heartFilledIcon = <SvgIcon icon={Icons.HEART_FILLED} fillColor={Colors.ERROR} />;
const shareIcon = <SvgIcon icon={Icons.SHARE} fillColor={Colors.GRAY} />;
const shareFilledIcon = <SvgIcon icon={Icons.SHARE} fillColor={Colors.SUCCESS} />;

interface Props {
  title: string;
  date: Date;
  description: string;
  author: {
    photo: string;
    name: string;
    email: string;
  };
  stats: {
    likes: number;
    shares: number;
  };
}

const wave = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,213.3C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
  </svg>
);

const EventCard: FunctionComponent<Props> = (props) => {
  const {
    title,
    date,
    description,
    author: {
      photo,
      name,
    },
    stats: {
      likes,
      shares,
    },
  } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  return (
    <Card>
      <ContentWrapper>
        <ContentImage src={backgroundImage} />
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
        <Wave>
          {wave}
        </Wave>
        <FooterContent>
          <Author>
            <Avatar icon={photo} size="small" />
            <AuthorName>{name}</AuthorName>
          </Author>
          <Stats>
            <Button
              color="gray"
              label={likes}
              onClick={() => setIsLiked(!isLiked)}
              leftIcon={isLiked ? heartFilledIcon : heartIcon}
              mR
            />
            <Button
              color="gray"
              label={shares}
              onClick={() => setIsShared(!isShared)}
              leftIcon={isShared ? shareFilledIcon : shareIcon}
            />
          </Stats>
        </FooterContent>
      </Footer>
    </Card>
  );
};

EventCard.defaultProps = {};

export default EventCard;
