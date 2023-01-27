import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userInterface {
  email: string;
  _id: string;
  role: string;
  firstName: string;
  lastName: string;
  email_verified: boolean;
  picture: string;
  username: string;
  connection: string;
}

export interface userChange {
  username: string;
  password: string;
}

const initialState: {
  userState: userInterface;
} = {
  userState: {
    connection: '',
    email: '',
    _id: '',
    role: 'user',
    firstName: '',
    lastName: '',
    email_verified: false,
    picture: '',
    username: '',
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
