import mongoose, { Document } from 'mongoose';

interface IProdImage {
  imgId: string;
  image: string;
}

export default interface IProduct extends Document {
  userId: mongoose.Types.ObjectId;
  sku: string;
  barcode?: string; // Optional
  prodName: string;
  prodDescription: string;
  brand: string;
  category: string;
  prodType: string;
  prodImage: IProdImage[];
  stockQty: number;
  rating: number;
  reviews: mongoose.Types.ObjectId[];
  reviewsQty: number;
  variants?: []; // Optional
  originalPrice?: number; // Optional
  price: number;
  specialPrice?: number; // Optional
  statusActive?: boolean; // Optional
  personalizable?: boolean; // Optional
}
