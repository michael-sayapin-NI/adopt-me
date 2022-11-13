import { compose, createStore } from 'redux';

import { Animal } from './APIResponsesTypes';
import reducer from './reducers';

export interface StoreInit {
  animal: Animal;
  breed: string;
  location: string;
  theme: string;
}

/**
 * Not a good solution, this is a fix ONLY to be used here and for learning
 */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export default store;
