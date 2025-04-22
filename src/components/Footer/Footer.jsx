import React from "react";
import { Linkedin, Github, Heart, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 right-1/3 w-40 h-40 bg-indigo-600/10 rounded-full blur-xl"></div>
            </div>

            {/* Scroll to top button */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={scrollToTop}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                {/* Top section with logo and links */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-10 border-b border-gray-700/50">
                    <div className="flex flex-col mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Mohd Rafey
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            Creating innovative web solutions with modern
                            technologies and aesthetic designs.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            Experience
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Bottom section with copyright and social links */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 flex items-center">
                        <p className="text-gray-400 text-sm md:text-base">
                            © 2024 Mohd Rafey. All rights reserved
                        </p>
                        <span className="inline-flex items-center mx-2 text-gray-400">
                            <span className="mx-1">•</span> Made with
                            <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
                            in India
                        </span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a
                            aria-label="Email"
                            href="mailto:mohdrafey600@gmail.com"
                            className="group flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-purple-600 rounded-full transition-all duration-300"
                        >
                            <Mail className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        </a>
                        <a
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/mohd-rafey/"
                            className="group flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-blue-600 rounded-full transition-all duration-300"
                        >
                            <Linkedin className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        </a>
                        <a
                            aria-label="GitHub"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/mohdrafey1"
                            className="group flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-gray-600 rounded-full transition-all duration-300"
                        >
                            <Github className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
