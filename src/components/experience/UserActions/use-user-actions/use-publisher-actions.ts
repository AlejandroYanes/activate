import { useMemo } from 'react';
import { useQueryClient } from 'react-query';
import updateRelation, { publisherActions, UserType } from './update-relation';

export default function usePublisherActions(queryKey, user) {
  const queryClient = useQueryClient();

  return useMemo(() => (
    publisherActions.map(action => (
      () => updateRelation(queryClient, queryKey, user, UserType.PUBLISHER, action)
    ))
  ), []);
}
