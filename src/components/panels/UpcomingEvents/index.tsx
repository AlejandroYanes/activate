import React, { FunctionComponent, useMemo } from 'react';
import { events } from '../../pages/Landing/events';
import UpcomingEvent from './UpcomingEvent';
import { Wrapper } from './styled/content';

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
