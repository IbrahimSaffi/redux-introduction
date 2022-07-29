import { useSelector } from 'react-redux'

export default function Profile  () {
    const user = useSelector(state=>state.userInfo)
  return (
    <div className='profile-details'>
        <h3>Username:  {user.userInfo.name}</h3>
        <h3>Email:  {user.userInfo.email}</h3>
        <h3>Location:  {user.userInfo.location}</h3>
    </div>
  )
}
