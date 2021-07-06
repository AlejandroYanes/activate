import React, { FunctionComponent } from 'react';
import EventCard from 'components/experience/EventCard';
import { events } from '../Discover/events';

const EventsResults: FunctionComponent = () => {
  return (
    <>
      <EventCard event={events[3] as any} />
      <EventCard event={events[0] as any} />
      <EventCard event={events[1] as any} />
    </>
  );
};

export default EventsResults;
