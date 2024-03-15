import { ObjectId } from "mongoose";

import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: Number;
  productLeftCount: Number;
  productSize: ProductSize;
  productVolume: ProductVolume;
  productDesc?: String;
  productrImages: string[];
  productViews: Number;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
