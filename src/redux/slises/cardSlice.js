import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(item => item.title === action.payload.title);
      
      if (existingItem) {
        existingItem.quantity += 1; // Если товар уже есть, увеличиваем количество
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Добавляем новый товар с quantity: 1
      }
      state.totalPrice += parseFloat(action.payload.price.replace(" €", ""));
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex((item) => item.title === action.payload);
      if (itemIndex !== -1) {
        state.totalPrice -= parseFloat(state.items[itemIndex].price.replace(" €", "")) * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find(item => item.title === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += parseFloat(item.price.replace(" €", ""));
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(item => item.title === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalPrice -= parseFloat(item.price.replace(" €", ""));
        } else {
          state.totalPrice -= parseFloat(item.price.replace(" €", ""));
          state.items = state.items.filter(item => item.title !== action.payload);
        }
      }
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearItem } = cardSlice.actions;
export default cardSlice.reducer;
