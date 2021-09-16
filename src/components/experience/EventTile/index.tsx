import React, { FunctionComponent } from 'react';
import { EventModel } from 'models/event';
import { Tile, Image } from './styled';

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
    <Tile to={`/app/event/${id}`}>
      <Image src={image} alt={name} />
    </Tile>
  );
};

export default EventTile;
