import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

// import './styles.css'

const HeroVillian = ( {characters} ) => {
    const userName = useContext(UserContext)
    const [initCharacter, setInitCharacter] = useState ([]);

console.log("results", characters)

    return (
        <div>
            {
                characters &&
                characters.map(characters => (
            <div className="card">
                <img src={characters.id} className="card-img-top" alt="Character Image" />
                    <div className="card-body">
                        <h5 className="card-title">{characters.name}</h5>
                        <p className="card-text">{characters.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
                ))
}


{/* {
    characters.map(characters => <li>{characters.name}</li>)
} */}
        </div>
        
    );
}

export default HeroVillian;

