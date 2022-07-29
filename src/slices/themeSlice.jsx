import { createSlice } from "@reduxjs/toolkit"
const themeSlice = createSlice({
    name :"themeInfo",
    initialState :{
      theme:"dark"},
    reducers: {
      changeTheme: (state,action)=>{
      state.theme ==="dark"?state.theme="light":state.theme="dark"
      }
    }
})
export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer