import React from 'react';
import EventCard from 'components/experience/EventCard';
import { events } from '../../Discover/events';

const Events = () => (
  <>
    <EventCard {...events[3]} />
    <EventCard {...events[0]} />
    <EventCard {...events[1]} />
  </>
);

export default Events;
