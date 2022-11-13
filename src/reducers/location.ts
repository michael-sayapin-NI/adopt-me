import { Action } from './types';

const locationTypes = {
  CHANGE_LOCATION: 'CHANGE_LOCATION',
};

export default function location(state = 'Seattle, WA', action: Action) {
  switch (action.type) {
    case locationTypes.CHANGE_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
