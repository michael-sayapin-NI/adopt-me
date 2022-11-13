/**
 * @jest-environment jsdom
 */

import { expect, test, describe } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';

import { useBreedList } from '../useBreedList';
import { Animal } from '../APIResponsesTypes';

describe('useBreedList', () => {
  test('gives an empty list with no animal', () => {
    const { result } = renderHook(() =>
      useBreedList(undefined as unknown as Animal)
    );
    const [breedList, status] = result.current;

    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded');
  });
});
