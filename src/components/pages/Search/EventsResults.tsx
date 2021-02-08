import React, { FunctionComponent } from 'react';
import { PresentationCard } from 'components/experience/EventCard';
import { events } from '../Discover/events';

const EventsResults: FunctionComponent = () => {
  return (
    <>
      <PresentationCard {...events[0]} />
      <PresentationCard {...events[3]} />
    </>
  );
};

export default EventsResults;
