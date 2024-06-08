import { configureStore } from "@reduxjs/toolkit";
import products from "../data/apiSlice"; // Assuming this imports your apiSlice reducer
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [products.reducerPath]: products.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(products.middleware),
});

setupListeners(store.dispatch);

export default store;
