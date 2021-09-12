import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { EventModel } from 'models/event';
import { Tile } from './styled';

interface Props {
  event: EventModel;
}

const EventTile: FunctionComponent<Props> = (props) => {
  const {
    event: {
      id,
      image,
      name,
    },
  } = props;

  return (
    <Link to={`/app/event/${id}`}>
      <Tile src={image} alt={name} />
    </Link>
  );
};

export default EventTile;
