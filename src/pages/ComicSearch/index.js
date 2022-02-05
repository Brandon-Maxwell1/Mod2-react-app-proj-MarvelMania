import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';

const ComicSearch = ( {comicBookList} ) => {
    const [currentComics, setCurrentComics] = useState([]);

    const Comics = () => {
        return (
            <div>                
                {
                    comicBookList &&
                    comicBookList.map((comic) => (
                        <div>
                            <div className="profile-card">
                                <h6>ID #{comic.id}</h6>
                                <img
                                    src={`${comic.thumbnail.path}/portrait_incredible.jpg`} className="card-img"
                                    alt="Character Image"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{comic.title}</h5>
                                    <p className="card-text">{comic.series.names}</p>
                                    <a href="#" className="btn btn-primary">View Profile</a>
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
            <Comics currentComics={currentComics} />
            
        </div>

    );
}

export default ComicSearch;
