import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  _id: string;
  name: string;
  price: number;
  brand: string;
  images: string[];
  categories: string;
  stock: number;
  quantity: number;
}

const initialState: {
  Products: ProductState[];
} = {
  Products: [],
};
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductState>) => {
      state.Products = [...state.Products, action.payload];
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.Products = state.Products.filter(
        (product: ProductState) => product._id !== action.payload,
      );
    },
  },
});

export const { addProduct, deleteProduct } = shoppingCartSlice.actions;
