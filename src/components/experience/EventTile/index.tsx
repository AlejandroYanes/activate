import React, { FunctionComponent } from 'react';
import { Tile } from './styled';

interface Props {
  title: string;
  source: string;
  alt?: string;
}

const EventTile: FunctionComponent<Props> = (props) => {
  const { source, alt } = props;

  return (
    <Tile data-el="event-tile">
      <img src={source} alt={alt} />
    </Tile>
  );
};

export default EventTile;
