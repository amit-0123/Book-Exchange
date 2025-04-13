import {Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import AddBook from './components/AddBook';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

import { useNavigate } from 'react-router-dom';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    const token= localStorage.getItem('user');
    setIsLoggedIn(token? true:false);
  },[])



  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('user','');
    navigate('/');
  };

  return (
    <>
    {/* <h1> Hii</h1> */}
    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<AddBook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;


