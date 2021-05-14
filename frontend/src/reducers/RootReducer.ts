import { combineReducers } from 'redux';
import { productListReducer } from './productReducers';

// Combine all reducers to ojbect reducer
const RootReducer = combineReducers({
  productList: productListReducer,
});

export default RootReducer;
