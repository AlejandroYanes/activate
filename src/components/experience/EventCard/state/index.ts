import { useCallback, useState } from 'react';
import { EventModel } from 'models/event';
import handleBookmark from './actions/handle-bookmark';
import handleUnfollow from './actions/handle-unfollow';

export interface EventState {
  isBooked: boolean;
  showUnfollowModal: boolean;
}

export default function useEventState(event: EventModel) {
  const [showMore, setShowMore] = useState(false);
  const [state, setState] = useState<EventState>({
    isBooked: event.going,
    showUnfollowModal: false,
  });

  return {
    state: {
      ...state,
      showMore,
    },
    actions: {
      toggleMoreContent: useCallback(() => setShowMore(old => !old), []),
      handleBookmark: useCallback(
        handleBookmark(event, state, setState), [state.isBooked],
      ),
      handleUnfollow: useCallback(handleUnfollow(event, setState), []),
      closeModal: useCallback(() => {
        setState({ isBooked: true, showUnfollowModal: false });
      }, [])
    },
  };
}
