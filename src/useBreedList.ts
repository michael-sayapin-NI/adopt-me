import { useState, useEffect, useDebugValue } from 'react';

import { Animal, BreedListAPIResponse } from './APIResponsesTypes';

type Status = 'unloaded' | 'loading' | 'loaded';

const localCache: Record<string, string[]> = {}; //TODO - change to browser local storage

export function useBreedList(animal: Animal) {
  const [breedList, setBreedList] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('unloaded');

  useDebugValue(
    `number of values in cache: ${Object.entries(localCache).length}`
  );

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      void requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = (await res.json()) as BreedListAPIResponse;
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]);

  return [breedList, status];
}
