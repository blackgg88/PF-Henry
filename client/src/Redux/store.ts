import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './slice';
import { shoppingCartSlice } from './slice';

export const store = configureStore({
  reducer: {
    productReducer: productSlice.reducer,
    cartReducer: shoppingCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
