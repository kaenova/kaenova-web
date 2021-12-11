import { configureStore, combineReducers } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";

export const GlobalStore = configureStore({
  reducer: combineReducers({
    navbar: navbarSlice,
  }),
});

export default { GlobalStore };
