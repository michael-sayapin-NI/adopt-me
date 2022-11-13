import { Action } from './types';

const breedTypes = {
  CHANGE_BREED: 'CHANGE_BREED',
  CHANGE_ANIMAL: 'CHANGE_ANIMAL',
};

export default function breed(state = '', action: Action) {
  switch (action.type) {
    case breedTypes.CHANGE_BREED:
      return action.payload;
    case breedTypes.CHANGE_ANIMAL:
      return '';
    default:
      return state;
  }
}
