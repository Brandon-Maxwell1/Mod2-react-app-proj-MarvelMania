// Imports
import { useContext, useState } from 'react';
// Components
import Buttons from '../../components/Buttons';

const ComicSearch = ({ comicBookList }) => {
    const [currentComics, setCurrentComics] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')    

    const Search2 = () => {
        
    
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

    const Comics = () => {
        return (
            <div>
                
                {
                    comicBookList &&
                    comicBookList.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((comic) => (
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
                                    {/* <a href="#" className="btn btn-primary">View Details</a> */}
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
            <Search2 />
            <Comics currentComics={currentComics} />
            <Buttons />
        </div>

    );
}

export default ComicSearch;
