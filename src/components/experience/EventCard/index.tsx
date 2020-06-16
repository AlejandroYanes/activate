import React, { FunctionComponent, useState } from 'react';
import Button from '../../basse-components/Button';
import Avatar from '../../basse-components/Avatar';
import SvgIcon from '../../basse-components/SvgIcon';
import { Colors } from '../../basse-components/SvgIcon/colors';
import { Icons } from '../../basse-components/SvgIcon/Icons';
import './styles.scss';

const formatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

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
      email,
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
            variant="base"
            color="white"
            label="Continue Reading"
            rightIcon={<SvgIcon icon={Icons.CHEVRON_RIGHT} strokeColor={Colors.WHITE} />}
            onClick={() => undefined}
          />
        </div>
      </div>
      <div className="event-card__bottom">
        <div className="event-card__author">
          <Avatar icon={photo} size="medium" />
          <div className="event-card__author-data">
            <span className="event-card__author-name">{name}</span>
            <span className="event-card__author-email">{email}</span>
          </div>
        </div>
        <div className="event-card__stats">
          <Button
            variant="outline"
            label={likes}
            onClick={() => setIsLiked(!isLiked)}
            leftIcon={<SvgIcon icon={Icons.HEART} strokeColor={isLiked ? Colors.ERROR : Colors.BRAND} />}
            mR
          />
          <Button
            variant="fill"
            color="success"
            label={shares}
            onClick={() => setIsShared(!isShared)}
            leftIcon={<SvgIcon icon={Icons.SHARE} fillColor={isShared ? Colors.SUCCESS : Colors.WHITE} />}
          />
        </div>
      </div>
    </div>
  );
};

EventCard.defaultProps = {};

export default EventCard;
