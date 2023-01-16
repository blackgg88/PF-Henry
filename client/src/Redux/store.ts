import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slice'

export const store = configureStore({
  reducer: {
    cardReducer: cartSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch