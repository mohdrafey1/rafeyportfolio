import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";

export default function Header() {
    // Detect system preference on initial load
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Handle initial theme setup
    useEffect(() => {
        // Check for stored preference first
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            setIsDarkMode(true);
        } else if (storedTheme === "light") {
            setIsDarkMode(false);
        } else {
            // If no stored preference, check system preference
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDarkMode(prefersDark);
        }
    }, []);

    // Apply theme changes whenever isDarkMode changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuOpen &&
                !event.target.closest(".mobile-menu") &&
                !event.target.closest(".menu-button")
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    // Close menu when escape key is pressed
    useEffect(() => {
        const handleEscKey = (event) => {
            if (menuOpen && event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey);
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 bg-white dark:bg-gray-800 shadow-md z-50 transition-all duration-300 ease-in-out backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                <div className="logo">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white font-serif m-0 tracking-tight">
                        Mohd Rafey
                    </h3>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center">
                    <ul className="flex space-x-2 lg:space-x-6 mr-4">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 px-3 py-2 rounded-md transition-colors duration-300"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Resume Button - Desktop */}
                    <a
                        href="https://drive.google.com/file/d/1PHncSqQhzbgZoFIv5496gyNDEDqgIYi4/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center mr-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        <span className="font-medium">Resume</span>
                    </a>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full transition hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-indigo-600" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-3">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full transition hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-indigo-600" />
                        )}
                    </button>

                    <button
                        className="menu-button focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 p-1 rounded-md"
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleMenu}
                aria-hidden="true"
            />

            {/* Mobile Menu */}
            <div
                className={`mobile-menu fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } flex flex-col py-16 px-6`}
            >
                <button
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                >
                    <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </button>

                <ul className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={toggleMenu}
                                className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 px-4 py-3 rounded-md transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button - Mobile */}
                <div className="mt-8 px-4">
                    <a
                        href="https://drive.google.com/file/d/1PHncSqQhzbgZoFIv5496gyNDEDqgIYi4/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        onClick={toggleMenu}
                    >
                        <FileText className="w-5 h-5 mr-2" />
                        <span className="font-medium">See Resume</span>
                    </a>
                </div>
            </div>
        </>
    );
}
