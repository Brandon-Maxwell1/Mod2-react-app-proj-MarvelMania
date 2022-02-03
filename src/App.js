// Imports
import { useState, useContext, useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5'
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Headquarters from './pages/Headquarters';
import Login from './pages/Login';
import ContactMore from './pages/ContactMore';
import ComicSearch from './pages/ComicSearch';
import HeroVillian from './pages/HeroVillian';
// Contexts
import UserContext from './contexts/UserContext';
// CSS
import './App.css';

const App = () => {

  // Create constiables for the state here:
  const [user, setUser] = useState('')
  const [comicBookList, setComicBookList] = useState([])
  const [profileList, SetProfileList] = useState([]) 
  
 
  // Base API endpoint
  //http(s)://gateway.marvel.com/

  // Create useEffects for retrieving character data and comic book data
  useEffect(() => {
    GetProfileData();
  }, [])

  // useEffect(() => {
  //   fetchComicBookData();
  // }, [])

  // Create axios fetches for data from API

  const GetProfileData = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=2a451abc3d33d7be77c4ac254e5b663b
      `)
      SetProfileList(response.data.data.results)
      console.log(response.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  // 1559 total profiles; max allowed 100 per return

  return (
    <div>
      {/* Creating routes for different pages found in Nav bar */}

      <UserContext.Provider value={user}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Headquarters />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="contact" element={<ContactMore />} />
          <Route path="comic" element={<ComicSearch comicBookList={comicBookList}
          />} />
          <Route path="profiles" element={<HeroVillian profileList={profileList} itemsPerPage={20} />} />

        </Routes>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />

      </UserContext.Provider>
    </div>
  );
}

export default App;
