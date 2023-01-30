import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  // remove and add to cart button
  inCart: boolean;
}

const initialState: {
  Products: ProductCart[];
} = {
  Products: [],
};

const handleSaveLS = (product: ProductCart[] | ProductCart) => {
  localStorage.setItem("shoppingCart", JSON.stringify(product));
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductCart>) => {
      if (Array.isArray(action.payload)) {
        state.Products = action.payload;
      } else {
        state.Products = [
          ...state.Products,
          { ...action.payload, inCart: true },
        ];
      }

      handleSaveLS(state.Products);
    },

    changeQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      state.Products = state.Products.map((product) => {
        if (product._id === action.payload.id)
          return { ...product, quantity: action.payload.quantity };
        return product;
      });

      handleSaveLS(state.Products);
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.Products = state.Products.filter(
        (product: ProductCart) => product._id !== action.payload
      );

      handleSaveLS(state.Products);
    },

    emptyCar: (state) => {
      state.Products = [];

      handleSaveLS(state.Products);
    },
  },
});

export const { addProduct, deleteProduct, changeQuantity, emptyCar } =
  shoppingCartSlice.actions;
