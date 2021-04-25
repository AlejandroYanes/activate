import { useCallback } from 'react';

export function generateAtomicSet(dispatch, action) {
  return (payload) => {
    dispatch({ type: action, payload });
  };
}

export function useAtomicSet(dispatch, action) {
  return useCallback(generateAtomicSet(dispatch, action), []);
}
