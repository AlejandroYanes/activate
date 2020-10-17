import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { usePanelActions } from 'components/providers/PanelSections';
import EventCard from 'components/experience/EventCard';
import { StyledFeed } from './styled';
import { events } from './events';

function eventsFactory() {
  return events.map((event) => <EventCard key={event.id} {...event} />);
}

const FeedPage: FunctionComponent = () => {
  const eventCards = useMemo(eventsFactory, []);
  const { resetPanelSections } = usePanelActions();

  useEffect(resetPanelSections, []);

  return (
    <StyledFeed>
      {eventCards}
    </StyledFeed>
  );
};

export default FeedPage;
