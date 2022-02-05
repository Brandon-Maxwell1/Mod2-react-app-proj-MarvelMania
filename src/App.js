// Imports
import { useState, useContext, useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Search from './components/Search';
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
  const [pokeList, setPokeList] = useState([])

  // Create useEffects for retrieving character data and comic book data
  // useEffect(() => {
  //   fetchComicBookData();
  // }, [])

  useEffect(() => {
    GetProfileData();
  }, [])

  // Create axios fetches for data from API
  // Base API endpoint = http(s)://gateway.marvel.com/
  // 1559 total profiles; max allowed 100 per return
  const GetProfileData = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=100&offset=0-1559&apikey=02daf835b7842ddd47b54d18e22ac585
      `)
      setPokeList(response.data.data.results)
      // .then(response.data.data.results.comics.items)
      console.log(response.data.data.results)      
    } catch (error) {
      console.log(error)
    }
  }

  const Profiles = () => {
        return (
            <div>
                
            </div>
        );
    }


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
          <Route path="profiles" element={<HeroVillian pokeList={pokeList} />} />

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


// https://developer.marvel.com/documentation/images