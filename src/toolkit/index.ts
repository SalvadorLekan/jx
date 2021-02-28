import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartToggle";
import orderReducer from "./slices/CartItems";
import shop from "./slices/shop";
import search from "./slices/search";
import orderProcces from "./slices/order";

let store = configureStore({
  reducer: { cartReducer, orderReducer, shop, search, orderProcces },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
