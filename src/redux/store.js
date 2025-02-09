import { configureStore } from '@reduxjs/toolkit'
import card from './slises/cardSlice'


export const store = configureStore({
  reducer: {
card:card
  },
})

