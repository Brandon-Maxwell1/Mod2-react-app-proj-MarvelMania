import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

// import './styles.css'

const HeroVillian = ({ characters, itemsPerPage }) => {
    const userName = useContext(UserContext)
    const [initCharacter, setInitCharacter] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    console.log("results", characters)

    useEffect(() => {
        try {
            // Fetch characters from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading characters from ${itemOffset} to ${endOffset}`);

            const characterNameURL = []

            for (let i = itemOffset; i < endOffset; i++) {
                if (i < 898) {
                    characterNameURL.push(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
                }
                else {
                    characterNameURL.push(`https://pokeapi.co/api/v2/pokemon/${i + 9102}`)
                }
            }


            // console.log('urls', characterNameURL)
            currentPage(characterNameURL)
            const length = characters.length ? characters.length : 1118
            // setCurrentPokemon(characters.slice(itemOffset, endOffset));
            // if(currentPokemon) currentPage()
            setPageCount(Math.ceil(length / itemsPerPage));
        } catch (error) {
            console.log(error)
        }
    }, [itemOffset, itemsPerPage]);


    const PersonsOrgs = () => {
        return (
            <div>
                {
                    characters &&
                    characters.map(characters => (
                        <div className="card">
                            <img src={characters.thumbnail.path} className="card-img-top" alt="Character Image" />
                            <div className="card-body">
                                <h5 className="card-title">{characters.name}</h5>
                                <p className="card-text">{characters.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    const currentPage = (characterNameURL) => {
        try {
            // axios all() makes all concurrent requests
            // instead of doing individuals req, we can programtically make multiple req
            // If one of our Promises fails, the entire request fails
            const characterArray = []
            axios.all(characterNameURL.map(async (url) => {
                const response = await axios.get(url)
                console.log(response.data.data)
                characterArray.push(response.data.data)
                setInitCharacter(characterArray.flat())
                // setCurrentPokemon(...currentPokemon, response.data)
            }))

            console.log('Array', characterArray)
        } catch (error) {

        }
    }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % characters.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>


            <PersonsOrgs />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            // renderOnZeroPageCount={null}
            />

        </div>

    );
}

export default HeroVillian;

