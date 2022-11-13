/**
 * @jest-environment jsdom
 */

import { expect, test, describe } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import { FetchMock } from 'jest-fetch-mock';

import { useBreedList } from '../useBreedList';
import { Animal } from '../APIResponsesTypes';

const fetchMock = fetch as FetchMock;

describe('useBreedList', () => {
  test('gives an empty list with no animal', () => {
    const { result } = renderHook(() =>
      useBreedList(undefined as unknown as Animal)
    );
    const [breedList, status] = result.current;

    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded');
  });

  test('Gives back breeds with an animal', async () => {
    const breeds = [
      'Havanese',
      'Bichon Frise',
      'Poodle',
      'Maltese',
      'Golden Retriever',
      'Labrador',
      'Husky',
    ];

    fetchMock.mockResponseOnce(
      JSON.stringify({
        animal: 'dog',
        breeds,
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useBreedList('dog'));
    await waitForNextUpdate();
    const [breedList, status] = result.current;

    expect(status).toBe('loaded');
    expect(breedList).toEqual(breeds);
  });
});
