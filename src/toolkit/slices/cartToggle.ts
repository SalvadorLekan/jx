import { createSlice } from "@reduxjs/toolkit";
let initialState: { top: TopDistance } = { top: "vh" };
let slice = createSlice({
  name: "cartToggle",
  initialState,
  reducers: {
    openCart(state) {
      state.top = "0";
    },
    closeCart(state) {
      state.top = "vh";
    },
  },
});

export default slice.reducer;

export const { openCart, closeCart } = slice.actions;
