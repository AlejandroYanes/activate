import React, { FunctionComponent, useState } from 'react';
import { addDays } from 'date-fns';
import DayCalendar from 'components/base-components/DayCalendar';
import { PresentationCard } from 'components/experience/EventCard';
import { events } from '../Discover/events';
import { Content, Section, StyledFeed, Subheader, Title } from './styled';

const today = new Date();
const days = [
  today,
  addDays(today, 1),
  addDays(today, 3),
  addDays(today, 7),
  addDays(today, 30),
  addDays(today, 37),
  addDays(today, 57),
  addDays(today, 120),
];

const FeedPage: FunctionComponent = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <StyledFeed data-el="feed-page">
      <Section>
        <Title>
          Your upcoming events
        </Title>
        <Subheader>
          <DayCalendar days={days} value={selectedDay} onChange={setSelectedDay} />
        </Subheader>
        <Content>
          <PresentationCard {...events[0]} />
        </Content>
      </Section>
    </StyledFeed>
  );
};

export default FeedPage;
