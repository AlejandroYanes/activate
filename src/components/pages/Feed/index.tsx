import React, { FunctionComponent, useMemo, useState } from 'react';
import { addDays } from 'date-fns';
import { Layout, useAppLayout } from 'components/providers/Layout';
import DayCalendar from 'components/base-components/DayCalendar';
import Page from 'components/base-components/Page';
import EventCard from 'components/experience/EventCard';
import RenderIf from 'components/base-components/RenderIf';
import FlexBox from 'components/base-components/FlexBox';
import { Option, Options } from 'components/base-components/Options';
import { events } from '../Discover/events';

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
  [Layout.DESKTOP]: 'Your upcoming events',
  [Layout.TABLET]: 'Upcoming events',
  [Layout.MOBILE]: 'Upcoming',
};

const FeedPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [option, setOption] = useState(EventsDisplay.ByDate);

  const actions = useMemo(() => {
    if (layout !== Layout.MOBILE) {
      return (
        <Options size="small" value={option} onChange={setOption}>
          <Option
            value={EventsDisplay.ByDate}
            icon="CALENDAR_FILLED"
            label="By Date"
          />
          <Option
            value={EventsDisplay.All}
            icon="LIST"
            label="All"
          />
        </Options>
      );
    }

    return null;
  }, [layout, option]);

  return (
    <Page
      title={titleByLayoutMap[layout]}
      actions={actions}
      data-el="feed-page"
    >
      <RenderIf condition={option === EventsDisplay.ByDate}>
        <FlexBox align="center" padding="0 0 32px 0">
          <DayCalendar days={days} value={selectedDay} onChange={setSelectedDay} />
        </FlexBox>
      </RenderIf>
      <EventCard isAFollowedEvent {...events[0]} />
      <EventCard isAFollowedEvent {...events[1]} />
    </Page>
  );
};

export default FeedPage;
