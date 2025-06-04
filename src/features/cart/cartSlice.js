import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   // cart: [],

//   cart: [
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       quantity: 2,
//       totalAmount: 219.9,
//     },
//   ],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addCartItem(state, action) {
//       state.cart.push(action.payload);
//     },
//     deleteCartItem(state, action) {
//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//     },
//     increaseCartQuantity(state, action) {
//       const item = state.cart.find((item) => item.id === action.payload);
//       item.quantity++;
//       item.totalAmount * item.quantity;
//     },
//     decreaseCartQuantity(state, action) {
//       const item = state.cart.find((item) => item.id === action.payload);
//       item.quantity--;
//       item.totalAmount * item.quantity;
//     },
//     clearCart(state) {
//       state.cart = [];
//     },
//   },
// });

// export const {
//   addCartItem,
//   deleteCartItem,
//   increaseCartQuantity,
//   decreaseCartQuantity,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;

//UPDATED ONE
// import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalAmount = item.price * item.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalAmount: action.payload.price,
        });
      }
    },

    deleteCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseCartQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalAmount = item.price * item.quantity;
      }
    },

    decreaseCartQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalAmount = item.price * item.quantity;
      }

      // else if (item && item.quantity === 1) {
      //   // Optional: remove item if quantity hits 0
      //   state.cart = state.cart.filter((i) => i.id !== action.payload);
      // }
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
// In your cartSlice file or separate selectors file

export const selectCart = (state) => state.cart.cart;

export const selectCartCount = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalAmount, 0);
