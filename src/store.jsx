import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import themeSlice from "./slices/themeSlice"
const store = configureStore({
  reducer: {
   userInfo : userSlice,
   theme: themeSlice
  }
})

export default store