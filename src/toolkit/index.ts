import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartToggle";
import orderReducer from "./slices/CartItems";

let store = configureStore({
  reducer: { cartReducer, orderReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
