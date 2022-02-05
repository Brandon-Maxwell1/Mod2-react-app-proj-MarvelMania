import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import './style.css';



const Navbar = () => {
    const user = useContext(UserContext)
    console.log('nav', user)
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {
                !user ? "Welcome Agent, Login to Authenticate" : `Welcome Back Agent ${user}!`
            }
            <div className="container-fluid">

                <div id="navBarHomeCss">
                    <Link className="nav-link" to="/">
                        <img src="https://assets3.thrillist.com/v1/image/737136/828x610/flatten;crop;webp=auto;jpeg_quality=70" alt='Marvel Headquarters' width={130} height={65} /> Home
                    </Link>

                </div>
                <button className="navbar-toggler" id="navToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://rukminim1.flixcart.com/image/416/416/jn97frk0/art-craft-kit/m/c/g/comics-the-punisher-logo-3-carded-button-pinback-marvel-original-imaf9zygdpv5pw7u.jpeg?q=70" alt='' width={30} height={45} />Menu
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="contact">
                                <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2022/01/Andrew-Garfield-Amazing-Spider-Man-2-phone.jpg" alt='Contact Us' width={80} height={45} />
                                Contact Us
                            </Link>
                        </li>
                        <br></br>
                        {
                            !user ?
                                <li className="nav-item">
                                    <Link to="login">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh65ZQIeEqVpP-G2EEIXd7h7fxXQZoQIBYNw&usqp=CAU" alt="Login" width={80} height={45} />
                                        Login
                                    </Link>
                                </li>
                                :
                                <li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Top Secret Files
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="nav-link" to="comic">
                                                Historical Archives
                                            </Link>
                                            <Link className="nav-link" to="profiles">
                                                X Files
                                            </Link>

                                        </ul>
                                    </li>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
