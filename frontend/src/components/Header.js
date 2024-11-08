import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // Get the current location (route)

    return (
        <div className="header bg-white text-dark shadow-sm border border-secondary rounded">
  <div className="container py-3">
    <div className="d-flex justify-content-center">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/about" 
                                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/projects" 
                                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contact" 
                                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
