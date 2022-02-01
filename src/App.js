// Imports
import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
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

  // Begin creating variables for the state here:
  const [userName, setUserName] = useState('')
  const [comicBookList, setComicBookList] = useState([])
  const [characters, setCharacters] = useState([])
  const apiKey = "2a451abc3d33d7be77c4ac254e5b663b"
  const privateApiKey = "e1db920901ca715ad2fb0c265a77d6b20278844e"
  const timeStamp = Number(new Date())
  const hash = timeStamp + privateApiKey + apiKey



  // Creating useEffects for retrieving character data and comic book data
  useEffect(() => {
    fetchCharacterData();
  }, [])

  // useEffect(() => {
  //   fetchComicBookData();
  // }, [])

// console.log("hash", hash)

 // Creating axios fetches for data from API

//  const fetchComicBookData = async () => {
//   try {
//     const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics?' + '&apikey=' + apiKey)
//     // setComicBookList('#')
//     // console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }

const fetchCharacterData = async () => {
  try {
    const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=${apiKey}&hash=${hash}`)
    setCharacters(response.data.data.results)
    // console.log(response.data.data.results)
  } catch (error) {
    console.log(error)
  }
}





console.log("characters", characters)
 

  return (
    <div>
      {/* Creating routes for different pages found in Nav bar */}

      <UserContext.Provider value={userName}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Headquarters />} />
          <Route path="login" element={<Login setUserName={setUserName} />} />
          <Route path="contact" element={<ContactMore />} />
          <Route path="comic" element={<ComicSearch comicBookList={comicBookList}
          />} />
          <Route path="character" element={<HeroVillian characters={characters} itemsPerPage={10}/>} />


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
