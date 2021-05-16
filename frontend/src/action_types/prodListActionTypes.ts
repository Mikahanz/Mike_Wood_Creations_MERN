import { productDataType } from '../utils/dataTypes';

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export interface ProductListRequest {
  type: typeof PRODUCT_LIST_REQUEST;
}

export interface ProductListSuccess {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: {
    count: number;
    data: productDataType[];
  };
}

export interface ProductListFail {
  type: typeof PRODUCT_LIST_FAIL;
  payload: {
    data: string;
  };
}

export type ProductListDispatchTypes =
  | ProductListRequest
  | ProductListSuccess
  | ProductListFail;
