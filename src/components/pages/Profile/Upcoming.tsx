import React, { FunctionComponent } from 'react';
import { PresentationCard } from 'components/experience/EventCard';
import { events } from 'components/pages/Discover/events';

const UpcomingEvents: FunctionComponent = () => (
  <>
    <PresentationCard {...events[0]} />
    <PresentationCard {...events[1]} />
  </>
);

export default UpcomingEvents;
