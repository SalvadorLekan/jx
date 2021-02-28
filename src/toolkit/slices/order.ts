import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = { status: "initial" as OrderStatus, payload: {} };

export const sendOrder = createAsyncThunk(
  "send/order",
  async function (params: { order: OrderToServer[]; shop: string }) {
    let res = await fetch(
      `https://manifest-salesapi.herokuapp.com/shops/${params.shop}/orders`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orders: params.order,
        }),
      }
    );

    let data = await res.json();
    return data;
  }
);

let orderSlice = createSlice({
  name: "order",
  reducers: {
    pend(state) {
      state.status = "pending";
    },
    init(state) {
      state.status = "initial";
    },
  },
  initialState,
  extraReducers: {
    [sendOrder.pending.type](state) {
      state.status = "pending";
    },
    [sendOrder.rejected.type](
      state,
      { payload }: { payload: OrderResponse; type: "" }
    ) {
      if (!payload.status) {
        if (Array.isArray(payload.data)) state.status = "failure";
        else state.status = "partial";
        state.payload = payload.data;
      }
    },
    [sendOrder.fulfilled.type](
      state,
      response: { payload: OrderResponse; type: "" }
    ) {
      if (!response.payload.status) {
        if (Array.isArray(response.payload.data)) state.status = "failure";
        else state.status = "partial";
      } else state.status = "success";
      state.payload = response.payload.data;
    },
  },
});

export const { init, pend } = orderSlice.actions;

export default orderSlice.reducer;
