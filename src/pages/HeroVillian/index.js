import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

// import './styles.css'

const HeroVillian = () => {
    const userName = useContext(UserContext)
    // const [initCharacter, setInitCharacter] = useState ([]);
    


    return (
        <div>
            Character Search
        </div>
    );
}

export default HeroVillian;
