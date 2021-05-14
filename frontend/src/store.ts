import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Initial state of the application
const initialState = {};

// Create thunk middleware
const middleware = [thunk];

// Create Store
const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootStore = ReturnType<typeof RootReducer>;

export default store;
