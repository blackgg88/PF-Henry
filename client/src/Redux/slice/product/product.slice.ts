import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Categories {
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
  categories: Categories;
  stock: number;
  isActive: boolean;
}
export interface FilterState {
  name: string;
  categories: string;
  pricemin: number;
  pricemax: number;
  rating: number;
  order: string;
}

export interface ProductQuantityState {
  id: string;
  quantity: number;
}

// Define the initial state using that type
const initialState: {
  Products: ProductState[];
  ProductDetail: ProductState;
  Filters: FilterState;
  CategoryQuantity: ProductQuantityState[];
} = {
  Products: [],
  ProductDetail: {
    _id: '',
    name: '',
    price: 0,
    description: '',
    brand: '',
    images: [],
    rating: 0,
    categories: { _id: '', name: '' },
    stock: 0,
    isActive: true,
  },
  Filters: {
    name: '',
    categories: '',
    pricemin: 0,
    pricemax: 3000,
    rating: 0,
    order: '',
  },
  CategoryQuantity: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<ProductState[]>) => {
      state.Products = [...action.payload];
    },
    getProductId: (state, action: PayloadAction<ProductState>) => {
      state.ProductDetail = { ...action.payload };
    },

    getProductFilter: (state, action: PayloadAction<ProductState[]>) => {
      state.Products = [...action.payload];
    },
    getProductName: (state, action) => {
      state.Filters.name = action.payload;
    },

    updateCategoryFilter: (state, action) => {
      state.Filters.categories = action.payload;
    },
    updatePriceMinFilter: (state, action) => {
      state.Filters.pricemin = action.payload;
    },
    updatePriceMaxFilter: (state, action) => {
      state.Filters.pricemax = action.payload;
    },
    updateRatingFilter: (state, action) => {
      state.Filters.rating = action.payload;
    },
    updateOrderFilter: (state, action) => {
      state.Filters.order = action.payload;
    },

    getCategoryQuantity: (state, action) => {
      state.CategoryQuantity = action.payload;
    },
    resetFilters: (state) => {
      state.Filters = {
        ...state,
        name: '',
        categories: '',
        pricemin: 0,
        pricemax: 3000,
        rating: 0,
        order: 'all',
      };
    },
  },
});

export const {
  getProduct,
  getProductId,
  getProductName,
  getProductFilter,
  updateCategoryFilter,
  updateRatingFilter,
  updatePriceMinFilter,
  updatePriceMaxFilter,
  updateOrderFilter,
  getCategoryQuantity,
  resetFilters,
} = productSlice.actions;
