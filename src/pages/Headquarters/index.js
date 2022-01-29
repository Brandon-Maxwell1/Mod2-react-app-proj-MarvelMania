import { createContext, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const Headquarters = () => {
    const userName = useContext(UserContext)
    return (
        <div>
            {
         !userName ? "Welcome Future Avenger" : "Suit up {userName}"
         }  
        </div>
    );
}

export default Headquarters;
