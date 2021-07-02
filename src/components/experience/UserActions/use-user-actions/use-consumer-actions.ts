import { useMemo } from 'react';
import { useQueryClient } from 'react-query';
import updateRelation, { consumerActions, UserType } from './update-relation';

export default function useConsumerActions(queryKey, user) {
  const queryClient = useQueryClient();

  return useMemo(() => (
    consumerActions.map(action => (
      () => updateRelation(queryClient, queryKey, user, UserType.CONSUMER, action)
    ))
  ), []);
}
