// Imports
import { useEffect, useState, useContext } from 'react';
// Component
import Buttons from '../../components/Buttons';
// CSS
import './style.css'

const HeroVillian = ({ profileList, clickNext, clickPrevious }) => {
    // console.log('props', profileList)
    const [currentProfile, setCurrentProfile] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')    

    const Search = () => {     
    
        const handleChange = (e) => {
            // console.log('handling change', e.target.value)
            setSearchTerm(e.target.value)
        }
    
        const handleSubmit = e => {
            e.preventDefault()
        }    
    
        return (
            <div>
                <form onSubmit={handleSubmit}>                
                    <input
                        type='text'
                        placeholder='Search...'
                        onChange={handleChange}
                        value={searchTerm}
                    />
                    <input type="submit" value='Submit' />
                </form>
            </div>
        );
    }


    const Profiles = () => {        
    
        return (
            <div>    
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
        );
    }
  
    return (
        <div>
            <Search />  
            <Profiles currentProfile={currentProfile} />
            <Buttons clickNext={clickNext} clickPrevious={clickPrevious} />
        </div>

    );
}

export default HeroVillian;