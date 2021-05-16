import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer } from './productReducers';

// Combine all reducers to ojbect reducer
const RootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});

export default RootReducer;
