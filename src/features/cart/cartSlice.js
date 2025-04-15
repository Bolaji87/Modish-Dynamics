import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],

  cart: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 2,
      totalAmount: 219.9,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseCartQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalAmount * item.quantity;
    },
    decreaseCartQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalAmount * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  increaseCartQuantity,
  decreaseCartQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
