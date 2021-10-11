import { useCallback, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import categoriesApi from 'api/categories';
import interestsApi from 'api/interests';
import { QueryKey } from 'components/providers/Query';
import saveInterests from './actions/save-interests';
import interestsReducer, { State, Actions } from './reducer';
import { useAtomicSet } from '../../../../helpers';
import toggleTopCategory from './actions/toggle-top-category';

const initialState: State = {
  callingAPI: false,
  error: undefined,
  interests: [],
}

export default function useInterestsState() {
  const { goBack } = useHistory();
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
      handleInterests: useAtomicSet(dispatch, Actions.SET_INTERESTS),
      toggleTopCategory: useCallback(
        toggleTopCategory(dispatch, state.interests, categories?.data.results),
        [state.interests, categories],
      ),
      saveInterests: useCallback(
        saveInterests(dispatch, state.interests, goBack),
        [state.interests],
      ),
    },
  };
}
