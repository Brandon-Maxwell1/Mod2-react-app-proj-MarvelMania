// Imports
import { useContext, useState } from 'react';
// Components
import Buttons from '../../components/Buttons';
// CSS
import './style.css';

const ComicSearch = ({ comicBookList }) => {
    const [currentComics, setCurrentComics] = useState([]);
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
                    <input type="submit" value='Submit' />
                </form>
            </div>

            <div id="comic-container">
                {/* Logic for the search is to filter.  If/then allows data to be mapped and appear if nothin is typed into field*/}
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
                            <div className="comic-card">
                                <h6>ID #{comic.id}</h6>
                                {/* Used a YouTube video that is no longer uploaded for viewing to help figure out how to render images from this very difficult Marvel API */}
                                <img
                                    src={`${comic.thumbnail.path}/portrait_incredible.jpg`} id="card-img"
                                    alt="Character Image"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{comic.title}</h5>
                                    <p className="card-text">{comic.description}</p>
                                    {/* <a href="#" className="btn btn-primary">View Details</a> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Buttons />
        </main>
    );
}

{/* return (
        <div>
            <Search2 />
            
            <div id="comicDiv">
            <Comics currentComics={currentComics} />                     
            </div>
        </div>

    );
} */}

export default ComicSearch;
