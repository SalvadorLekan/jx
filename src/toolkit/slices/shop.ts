import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getstore } from "../../api";

export const fetchServerResponse = createAsyncThunk(
  "shop/fetch",
  async function (slug: string) {
    return await getstore(slug);
  }
);

const initialState = {
  loading: true,
  serverResponse: {
    status: false,
    message: "Invalid STORE SLUG details",
  } as StoreResponse,
};

const slice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchServerResponse.fulfilled.type]: (state, action) => {
      state.serverResponse = action.payload;
      state.loading = false;
    },
    [fetchServerResponse.rejected.type]: (state, action) => {
      state.serverResponse = action.payload;
      state.loading = false;
    },
  },
});

export default slice.reducer;
