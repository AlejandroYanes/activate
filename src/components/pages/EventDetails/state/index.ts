import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';
import handleBookmark from './actions/handle-bookmark';
import handleUnfollow from './actions/handle-unfollow';

export enum Tabs {
  Details = 'Details',
  Comments = 'Comments',
}

export interface EventState {
  isBooked: boolean;
  showUnfollowModal: boolean;
  activeTab: Tabs;
}

export default function useEventState() {
  const [state, setState] = useState<EventState>({
    isBooked: false,
    showUnfollowModal: false,
    activeTab: Tabs.Details,
  });

  const { eventId } = useParams<{ eventId: string }>();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(
    [QueryKey.FETCH_EVENT, eventId],
    () => eventsApi.getDetails(eventId),
    { enabled: !!eventId },
  );

  useEffect(() => {
    if (response?.data) {
      setState((old) => ({ ...old, isBooked: response?.data.going }));
    }
  }, [response]);

  const event = response?.data;

  return {
    state: {
      ...state,
      isLoading,
      failed: !!error,
      event,
    },
    actions: {
      handleBookmark: useCallback(
        handleBookmark(event, state, setState), [event, state.isBooked],
      ),
      handleUnfollow: useCallback(handleUnfollow(event, setState), [event]),
      closeModal: useCallback(() => {
        setState((old) => ({
          ...old,
          isBooked: true,
          showUnfollowModal: false,
        }));
      }, []),
      setActiveTab: useCallback((tab) => {
        setState((old) => ({ ...old, activeTab: tab }))
      }, []),
    },
  };
}
