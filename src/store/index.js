import { configureStore } from '@reduxjs/toolkit'
import { cantCarritoSlice, shopSlice } from '../features'

export const store = configureStore({
  reducer: {
    shop: shopSlice,
    cantCarrito: cantCarritoSlice,
  },
})