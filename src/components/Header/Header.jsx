import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { usePreference } from "../../PreferenceContext";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { isDarkMode, setIsDarkMode, isOldUI, setIsOldUI } = usePreference();

    // Handle initial theme setup
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            setIsDarkMode(true);
        } else if (storedTheme === "light") {
            setIsDarkMode(false);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDarkMode(prefersDark);
        }

        // Add scroll listener for header effects
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = document.querySelectorAll("section[id]");
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    setActiveSection(section.getAttribute("id"));
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Apply theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    // Handle clicks outside menu
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

    // Handle Escape key
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
        { href: "#home", label: "Home", icon: "home" },
        { href: "#about", label: "About", icon: "user" },
        { href: "#experience", label: "Experience", icon: "briefcase" },
        { href: "#projects", label: "Projects", icon: "code" },
        { href: "#contact", label: "Contact", icon: "mail" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full flex items-center justify-between px-6 md:px-10 lg:px-20 py-4 z-50 transition-all duration-300 ease-in-out backdrop-blur-md
                ${
                    scrolled
                        ? "bg-white/90 dark:bg-gray-900/90 shadow-lg py-3"
                        : "bg-transparent dark:bg-transparent py-6"
                }`}
            >
                {/* Logo with animated gradient effect */}
                <div className="flex items-center">
                    <div className="relative group">
                        <h3
                            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-pink-600 to-indigo-600 dark:from-pink-400 dark:to-indigo-400 
                            hover:from-indigo-600 hover:to-pink-600 dark:hover:from-indigo-400 dark:hover:to-pink-400 
                            transition-all duration-500 tracking-tight font-serif"
                        >
                            Mohd Rafey
                        </h3>
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-indigo-600 
                            dark:from-pink-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300"
                        ></span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex space-x-1 lg:space-x-2 mr-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`relative text-base font-medium px-4 py-2 rounded-full transition-all duration-300
                                        ${
                                            activeSection ===
                                            item.href.replace("#", "")
                                                ? "text-white bg-gradient-to-r from-pink-600 to-indigo-600 dark:from-pink-500 dark:to-indigo-500"
                                                : "text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
                                        }`}
                                >
                                    {item.label}
                                    {activeSection ===
                                        item.href.replace("#", "") && (
                                        <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-pink-600/20 to-indigo-600/20 dark:from-pink-500/20 dark:to-indigo-500/20"></span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* UI Toggle Switch */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            New UI
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isOldUI}
                                onChange={() => setIsOldUI(!isOldUI)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-pink-600 peer-checked:to-indigo-600 dark:peer-checked:from-pink-500 dark:peer-checked:to-indigo-500"></div>
                        </label>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Old UI
                        </span>
                    </div>

                    {/* Enhanced Theme Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`p-2.5 mx-4 rounded-full transition-all duration-500 
                            ${
                                isDarkMode
                                    ? "bg-gray-800 rotate-180"
                                    : "bg-gray-100"
                            } 
                            focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400`}
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-indigo-600" />
                        )}
                    </button>

                    {/* Resume Button with hover effect */}
                    <a
                        href="https://drive.google.com/file/d/1PHncSqQhzbgZoFIv5496gyNDEDqgIYi4/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden group relative overflow-hidden xl:flex items-center mr-6 px-6 py-2.5 bg-gradient-to-r from-pink-600 to-indigo-600 
                            dark:from-pink-500 dark:to-indigo-500 text-white rounded-full transition-all duration-300 
                            shadow-md hover:shadow-lg hover:shadow-pink-500/20 dark:hover:shadow-pink-400/20"
                    >
                        <span
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-pink-600 
                            dark:from-indigo-500 dark:to-pink-500 transform scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-500 origin-left"
                        ></span>
                        <FileText className="w-4 h-4 mr-2 relative z-10" />
                        <span className="font-medium relative z-10">
                            Resume
                        </span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`p-2.5 rounded-full transition-all duration-500 
                            ${
                                isDarkMode
                                    ? "bg-gray-800 rotate-180"
                                    : "bg-gray-100"
                            } 
                            focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400`}
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-indigo-600" />
                        )}
                    </button>

                    <button
                        className="menu-button focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 p-2 rounded-full bg-gray-100 dark:bg-gray-800"
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay with improved animation */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleMenu}
                aria-hidden="true"
            />

            {/* Mobile Menu with glass morphism effect */}
            <div
                className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl z-50 transform transition-all duration-500 ease-out 
                    ${menuOpen ? "translate-x-0" : "translate-x-full"} 
                    flex flex-col py-20 px-8`}
            >
                <button
                    className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                        hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none 
                        focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                >
                    <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                </button>

                {/* Mobile navigation with slide-in animation */}
                <ul className="flex flex-col space-y-5 mt-8">
                    {navItems.map((item, index) => (
                        <li
                            key={item.href}
                            className={`transform transition-all duration-300 delay-${
                                index * 100
                            } 
                                ${
                                    menuOpen
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-8 opacity-0"
                                }`}
                        >
                            <a
                                href={item.href}
                                onClick={toggleMenu}
                                className={`block text-lg font-medium px-5 py-3 rounded-xl transition-all duration-300 
                                    ${
                                        activeSection ===
                                        item.href.replace("#", "")
                                            ? "bg-gradient-to-r from-pink-600/20 to-indigo-600/20 dark:from-pink-500/20 dark:to-indigo-500/20 text-pink-600 dark:text-pink-400"
                                            : "hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-200"
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button - Mobile */}
                <div
                    className={`mt-10 transform transition-all duration-300 delay-500 
                    ${
                        menuOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <a
                        href="https://drive.google.com/file/d/1PHncSqQhzbgZoFIv5496gyNDEDqgIYi4/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-14 py-3.5 bg-gradient-to-r from-pink-600 to-indigo-600 
                            dark:from-pink-500 dark:to-indigo-500 text-white rounded-xl transition-all duration-300 
                            shadow-md hover:shadow-lg hover:shadow-pink-500/20 dark:hover:shadow-pink-400/20"
                        onClick={toggleMenu}
                    >
                        <FileText className="w-5 h-5 mr-2" />
                        <span className="">Resume</span>
                    </a>
                </div>

                {/* Mobile UI Toggle Switch */}
                <div className="mt-8 px-4 flex items-center justify-center space-x-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        New UI
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isOldUI}
                            onChange={() => setIsOldUI(!isOldUI)}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-pink-600 peer-checked:to-indigo-600 dark:peer-checked:from-pink-500 dark:peer-checked:to-indigo-500"></div>
                    </label>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Old UI
                    </span>
                </div>
            </div>
        </>
    );
}
