import React, { useState, useEffect } from "react";
import "./Header.css";
import { usePreference } from "../../../PreferenceContext";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isOldUI, setIsOldUI } = usePreference();

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

                {/* UI Toggle Switch for desktop */}
                <div className="ui-toggle-container">
                    <span className="toggle-label">New</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isOldUI}
                            onChange={() => setIsOldUI(!isOldUI)}
                        />
                        <span className="slider round"></span>
                    </label>
                    <span className="toggle-label">Old</span>
                </div>

                <div className="mobile-menu" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                    menuOpen ? "open-menu" : "closed-menu"
                }`}
            >
                <span onClick={toggleMenu} className="close-menu-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

                {/* UI Toggle Switch for mobile menu - explicitly visible now */}
                <div className="mobile-ui-toggle">
                    <span className="toggle-label mobile-toggle-label">
                        New
                    </span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isOldUI}
                            onChange={() => setIsOldUI(!isOldUI)}
                        />
                        <span className="slider round"></span>
                    </label>
                    <span className="toggle-label mobile-toggle-label">
                        Old
                    </span>
                </div>
            </div>
        </>
    );
}

export default Header;
