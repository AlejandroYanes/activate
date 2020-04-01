import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from '../../basse-components/Button';

const formatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

export default function EventCard(props) {
  const {
    title,
    date,
    description,
  } = props;

  return (
    <div className="event-card">
      <div className="event-card__image">
        <div className="event-card__content">
          <h1 className="event-card__content__title">{title}</h1>
          <div className="event-card__content__date">{formatter.format(date)}</div>
          <p className="event-card__content__description">{description}</p>
          <div className="event-card__content__separator" />
          <Button
            className="event-card__content__button"
            variant="transparent"
            align="start"
            label="Continue Reading"
            onClick={() => undefined}
          />
        </div>
      </div>
      <div className="event-card__bottom">
        Content
      </div>
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired,
  // author: PropTypes.shape({
  //   name: PropTypes.string,
  //   email: PropTypes.string,
  // }).isRequired,
};

EventCard.defaultProps = {};
