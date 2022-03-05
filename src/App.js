// Imports
import { useState, useContext, useEffect, useReducer } from 'react';
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
import CreateCharacter from './pages/CreateCharacter';
import NewUserLogin from './pages/NewUserLogin';
// Contexts
import UserContext from './contexts/UserContext';
// CSS
import './App.css';

const App = () => {

  // Create constiables for the state here:
  const [user, setUser] = useState('');
  const [comicBookList, setComicBookList] = useState([]);
  const [profileList, setProfileList] = useState([]);
  const [counter, setCounter] = useState(0);  
  const [userName, setUserName] = useState([]);
  const [verifiedLogins, setVerifiedLogins] = useState([]);

  // Create useEffects for retrieving character data and comic book data
 
  useEffect(() => {
    GetProfileData();
    GetComicData();    
    VerifiedLogins();
  }, [])

  // Create axios fetches for data from API
  // Base API endpoint = http(s)://gateway.marvel.com/
  // 1559 total profiles; max allowed 100 per return
  const GetProfileData = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${counter}&apikey=02daf835b7842ddd47b54d18e22ac585`)
      setProfileList(response.data.data.results)
      // .then(response.data.data.results.comics.items)
      console.log(response.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const GetComicData = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?orderBy=modified&format=comic&limit=100&offset=${counter}&apikey=02daf835b7842ddd47b54d18e22ac585`)
      setComicBookList(response.data.data.results)
      console.log(response.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  // Attempting to create counter that will reset the offset by +/- 100 when next or previous buttons are pressed respectively
  // const clickNext = () => {
  //   setCounter(counter +100)
  //   GetProfileData()
  //   console.log(counter)
  // }
  
  // const clickPrevious = () => {
  //   setCounter(counter -100)
  //   GetProfileData()
  // } 
  
  
  const VerifiedLogins = async () => {
    try{
      const response = await axios.get("http://localhost:8080/api/v1/allusers")
      setVerifiedLogins(response.data)
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
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
          <Route path="profiles" element={<HeroVillian profileList={profileList} />} />
          <Route path="/create" element={<CreateCharacter />} />
          <Route path="/newUser" element={<NewUserLogin />} />

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


 // const Button = () => {    

  //   clickNext = () => {
  //     setCounter(counter + 100)
  //     GetProfileData()
  //   }

  //   clickPrevious = () => {
  //     setCounter(counter - 100)
  //     GetProfileData()
  //   }

  //   return (
  //     <div>
  //       <div>
  //         <button
  //           type="submit"
  //           onSubmit={clickPrevious}>
  //           PREVIOUS
  //         </button>
  //       </div>

  //       <div>
  //         <button
  //           type="submit"
  //           onSubmit={clickNext}>
  //           NEXT
  //         </button>
  //       </div>
  //     </div>
  //   )

  // }




  // const NextPreviousButton = () => {
  //       return (
  //           <div>
  //             <div id="buttonDiv">
  //               <div><button type="submit" className="btn btn-primary" onSubmit={previousClick}>Previous</button></div>

  //               <div><button type="submit" className="btn btn-primary" onSubmit={nextClick}>Next</button></div>
  //           </div>                
  //           </div>
  //       );
  //   }
