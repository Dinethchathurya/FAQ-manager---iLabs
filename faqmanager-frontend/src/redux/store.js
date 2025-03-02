import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "./faqSlice";

export const store = configureStore({
  reducer: {
    faq: faqReducer,
  },
});