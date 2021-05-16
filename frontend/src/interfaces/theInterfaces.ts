import { productDataType } from '../utils/dataTypes';

// export interface IproductList {
//   loading: boolean;
//   products: productDataType[];
//   error: string;
// }

export interface IProductListDefaultState {
  loading: boolean;
  products?: productDataType[];
  errorMsg?: string;
}

export interface IProductDetailDefaultState {
  loading: boolean;
  product?: productDataType;
  errorMsg?: string;
}
