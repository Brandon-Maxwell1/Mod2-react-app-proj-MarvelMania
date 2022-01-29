import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const userName = useContext(UserContext)    
    console.log(userName)
    return (

        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="nav-link" to="/">
                    <img src="https://assets3.thrillist.com/v1/image/737136/828x610/flatten;crop;webp=auto;jpeg_quality=70" alt='Marvel Headquarters' width={150} height={85}/> Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://rukminim1.flixcart.com/image/416/416/jn97frk0/art-craft-kit/m/c/g/comics-the-punisher-logo-3-carded-button-pinback-marvel-original-imaf9zygdpv5pw7u.jpeg?q=70" alt='' width={60} height={75} />Menu
                </button>                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">
                            {/* <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2022/01/Andrew-Garfield-Amazing-Spider-Man-2-phone.jpg" alt='Contact Us' width={80} height={45}/>  */}
                            Contact Us & More
                            </Link>
                        </li>
                        {!userName ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="login">
                                    Login
                                </Link>
                            </li>
                        ) : (   
                            <li> 
                                "Welcome Back {userLogin}"
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Searches link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="nav-link" to="comic">
                                        Comic Book Search
                                    </Link>
                                    <Link className="nav-link" to="character">
                                        Hero/Villian Search
                                    </Link>

                                </ul>
                            </li>
                            </li>                         
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
