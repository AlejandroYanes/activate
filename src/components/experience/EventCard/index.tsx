import React, { FunctionComponent, useState } from 'react';
import Colors from '../../../styles/colors';
import Button from '../../base-components/Button';
import Avatar from '../../base-components/Avatar';
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
  Author,
  AuthorName,
  Stats,
} from './styled';

import backgroundImage from '../../../assets/images/cuba-1082913_1920.jpg';

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
      </Footer>
    </Card>
  );
};

EventCard.defaultProps = {};

export default EventCard;
