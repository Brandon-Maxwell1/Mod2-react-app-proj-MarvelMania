import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

// import './styles.css'

const HeroVillian = ({ characters, itemsPerPage }) => {
    const userName = useContext(UserContext)
    const [currentCharacter, setCurrentCharacter] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // console.log("results", characters)

    useEffect(() => {
        
            // Fetch characters from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading characters from ${itemOffset} to ${endOffset}`);

            if(currentCharacter) currentPage()

            setPageCount(Math.ceil(characters.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);


    const PersonsOrgs = () => {
        return (
            <div>
                {
                    currentCharacter &&
                    currentCharacter.map(characters => (
                        <div className="card">
                            <img src="..." className="card-img-top" alt="Character Image" />
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

    const currentPage = () => {        
        currentCharacter.forEach( async (characters) => {
            try{

            } catch (error) {

            }
           
        })
        
    }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % characters.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    console.log("current", characters)

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

