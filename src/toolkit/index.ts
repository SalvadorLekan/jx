import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartToggleSlice";

let store = configureStore({
  reducer: { cartReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
