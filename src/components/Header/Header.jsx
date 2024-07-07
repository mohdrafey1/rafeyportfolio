import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <h3>Mohd Rafey</h3>
                </div>
                <div className="nav-links">
                    <ul>
                        <li className="link-item">
                            <a href="#home" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-menu" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-menu"
                    >
                        <path d="M3 12h18"></path>
                        <path d="M3 6h18"></path>
                        <path d="M3 18h18"></path>
                    </svg>
                </div>
            </nav>
            <div
                className={`mobile-nav ${
                    menuOpen ? 'open-menu' : 'closed-menu'
                }`}
            >
                <span onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-x"
                    >
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </span>
                <ul>
                    <li>
                        <a href="#home" onClick={toggleMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={toggleMenu}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={toggleMenu}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
