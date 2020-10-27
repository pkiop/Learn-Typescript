import { createStore } from 'redux';

import reducer from './reducer';

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
}

const store = createStore(reducer, initialState, enhancer);

export default store;