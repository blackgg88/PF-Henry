import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  dark: boolean;
} = {
  dark: false,
};

export const themeSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;

      document.body.classList.toggle('dark');
    },
  },
});

export const { changeTheme } = themeSlice.actions;
