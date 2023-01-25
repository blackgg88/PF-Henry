import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userInterface {
  email: string;
  _id: string;
  role: string;
  firstName: string;
  lastName: string;
  password: string;
  email_verified: boolean;
  picture: string;
}

export interface userChange {
  username: string;
  password: string;
}

const initialState: {
  userState: userInterface;
} = {
  userState: {
    email: '',
    _id: '',
    role: '',
    firstName: '',
    lastName: '',
    password: '',
    email_verified: false,
    picture: '',
  },
};

export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    getUserLogin: (state, action: PayloadAction<userInterface>) => {
      state.userState = action.payload;
    },

    kevinPapitoMiAmor: (state, action: PayloadAction<userChange>) => {
      state.userState = { ...state.userState, ...action.payload };
    },
  },
});

export const { getUserLogin, kevinPapitoMiAmor } = userSlice.actions;
