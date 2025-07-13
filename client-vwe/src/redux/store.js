import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./slice/TemplateSlice";

export const store = configureStore({
  reducer: {
    template: templateReducer,
  }
})