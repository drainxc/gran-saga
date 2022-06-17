import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pagemove";

export const store = configureStore({
  reducer: {
    movePage: pageSlice,
  },
});
