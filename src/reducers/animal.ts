import { Action } from './types';

const animalTypes = {
  CHANGE_ANIMAL: 'CHANGE_ANIMAL',
};

export default function animal(state = '', action: Action) {
  switch (action.type) {
    case animalTypes.CHANGE_ANIMAL:
      return action.payload;
    default:
      return state;
  }
}
