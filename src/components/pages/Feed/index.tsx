import React, { FunctionComponent, useState } from 'react';
import { addDays } from 'date-fns';
import { Layout, useAppLayout } from 'components/providers/Layout';
import DayCalendar from 'components/base-components/DayCalendar';
import Page from 'components/base-components/Page';
import EventCard from 'components/experience/EventCard';
import { Option, Options } from 'components/base-components/Options';
import { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
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

enum EventsDisplay {
  All = 'all',
  ByDate = 'by-date',
}

const titleByLayoutMap = {
  [Layout.FULL]: 'Your upcoming events',
  [Layout.MIDDLE]: 'Your upcoming events',
  [Layout.SMALL]: 'Upcoming',
};

const FeedPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [option, setOption] = useState(EventsDisplay.ByDate);

  const actions = (
    <Options size="small" value={option} onChange={setOption}>
      <Option value={EventsDisplay.ByDate} label="By Date" icon={Icons.CALENDAR_FILLED} />
      <Option value={EventsDisplay.All} label="All" icon={Icons.GRID} />
    </Options>
  );

  return (
    <Page
      title={titleByLayoutMap[layout]}
      actions={actions}
      withTabBar
      data-el="feed-page"
    >
      <RenderIf condition={option === EventsDisplay.ByDate}>
        <SubHeader>
          <DayCalendar days={days} value={selectedDay} onChange={setSelectedDay} />
        </SubHeader>
      </RenderIf>
      <EventCard isAFollowedEvent {...events[0]} />
      <EventCard isAFollowedEvent {...events[1]} />
    </Page>
  );
};

export default FeedPage;
