// Imports
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// Component
import Buttons from '../../components/Buttons';
// CSS
import './style.css'


const HeroVillian = ({ profileList }) => {
    // console.log('props', profileList)
    const [currentProfile, setCurrentProfile] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    // Courtesy of Malik I was able to get search to allow me to enter in data by removing functions and letting them all fall under this main component
    // Creating search function for comics("archives")
    // Need to figure out why is making me click back into input after every letter
    const handleChange = (e) => {
        // console.log('handling change', e.target.value)
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search...'
                    onChange={handleChange}
                    value={searchTerm}
                />
                <input type="submit" value="Submit" />
            </form>
            {/* <Buttons /> */}
            <br></br>
            <div>
            <p>
              <Link to="/create">
                <button color="white" className="is-rounded">
                  <span>Add Character Profile</span>
                </button>
              </Link>
            </p>
          </div>

        </div>

        <div id="profile-container">
            {/*Logic for the search is to filter.  If/then allows data to be mapped and appear if nothin is typed into field*/}
            {
                profileList &&
                profileList.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((profile) => (
                    <div>
                        <div className="profile-card">
                            <h6>ID #{profile.id}</h6>
                            {/* Used a YouTube video that is no longer uploaded for viewing to help figure out how to render images from this very difficult Marvel API */}
                            <img
                                src={`${profile.thumbnail.path}/portrait_incredible.jpg`} className="card-img"
                                alt="Character Image"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{profile.name}</h5>
                                <p className="card-text">{profile.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
        </main>
    );
}

// return (
//     <div>
//         <Search />
//         <Profiles currentProfile={currentProfile} />
//         <Buttons clickNext={clickNext} clickPrevious={clickPrevious} />
//     </div>

// );


export default HeroVillian;