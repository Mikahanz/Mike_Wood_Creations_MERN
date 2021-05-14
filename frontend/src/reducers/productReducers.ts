import { IDefaultState } from '../interfaces/theInterfaces';
import {
  ProductListDispatchTypes,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../action_types/prodListActionTypes';

const defaultState: IDefaultState = {
  loading: false,
};

export const productListReducer = (
  state: IDefaultState = defaultState,
  action: ProductListDispatchTypes
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.data,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
