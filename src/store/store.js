import { configureStore } from "@reduxjs/toolkit";

//slices
import HomeSlice from "./slices/HomeSlice";
import LoginSlice from "./slices/LoginSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
    login: LoginSlice,
  },
});

export default store;
