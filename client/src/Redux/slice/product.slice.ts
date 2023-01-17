import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface ProductState {
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

// Define the initial state using that type
const initialState: ProductState[] = []

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<ProductState[]>) => {
      if (!state.length) {
        action.payload.forEach( product => {
          state.push(product)
        })
      }
    }
  },
})

export const { getProduct } = productSlice.actions