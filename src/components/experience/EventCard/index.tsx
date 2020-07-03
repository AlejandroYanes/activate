import React, { FunctionComponent, useState } from 'react';
import Colors from '../../../styles/colors';
import Button from '../../base-components/Button';
import Avatar from '../../base-components/Avatar';
import SvgIcon from 'components/base-components/SvgIcon';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import './styles.scss';

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
    <div className="event-card">
      <div className="event-card__image">
        <div className="event-card__content">
          <h1 className="event-card__content__title">{title}</h1>
          <div className="event-card__content__date">{formatter.format(date)}</div>
          <p className="event-card__content__description">{description}</p>
          <div className="event-card__content__separator" />
          <Button
            color="white"
            label="Continue Reading"
            rightIcon={arrowRightIcon}
            onClick={() => undefined}
          />
        </div>
      </div>
      <div className="event-card__bottom">
        <div className="event-card__author">
          <Avatar icon={photo} size="small" />
          <span className="event-card__author-name">{name}</span>
        </div>
        <div className="event-card__stats">
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
        </div>
      </div>
    </div>
  );
};

EventCard.defaultProps = {};

export default EventCard;
