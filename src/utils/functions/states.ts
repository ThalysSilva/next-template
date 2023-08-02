import { useReducer } from 'react';

export function useStatesUtils() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return { forceUpdate };
}
