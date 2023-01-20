import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  _id: string;
  name: string;
}
// Define a type for the slice state
export interface ProductState {
  _id: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  images: string[];
  rating: number;
  categories: Category[];
  stock: number;
}

// Define the initial state using that type
const initialState: {
  Products: ProductState[];
  ProductDetail: ProductState;
} = {
  Products: [],
  ProductDetail: {
    _id: "",
    name: "",
    price: 0,
    description: "",
    brand: "",
    images: [],
    rating: 0,
    categories: [],
    stock: 0,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<ProductState[]>) => {
      if (!state.Products.length) {
        action.payload.forEach((product) => {
          state.Products.push(product);
        });
      }
    },
    getProductId: (state, action: PayloadAction<ProductState>) => {
      state.ProductDetail = { ...action.payload };
    },
  },
});

export const { getProduct, getProductId } = productSlice.actions;
