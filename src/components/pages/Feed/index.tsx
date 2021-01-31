import React, { FunctionComponent, useState } from 'react';
import { addDays } from 'date-fns';
import DayCalendar from 'components/base-components/DayCalendar';
import Page from 'components/base-components/Page';
import { PresentationCard } from 'components/experience/EventCard';
import { events } from '../Discover/events';
import { SubHeader } from './styled';

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
  addDays(today, 121),
  addDays(today, 123),
  addDays(today, 126),
  addDays(today, 128),
  addDays(today, 135),
  addDays(today, 160),
];

const FeedPage: FunctionComponent = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <Page title="Your upcoming events" data-el="feed-page">
      <SubHeader>
        <DayCalendar days={days} value={selectedDay} onChange={setSelectedDay} />
      </SubHeader>
      <PresentationCard {...events[0]} />
    </Page>
  );
};

export default FeedPage;
