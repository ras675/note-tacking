import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './componets/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar will always be displayed */}
      <Routes>
        {/* Home route */}
        <Route path='/' element={<Home />} />
        
        {/* Login route */}
        <Route path='/login' element={<Login />} />
        
        {/* Signup route */}
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
