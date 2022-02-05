// Imports
import { useEffect, useState, useContext } from 'react';
// import ReactPaginate from 'react-paginate';
// import UserContext from '../../contexts/UserContext';
// Component
import Search from '../../components/Search';
// import axios from 'axios';
// CSS
import './style.css'

// key
// pokeList = profileList
// currentPokemon = currentProfile

const HeroVillian = ({ pokeList, itemsPerPage }) => {
    // console.log('props', pokeList)
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
        
    const Profiles = () => {
        return (
            <div>
                <Search />
                {
                    pokeList &&
                    pokeList.map((profile) => (
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
                                    <a href="#" className="btn btn-primary">View Profile</a>
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
            <Profiles currentItems={currentItems} />
            
        </div>

    );
}

export default HeroVillian;