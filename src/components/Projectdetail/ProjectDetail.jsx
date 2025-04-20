import React from "react";

function ProjectDetail({ project, onClose }) {
    return (
        <div className="relative flex flex-col h-[80vh] w-full bg-white dark:bg-gray-800">
            {/* Close Button */}
            <button
                className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                onClick={onClose}
                aria-label="Close modal"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Project Content Container - Scrollable on mobile */}
            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
                {/* Left Side - Project Information (Scrollable if needed) */}
                <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 dark:text-white">
                        {project.title}
                    </h2>

                    <div className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                Description
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.split(",").map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs md:text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                                    >
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2 md:pt-4">
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                                    aria-label="GitHub repository"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 md:h-5 md:w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub Repo
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                        aria-label="Live demo"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 md:h-5 md:w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Images Gallery (Scrollable on mobile) */}
                <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                    <div className="space-y-4">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className="w-full transition-transform hover:scale-[1.02]"
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} screenshot ${
                                        index + 1
                                    }`}
                                    className="w-full h-auto max-h-64 md:max-h-96 object-contain rounded-md border border-gray-200 dark:border-gray-700 shadow-sm mx-auto"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
