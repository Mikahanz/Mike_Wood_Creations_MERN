import { productDataType } from '../utils/dataTypes';

export const PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST';
export const PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS';
export const PRODUCT_DETAIL_FAIL = 'PRODUCT_DETAIL_FAIL';

export interface IProductDetailRequest {
  type: typeof PRODUCT_DETAIL_REQUEST;
}

export interface IProductDetailSuccess {
  type: typeof PRODUCT_DETAIL_SUCCESS;
  payload: {
    data: productDataType;
  };
}

export interface IProductDetailFAIL {
  type: typeof PRODUCT_DETAIL_FAIL;
  payload: {
    data: string;
  };
}

export type ProductDetailDispatchTypes =
  | IProductDetailRequest
  | IProductDetailSuccess
  | IProductDetailFAIL;
