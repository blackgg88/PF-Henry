import { configureStore } from '@reduxjs/toolkit';
import { productSlice, themeSlice, userSlice, shoppingCartSlice } from './slice';

export const store = configureStore({
  reducer: {
    productReducer: productSlice.reducer,
    cartReducer: shoppingCartSlice.reducer,
    userReducer: userSlice.reducer,
    themeReducer: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
