import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import About from './components/About';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Login from './components/Login';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Timer' element={<Timer />} />
          <Route path='/About' element={<About />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter></>
  );
}

export default App;
