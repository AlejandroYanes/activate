import React, { FunctionComponent, useMemo } from 'react';
import EventCard from 'components/experience/EventCard';
import { StyledFeed } from './styled';
import { events } from './events';

function eventsFactory() {
  return events.map((event) => <EventCard key={event.id} {...event} />);
}

const FeedPage: FunctionComponent = () => {
  const eventCards = useMemo(eventsFactory, []);

  return (
    <StyledFeed>
      {eventCards}
    </StyledFeed>
  );
};

export default FeedPage;
