import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlice, {login,logout} from "../slices/userSlice"
export default function Login() {
  const user = useSelector(state=>state.userInfo)  
   let newloginDetails = {name :"ElliotAlderson",email:"elliotalderson@gmail.com",location:"USA"}
    const dispatch = useDispatch()
  return (
    <div className='btn-container' >
        <button onClick={()=>dispatch(login(newloginDetails))}>
            Login
        </button>
        <button onClick={()=>dispatch(logout())} >
            Logout
        </button>

    </div>
  )
}
