import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Reducers/LoginReducer";
import UserReducer from "./Reducers/UserReducer";

export const Store = configureStore({
  reducer: {
    userReducer: UserReducer,
    LoginReducer,
  },
});
