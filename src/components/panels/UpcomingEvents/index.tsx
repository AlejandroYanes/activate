import React, { FunctionComponent, useMemo } from 'react';
import faker from 'faker';
import { SummaryCard } from 'components/experience/EventCard';
import { Wrapper } from './styled';

const events = new Array(3).fill(1).map(() => ({
  id: faker.random.uuid(),
  title: faker.lorem.words(5),
  date: faker.date.future(),
  address: faker.address.streetAddress(),
  isBooked: true,
}));

function eventFactory() {
  return events.map((event) => <SummaryCard key={event.id} {...event} mB />);
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
