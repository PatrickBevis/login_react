import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle";
import {Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import LoggedScreen from './pages/LoggedScreen';
import LoginScreen from './pages/LoginScreen';
import AdminScreen from './pages/AdminScreen';
import AccountScreen from './pages/AccountScreen';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomeScreen/>}/>
    <Route path="/login" element={<LoginScreen/>}/>
    <Route path="/admin" element={<AdminScreen/>}/>
    <Route path="/logged" element={<LoggedScreen/>}/>
    <Route path="/account" element={<AccountScreen/>}/>
    </Routes>
      
    </>
  );
}

export default App;
