import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "search",
  initialState: { param: "" },
  reducers: {
    editText(state, action) {
      state.param = action.payload;
    },
  },
});

export default slice.reducer;

export const { editText } = slice.actions;
