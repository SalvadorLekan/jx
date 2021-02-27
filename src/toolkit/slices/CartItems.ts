import { createSlice } from "@reduxjs/toolkit";
let initialState: { price: number; orderQuantity: number }[] = [];
let slice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      let v: { id: number; orderQuantity: number; price: number } =
        action.payload;
      if (state[v.id]) state[v.id].orderQuantity += v.orderQuantity;
      else state[v.id] = { orderQuantity: v.orderQuantity, price: v.price };
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
