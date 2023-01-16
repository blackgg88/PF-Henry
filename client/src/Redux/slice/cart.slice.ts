import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartAddState {
    id: string
    name: string
    price: number
    description: string
    brand: string
    images: string[]
    rating: number
    categories: string[]
    stock: number
}

interface CartRemoveState {
    id: string
}

// Define the initial state using that type
const initialState: CartAddState[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>)=>{
        state.push(action.payload)
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>)=> {}
  },
})

export const { addToCart, removeToCart } = cartSlice.actions

