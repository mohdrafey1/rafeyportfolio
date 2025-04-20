import React from "react";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 dark:bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h3 className="text-white dark:text-gray-200 text-base md:text-lg font-medium mb-4 md:mb-0">
                        Copyright © 2024. All rights are reserved
                    </h3>
                    <div className="flex items-center space-x-6">
                        <a
                            aria-label="linkedin"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/mohd-rafey/"
                            className="text-white dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            aria-label="github"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/mohdrafey1"
                            className="text-white dark:text-gray-300 hover:text-gray-400 dark:hover:text-white transition-colors duration-300"
                        >
                            <Github size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
