import { useCallback, useEffect, useReducer } from 'react';
import { useQuery } from 'react-query';
import categoriesApi from 'api/categories';
import { QueryKey } from 'components/providers/Query';
import handleInterests from './actions/handle-interests';
import saveInterests from './actions/save-interests';
import interestsReducer, { Actions, State } from './reducer';
import interestsApi from '../../../../api/interests';

const initialState: State = {
  callingAPI: false,
  error: undefined,
  interests: [],
}

export default function useInterestsState() {
  const [state, dispatch] = useReducer(interestsReducer, initialState);
  const {
    isLoading: loadingCategories,
    data: categories,
    error: categoriesError,
  } = useQuery(
    QueryKey.FETCH_CATEGORIES,
    categoriesApi.getTree,
  );

  const {
    isLoading: loadingMyInterests,
    data: myInterests,
    error: myInterestsError,
  } = useQuery(
    QueryKey.FETCH_MY_INTERESTS,
    interestsApi.listMyInterests,
  );

  useEffect(() => {
    if (!loadingMyInterests && !myInterestsError) {
      const flatInterests = myInterests.data.map((interest) => interest.id);
      dispatch({ type: Actions.SET_INTERESTS, payload: flatInterests });
    }
  }, [loadingMyInterests]);

  return {
    state: {
      ...state,
      isLoading: loadingCategories || loadingMyInterests,
      allInterests: categories?.data.results,
      apiFailed: !!categoriesError || !!myInterestsError,
    },
    actions: {
      handleInterests: useCallback(
        handleInterests(dispatch, state.interests, categories?.data.results),
        [state.interests, categories],
      ),
      saveInterests: useCallback(
        saveInterests(dispatch, state.interests),
        [state.interests],
      ),
    },
  };
}
