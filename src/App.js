
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import themeSlice, { changeTheme } from './slices/themeSlice';

function App() {
  const state = useSelector(state=>state.theme) 
  let dispatch = useDispatch(themeSlice)
  return (
    <div className={`app ${state.theme}`}>
    <div className="inner-container">
      <Profile/>
      <Login/>
      <button onClick={(e)=>dispatch(changeTheme())} className='toggle'>{state.theme}</button>
    </div>
         </div>
  );
}

export default App;
