export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export type prodImage = {
  id: string;
  imgId: string;
  image: string;
};

export type productListType = {
  _id: string;
  brand: string;
  price: number;
  personalizable: boolean;
  prodDescription: string;
  prodImage: prodImage[];
  prodName: string;
  prodType: string;
  rating: number;
  reviews: string[];
  reviewsQty: number;
  sku: string;
  statusActive: true;
  stockQty: number;
  updatedAt: string;
  userId: string;
  // variants:
};

export interface ProductListRequest {
  type: typeof PRODUCT_LIST_REQUEST;
}

export interface ProductListSuccess {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: {
    count: number;
    data: productListType[];
  };
}

export interface ProductListFail {
  type: typeof PRODUCT_LIST_FAIL;
}

export type ProductListDispatchTypes =
  | ProductListRequest
  | ProductListSuccess
  | ProductListFail;
