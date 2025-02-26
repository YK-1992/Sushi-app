
import { createSlice } from "@reduxjs/toolkit";



const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : { totalPrice: 0, items: [] };
  } catch (e) {
    return { totalPrice: 0, items: [] };
  }
};
const initialState = loadState();
const saveState = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
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
      saveState(state); // Save state in localStorage
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex((item) => item.title === action.payload);
      if (itemIndex !== -1) {
        state.totalPrice -= parseFloat(state.items[itemIndex].price.replace(" €", "")) * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
        saveState(state);
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find(item => item.title === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += parseFloat(item.price.replace(" €", ""));
        saveState(state);
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
        saveState(state);
      }
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
      saveState(state);
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearItem } = cardSlice.actions;
export default cardSlice.reducer;
