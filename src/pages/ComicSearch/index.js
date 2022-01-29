import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const ComicSearch = () => {
    const userName = useContext(UserContext)
    return (
        <div>
            Comic Book Search
        </div>
    );
}

export default ComicSearch;
