import { Action } from './types';

const themeTypes = {
  CHANGE_THEME: 'CHANGE_THEME',
};

export default function theme(state = 'darkblue', action: Action) {
  switch (action.type) {
    case themeTypes.CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
}
