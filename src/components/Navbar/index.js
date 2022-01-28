import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = useContext(UserContext)


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Marvel-Mania</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Headquarters
                            </Link>
                        </li>                       
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">
                                Contact Us & More
                            </Link>
                        </li>
                        {!user ? (
                        <li className="nav-item">
                            <Link className="nav-link" to="login">
                                Login
                            </Link>
                        </li>
                        ) : (
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
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
