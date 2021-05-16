import {
  IProductListDefaultState,
  IProductDetailDefaultState,
} from '../interfaces/theInterfaces';
import {
  ProductListDispatchTypes,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../action_types/prodListActionTypes';
import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  ProductDetailDispatchTypes,
} from '../action_types/prodDetailActionTypes';

const ProductListDefaultState: IProductListDefaultState = {
  loading: false,
};

const productDetailDefaultState: IProductDetailDefaultState = {
  loading: false,
};

export const productListReducer = (
  state: IProductListDefaultState = ProductListDefaultState,
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
        errorMsg: action.payload.data,
      };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state: IProductDetailDefaultState = productDetailDefaultState,
  action: ProductDetailDispatchTypes
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_DETAIL_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        product: action.payload.data,
      };
    case PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        errorMsg: action.payload.data,
      };
    default:
      return state;
  }
};
