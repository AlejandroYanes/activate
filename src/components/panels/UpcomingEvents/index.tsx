import React, { FunctionComponent, useMemo } from 'react';
import UpcomingEvent from './UmpcomingEvent';
import { Wrapper } from './styled/content';
import { events } from '../../pages/Discover/events';

function eventFactory() {
  return events.slice(0,3).map((event) => <UpcomingEvent key={event.id} {...event} />);
}

const UpcomingEventsPanel: FunctionComponent = () => {
  const eventCards = useMemo(eventFactory, []);
  return (
    <Wrapper>
      {eventCards}
    </Wrapper>
  );
};

export default UpcomingEventsPanel;
