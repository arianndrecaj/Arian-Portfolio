import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // Get the current location (route)

    return (
        <div className="card text-center bg-black text-white">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills justify-content-center">
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={`fst-italic nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/about" 
                            className={`fst-italic nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/projects" 
                            className={`fst-italic nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/contact" 
                            className={`fst-italic nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
