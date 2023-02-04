import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  dark: boolean;
} = {
  dark: true,
};

export const themeSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
