import { createSlice } from "@reduxjs/toolkit";
let initialState: number[] = [];
let slice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      let v: { id: number; orderQuantity: number } = action.payload;
      if (state[v.id]) state[v.id] += v.orderQuantity;
      else state[v.id] = v.orderQuantity;
    },
    clearCart(state) {
      state = [];
    },
    removeFromCart(state, action) {
      delete state[action.payload];
    },
  },
});

export default slice.reducer;

export const { addToCart, removeFromCart, clearCart } = slice.actions;
