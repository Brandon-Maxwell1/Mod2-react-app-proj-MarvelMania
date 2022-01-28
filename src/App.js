import React from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
// Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import ContactMore from './pages/ContactMore';
import ComicSearch from './pages/ComicSearch';
import HeroVillian from './pages/HeroVillian';
// Contexts
import UserContext from './contexts/UserContext';
// CSS
import './App.css';

const App = () => {

// Entering in state



  return (
    <div>
      {/* Creating routes for different pages found in Nav bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<ContactMore />} />
        <Route path="comic" element={<ComicSearch />} />
        <Route path="character" element={<HeroVillian />} />


      </Routes>
    </div>
  );
}

export default App;
