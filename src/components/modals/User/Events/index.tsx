import React from 'react';
import EventCard from 'components/experience/EventCard';
import { events } from '../../../pages/Discover/events';

const Events = () => (
  <>
    <EventCard {...events[3]} hideAuthor />
    <EventCard {...events[0]} hideAuthor />
    <EventCard {...events[1]} hideAuthor />
  </>
);

export default Events;
