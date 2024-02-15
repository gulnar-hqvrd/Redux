import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {}
    }),
});

export default store;


//pipline ve middleware