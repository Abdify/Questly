import { useSelector } from 'react-redux';
import './App.css';
import CheckUser from './components/Auth/CheckUser';
import Login from './components/Auth/Login/Login';
import Quora from './components/Quora/Quora';
import { selectUser } from './Redux/userSlice';
function App() {
  const user = useSelector(selectUser);
  CheckUser();
  
  return (
    <div>
      {
        user ? <Quora /> : <Login />
      }
    </div>
  );
}

export default App;
