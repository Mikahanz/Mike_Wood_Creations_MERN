import { Dispatch } from 'redux';
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
import axios from 'axios';

export const listProducts =
  () => async (dispatch: Dispatch<ProductListDispatchTypes>) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const res = await axios.get(`/api/v1/products`);

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
    }
  };

export const getProductDetail =
  (id: string) => async (dispatch: Dispatch<ProductDetailDispatchTypes>) => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQUEST });

      const res = await axios.get(`/api/v1/products/${id}`);

      //console.log(res);

      dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error });
    }
  };
