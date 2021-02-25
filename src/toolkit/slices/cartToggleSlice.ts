import { createSlice } from "@reduxjs/toolkit";
let initialState: TopDistance = "vw";
let slice = createSlice({
  name: "cartToggle",
  initialState,
  reducers: {
    openCart(state: TopDistance) {
      state = "0";
    },
    closeCart(state) {
      state = "vw";
    },
  },
});

export default slice.reducer;

export const { openCart, closeCart } = slice.actions;
