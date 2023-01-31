import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
}
export interface FilterState {
  name: string;
  categories: string;
  pricemin: number;
  pricemax: number;
  rating: number;
  order: string;
}

// Define the initial state using that type
const initialState: {
  Products: ProductState[];
  ProductDetail: ProductState;
  Filters: FilterState;
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
    categories: { _id: "", name: "" },
    stock: 0,
  },
  Filters: {
    name: "",
    categories: "",
    pricemin: 0,
    pricemax: 3000,
    rating: 0,
    order: "A-Z",
  },
};

export const productSlice = createSlice({
  name: "product",
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
    resetFilters: (state) => {
      state.Filters = { ...initialState.Filters };
    },
    // updateSorFilter: (state, action) => {
    //   state.Filters = action.payload;
    //   if (state.Filters.order === "hiPrice") {
    //     state.Products.sort((a, b) => a.price - b.price);
    //   } else if (state.Filters.order === "loPrice") {
    //     state.Products.sort((a, b) => b.price - a.price);
    //   } else if (state.Filters.order === "maxRat") {
    //     state.Products.sort((a, b) => a.rating - b.rating);
    //   } else if (state.Filters.order === "minRat") {
    //     state.Products.sort((a, b) => b.rating - a.rating);
    //   } else if (state.Filters.order === "ascAlph") {
    //     state.Products.sort((a, b) =>
    //       a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
    //         ? -1
    //         : a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
    //         ? 1
    //         : 0
    //     );
    //   } else if (state.Filters.order === "descAlph") {
    //     state.Products.sort((a, b) =>
    //       a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
    //         ? -1
    //         : a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
    //         ? 1
    //         : 0
    //     );
    //   }
    // },
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
  resetFilters,
  updateSorFilter,
} = productSlice.actions;
