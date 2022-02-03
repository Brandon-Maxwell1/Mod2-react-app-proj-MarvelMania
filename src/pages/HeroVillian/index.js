// Imports
import { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
// import UserContext from '../../contexts/UserContext';
import axios from 'axios';
// CSS
import './style.css'

const HeroVillian = ({ profileList, itemsPerPage }) => {
    // console.log('props', profileList)
    const [currentProfile, setCurrentProfile] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [profileName, setProfileName] = useState([])

    useEffect(() => {
        try {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading profileList from ${itemOffset} to ${endOffset}`);
            const profileURL = []

            for (let i = itemOffset; i < endOffset; i++)
                profileURL.push(`https://gateway.marvel.com:443/v1/public/characters/${i + 1}`)

            currPagePokemon(pokeURLs)
            const length = pokeList.length ? pokeList.length : 1118
            // setCurrentPokemon(pokeList.slice(itemOffset, endOffset));
            // if(currentPokemon) currPagePokemon()
            setPageCount(Math.ceil(length / itemsPerPage));
        } catch (error) {
            console.log(error)
        }
    }, [itemOffset, itemsPerPage]);


    const CurrentPageProfile = () => {
        currentProfile.forEach(async (profile) => {
            // console.log(profile)
            try {
                const response = await axios.get(profile)
                console.log(response.data)
                // setCurrentProfile()
            } catch (error) {

            }

        })
    }



    const Profiles = () => {
        return (
            <div>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                {
                    profileList &&
                    profileList.map((profile) => (
                        <div>
                            <div className="profile-card">
                                <h7>ID #{profile.id}</h7>
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
        const newOffset = (event.selected * itemsPerPage) % profileList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    console.log('current profile', currentProfile)
    return (
        <div>
            <Profiles />
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














// const HeroVillian = ({ characters, itemsPerPage }) => {
//     // const userName = useContext(UserContext)
//     const [currentCharacter, setCurrentCharacter] = useState([]);
//     const [pageCount, setPageCount] = useState(0);
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);

//     // console.log("results", characters)

//     useEffect(() => {
//         try {
//             const endOffset = itemOffset + itemsPerPage;
//             console.log(`Loading characters from ${itemOffset} to ${endOffset}`);
//             const charURL = []

//             for (let i = itemOffset; i < endOffset; i++) {
//                 if (i >= 0) {
//                     charURL.push(`https://gateway.marvel.com:443/v1/public/characters/${i + i}`)
//             }
//             else {
//                 charURL.push(`https://gateway.marvel.com:443/v1/public/characters/${i + i}`)
//             }
//         }



//         currentPage(charURL)
//         const length = characters.length ? characters.length : 1559
//         setPageCount(Math.ceil(length / itemsPerPage));
//     } catch (error) {
//         console.log(error)
//     }
// }, [itemOffset, itemsPerPage]);

// const currentPage = (charURL) => {
//     currentCharacter.forEach(async (characters) => {
//         try {
//             const characterArray = []
//             axios.all(charURL.map(async (urls) => {
//                 const response = await axios.get(characters.url)
//                 console.log(response.data)
//                 setCurrentCharacter(response.data)
//             }))

//         } catch (error) {

//         }

//     })

// }

// const PersonsOrgs = () => {
//     return (
//         <div>
//             {
//                 characters &&
//                 characters.map(characters => (
//                     <div className="card">
//                         <img src="..." className="card-img-top" alt="Character Image" />
//                         <div className="card-body">
//                             <h5 className="card-title">{characters.name}</h5>
//                             <p className="card-text">{characters.description}</p>
//                             <a href="#" className="btn btn-primary">View Profile</a>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }

// const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % characters.length;
//     console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
// };
// console.log("current", characters)

// return (
//     <div>


//         <PersonsOrgs />
//         <ReactPaginate
//             nextLabel="next >"
//             onPageChange={handlePageClick}
//             pageRangeDisplayed={2}
//             marginPagesDisplayed={2}
//             pageCount={pageCount}
//             previousLabel="< previous"
//             pageClassName="page-item"
//             pageLinkClassName="page-link"
//             previousClassName="page-item"
//             previousLinkClassName="page-link"
//             nextClassName="page-item"
//             nextLinkClassName="page-link"
//             breakLabel="..."
//             breakClassName="page-item"
//             breakLinkClassName="page-link"
//             containerClassName="pagination"
//             activeClassName="active"
//         // renderOnZeroPageCount={null}
//         />

//     </div>

// );
// }