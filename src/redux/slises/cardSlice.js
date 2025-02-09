import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {

addItem(state, action) {
  state.items.push(action.payload);
  state.totalPrice += parseFloat(action.payload.price);
},
removeItem(state, action) {
  const itemToRemove = state.items.find(item => item.id === action.payload);
  if (itemToRemove) {
    state.totalPrice -= parseFloat(itemToRemove.price); // Вычитаем цену товара из общей
    state.items = state.items.filter(item => item.id !== action.payload);// Уменьшаем цену как число
  }
},
clearItem(state) {
  state.items = [];
  state.totalPrice = 0; // Обнуляем цену
},
},
  },
)

export const { addItem, removeItem, clearItem} = cardSlice.actions

export default cardSlice.reducer