import { useCallback, useReducer } from 'react';
import { useQuery } from 'react-query';
import categoriesApi from 'api/categories';
import { QueryKey } from 'components/providers/Query';
import handleInterests from './actions/handle-interests';
import saveInterests from './actions/save-interests';
import interestsReducer, { State } from './reducer';

const initialState: State = {
  callingAPI: false,
  error: undefined,
  interests: [],
}

export default function useInterestsState() {
  const [state, dispatch] = useReducer(interestsReducer, initialState);
  const { isLoading, data: response, error } = useQuery(
    QueryKey.FETCH_CATEGORIES,
    categoriesApi.getTree,
  );

  return {
    state: {
      ...state,
      isLoading,
      allInterests: response?.data.results,
      apiError: error,
    },
    actions: {
      handleInterests: useCallback(
        handleInterests(dispatch, state.interests, response?.data.results),
        [state.interests, response],
      ),
      saveInterests: useCallback(
        saveInterests(dispatch, state.interests),
        [state.interests],
      ),
    },
  };
}
