import React, { FunctionComponent, useState } from 'react';
import { addDays } from 'date-fns';
import DayCalendar from 'components/base-components/DayCalendar';
import Page from 'components/base-components/Page';
import { PresentationCard } from 'components/experience/EventCard';
import { Option, Options } from 'components/base-components/Options';
import { events } from '../Discover/events';
import { SubHeader } from './styled';
import { Icons } from '../../base-components/SvgIcon';
import RenderIf from '../../base-components/RenderIf';

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

enum EventsDisplay {
  All = 'all',
  ByDate = 'by-date',
}

const FeedPage: FunctionComponent = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [option, setOption] = useState(EventsDisplay.ByDate);

  const actions = (
    <Options size="small" value={option} onChange={setOption}>
      <Option value={EventsDisplay.ByDate} label="By Date" icon={Icons.CALENDAR_FILLED} />
      <Option value={EventsDisplay.All} label="All" icon={Icons.GRID} />
    </Options>
  );

  return (
    <Page title="Your upcoming events" actions={actions} data-el="feed-page">
      <RenderIf condition={option === EventsDisplay.ByDate}>
        <SubHeader>
          <DayCalendar days={days} value={selectedDay} onChange={setSelectedDay} />
        </SubHeader>
      </RenderIf>
      <PresentationCard {...events[0]} />
    </Page>
  );
};

export default FeedPage;
