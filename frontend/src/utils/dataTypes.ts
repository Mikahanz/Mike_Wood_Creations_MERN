export type prodImageType = {
  id: string;
  imgId: string;
  image: string;
};

export type productDataType = {
  _id: string;
  brand: string;
  price: number;
  personalizable: boolean;
  prodDescription: string;
  prodImage: prodImageType[];
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
