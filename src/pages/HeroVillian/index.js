// Imports
import { useEffect, useState, useContext } from 'react';
// import ReactPaginate from 'react-paginate';
// import UserContext from '../../contexts/UserContext';
// Component
import Search from '../../components/Search';
import Buttons from '../../components/Buttons';
// import axios from 'axios';
// CSS
import './style.css'

// key
// profileList = profileList
// currentPokemon = currentProfile

const HeroVillian = ({ profileList, itemsPerPage }) => {
    // console.log('props', profileList)
    const [currentProfile, setCurrentProfile] = useState([]);

    const Profiles = () => {
        return (
            <div>
                <Search />
                {
                    profileList &&
                    profileList.map((profile) => (
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


    // const nextClick = () => {                       
    //         // ternary
    //         // data === 'unliked' ? setData('liked') : setData('unliked')

    //         // reg if/else
    //         if (like === 'unliked') {
    //             setLike('liked')
    //         } else {
    //             setLike('unliked')
    //         }
    //     }


    return (
        <div>
            <Profiles currentProfile={currentProfile} />
            <Buttons />
        </div>

    );
}

export default HeroVillian;