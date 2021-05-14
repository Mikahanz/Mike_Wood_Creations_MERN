import { productListType } from '../action_types/prodListActionTypes';

export interface IproductList {
  loading: boolean;
  products: productListType[];
  error: string;
}

export interface IDefaultState {
  loading: boolean;
  products?: productListType[];
}
