import React, { FunctionComponent } from 'react';
import EventCard from 'components/experience/EventCard';
import { events } from '../Discover/events';

const EventsResults: FunctionComponent = () => {
  return (
    <>
      <EventCard {...events[0]} />
      <EventCard {...events[3]} />
    </>
  );
};

export default EventsResults;
