import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Category {
  _id: string;
  name: string;
}
export interface ProductCart {
  _id: string;
  name: string;
  price: number;
  brand: string;
  images: string[];
  categories: Category;
  stock: number;
  quantity: number;
}

const initialState: {
  Products: ProductCart[];
} = {
  Products: [],
};
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductCart>) => {
      if (state.Products.some((product) => product._id === action.payload._id)) {
        state.Products = state.Products.map((product) => {
          if (product._id === action.payload._id)
            return { ...product, quantity: product.quantity + 1 };
          return product;
        });
      } else {
        state.Products = [...state.Products, action.payload];
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.Products = state.Products.filter(
        (product: ProductCart) => product._id !== action.payload,
      );
    },
  },
});

export const { addProduct, deleteProduct } = shoppingCartSlice.actions;
