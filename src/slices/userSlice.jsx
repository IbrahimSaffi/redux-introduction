import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"profile-info",
    initialState : {
           userInfo: {
               name:"ElliotAlderson",email:"elliotalderson@gmail.com",location:"USA",
           }
    },
    reducers: {
        login: (state,action) => {
            
            state.userInfo = action.payload
        },
        logout : (state,action)=>{
            state.userInfo = {}
        }
    }
})
export const {login,logout} = userSlice.actions
export default userSlice.reducer