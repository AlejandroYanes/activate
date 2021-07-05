import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { closestIndexTo } from 'date-fns';
import { useEventCenterUpdate } from 'event-center';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';

export default function useFeedState() {
  const [selectedDay, setSelectedDay] = useState(undefined);
  const queryClient = useQueryClient();

  const {
    isLoading: isLoadingDays,
    data: datesResponse,
    error: datesError,
    refetch: refetchDays,
  } = useQuery(
    QueryKey.FETCH_MY_UPCOMING_DATES,
    eventsApi.listMyUpcomingDates,
  );

  const {
    isLoading: isLoadingEvents,
    data: eventsResponse,
    error: eventsErrors,
    refetch: refetchEvents,
  } = useQuery(
    [QueryKey.FETCH_MY_UPCOMING_EVENTS, selectedDay],
    () => eventsApi.listMyUpcoming(selectedDay),
    { enabled: !!selectedDay }
  );

  const handleEventUnfollowed = useCallback(() => {
    const days = datesResponse.data.results;
    const events = eventsResponse.data.results;

    if (events.length > 1) {
      return refetchEvents();
    }

    if (days.length === 1) {
      queryClient.setQueriesData(QueryKey.FETCH_MY_UPCOMING_DATES, []);
    }

    const indexOfSelectedDay = closestIndexTo(
      selectedDay,
      days.map(day => new Date(day)),
    );
    const nextDay = indexOfSelectedDay === 0 ? days[1] : days[indexOfSelectedDay - 1];
    setSelectedDay(new Date(nextDay));
    refetchDays();
  }, [datesResponse, eventsResponse, selectedDay]);

  useEventCenterUpdate('EVENT_UNFOLLOWED', handleEventUnfollowed);

  useEffect(() => {
    if (datesResponse?.data.results.length > 0 && !selectedDay) {
      setSelectedDay(new Date(datesResponse.data.results[0]));
    }
  }, [datesResponse]);

  return {
    state: {
      isLoadingDays,
      isLoadingEvents,
      days: useMemo(() => (
        datesResponse
          ? datesResponse.data.results.map(date => new Date(date))
          : []
      ), [datesResponse]),
      events: eventsResponse?.data.results,
      selectedDay,
      daysErrored: !!datesError,
      eventsErrored: !!eventsErrors,
    },
    actions: {
      setSelectedDay,
    },
  };
}
