import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './slice';
import { shoppingCartSlice } from './slice';
import { userSlice } from './slice';

export const store = configureStore({
  reducer: {
    productReducer: productSlice.reducer,
    cartReducer: shoppingCartSlice.reducer,
    userReducer: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
