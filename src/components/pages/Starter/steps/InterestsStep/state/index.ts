import { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import categoriesApi from 'api/categories';
import { useAtomicSet } from 'helpers';
import { QueryKey } from 'components/providers/Query';
import { useAuthActions } from 'components/providers/Auth';
import saveInterests from './actions/save-interests';
import toggleTopCategory from './actions/toggle-top-category';
import interestsReducer, { Actions, State } from './reducer';

const initialState: State = {
  callingAPI: false,
  interests: [],
}

export default function useInterestsState() {
  const { push } = useHistory();
  const { updateUserInfo } = useAuthActions();
  const [state, dispatch] = useReducer(interestsReducer, initialState);
  const { isLoading, data: response, error } = useQuery(
    QueryKey.FETCH_CATEGORIES,
    categoriesApi.getTree,
  );

  return {
    state: {
      ...state,
      isLoading,
      categories: response?.data.results,
      apiError: error,
    },
    actions: {
      handleInterests: useAtomicSet(dispatch, Actions.SET_INTERESTS),
      toggleTopCategory: useCallback(
        toggleTopCategory(dispatch, state.interests, response?.data.results),
        [state.interests, response],
      ),
      saveInterests: useCallback(
        saveInterests(dispatch, state.interests, updateUserInfo, push),
        [state.interests],
      ),
    },
  };
}
