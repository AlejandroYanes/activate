import React from 'react';
import EventCard from 'components/experience/EventCard';
import { events } from '../../../pages/Discover/events';

const Events = () => (
  <>
    <EventCard event={events[3] as any} hideAuthor />
    <EventCard event={events[0] as any} hideAuthor />
    <EventCard event={events[1] as any} hideAuthor />
  </>
);

export default Events;
