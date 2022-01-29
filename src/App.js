// Imports
import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
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

  // Begin creating state here:
  const [userName, setUserLogin] = useState('')
  const [comicBookList, setComicBookList] = useState([])
  const [characterList, setCharacterList] = useState([])
  const apiKey = "2a451abc3d33d7be77c4ac254e5b663b"



// Creating useEffects for retrieving hero/villian data and comic book data
  useEffect(() => {
    fetchCharacterData();
  }, [])

  useEffect(() => {
    fetchComicBookData();
  }, [])



  // Creating axios fetches for data from API
  const fetchComicBookData = async () => {
    try {
      const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics?'+'&apikey='+apiKey)
      // setComicBookList('#')
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCharacterData = async () => {
    try {
      const response = await axios.get('https://gateway.marvel.com:443/v1/public/characters?limit=50' + '&apikey=' + apiKey)
      setCharacterList(response.data.data.results)
      console.log(response.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      {/* Creating routes for different pages found in Nav bar */}

      <UserContext.Provider value={userName}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Headquarters />} />
          <Route path="login" element={<Login setUserLogin={setUserLogin} />} />
          <Route path="contact" element={<ContactMore />} />
          <Route path="comic" element={<ComicSearch comicBookList={comicBookList}
          />} />
          <Route path="character" element={<HeroVillian characterList={characterList} />} />


        </Routes>

        <Footer />

      </UserContext.Provider>
    </div>
  );
}

export default App;
