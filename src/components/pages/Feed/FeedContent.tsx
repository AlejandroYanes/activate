import React, { FunctionComponent, useMemo } from 'react';
import DayCalendar from 'components/base-components/DayCalendar';
import { LoadingScreen } from 'components/experience/Screens';
import EventCard, { EventSkeleton } from 'components/experience/EventCard';
import RenderIf from 'components/base-components/RenderIf';
import useFeedState from './state';

const FeedContent: FunctionComponent = () => {
  const {
    state: {
      isLoadingDays,
      isLoadingEvents,
      days,
      selectedDay,
      events,
    },
    actions: {
      setSelectedDay,
    },
  } = useFeedState();

  const eventCards = useMemo(() => (
    !!events
      ? events.map(event => <EventCard key={event.id} event={event} />)
      : []
  ), [events]);

  if (isLoadingDays) {
    return <LoadingScreen />;
  }

  const dayCalendar = (
    <RenderIf condition={days.length > 1}>
      <DayCalendar
        margin="0 auto 24px 0"
        days={days}
        value={selectedDay}
        onChange={setSelectedDay}
      />
    </RenderIf>
  );

  if (isLoadingEvents) {
    return (
      <>
        {dayCalendar}
        <EventSkeleton />
      </>
    );
  }

  return (
    <>
      {dayCalendar}
      {eventCards}
    </>
  );
};

export default FeedContent;
