import { createSlice } from "@reduxjs/toolkit";
let initialState: { left: LeftDistance } = { left: "vw" };
let slice = createSlice({
  name: "cartToggle",
  initialState,
  reducers: {
    openCart(state) {
      state.left = "0";
    },
    closeCart(state) {
      state.left = "vw";
    },
  },
});

export default slice.reducer;

export const { openCart, closeCart } = slice.actions;
