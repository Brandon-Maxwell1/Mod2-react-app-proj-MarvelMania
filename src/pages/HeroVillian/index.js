// Imports
import { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
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

        
    useEffect(() => {       
            // Fetch pokeList from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading pokeList from ${itemOffset} to ${endOffset}`);        
            setCurrentItems(pokeList.slice(itemOffset, endOffset));     
            setPageCount(Math.ceil(length / itemsPerPage));      
        }, [itemOffset, itemsPerPage]);  

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

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokeList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    
    return (
        <div>
            <Profiles currentItems={currentItems}/>
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