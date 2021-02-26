import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartToggle";
import orderReducer from "./slices/CartItems";
import shop from "./slices/shop";
import search from "./slices/search";

let store = configureStore({
  reducer: { cartReducer, orderReducer, shop, search },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
