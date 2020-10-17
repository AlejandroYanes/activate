import { useEffect, useState } from 'react';
import { uniqueId } from 'helpers';

export function useUniqueIds(ids: string[], useHash = false) {
  const [uIDs, setUIDs] = useState([]);

  useEffect(() => {
    const nextUIDs = ids.map((id) => uniqueId(id, useHash));
    setUIDs(nextUIDs);
  }, ids);

  return uIDs;
}
