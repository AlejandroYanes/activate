import React from 'react';
import faker from 'faker';
import EventCard from 'components/experience/EventCard';
import { events } from '../../../pages/Discover/events';

const Events = () => (
  <>
    <EventCard {...events[3]} isAFollowedEvent={faker.random.boolean()} hideAuthor />
    <EventCard {...events[0]} isAFollowedEvent={faker.random.boolean()} hideAuthor />
    <EventCard {...events[1]} isAFollowedEvent={faker.random.boolean()} hideAuthor />
  </>
);

export default Events;
