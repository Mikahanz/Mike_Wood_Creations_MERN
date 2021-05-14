import { Dispatch } from 'redux';
import {
  ProductListDispatchTypes,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../action_types/prodListActionTypes';
import axios from 'axios';

export const listProducts =
  () => async (dispatch: Dispatch<ProductListDispatchTypes>) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const res = await axios.get(`http://localhost:5000/api/v1/products`);

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL });
    }
  };
