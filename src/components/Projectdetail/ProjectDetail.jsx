import React from "react";

function ProjectDetail({ project, onClose }) {
    return (
        <div className="relative flex h-[80vh] w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            {/* Close Button */}
            <button
                className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors focus:outline-none"
                onClick={onClose}
                aria-label="Close"
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

            {/* Project Content Container */}
            <div className="flex w-full flex-col md:flex-row">
                {/* Right Side - Project Information */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                        {project.title}
                    </h2>

                    <div className="space-y-6 text-gray-700 dark:text-gray-300">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                Description
                            </h3>
                            <p className="text-base leading-relaxed">
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
                                        className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                                    >
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub Repo
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
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
                            </div>
                        </div>
                    </div>
                </div>
                {/* Left Side - Images Gallery */}
                <div className="w-full md:w-1/2 flex flex-wrap justify-around items-center overflow-x-auto p-4">
                    {project.images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full h-auto m-2 transition-transform hover:scale-105"
                        >
                            <img
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover rounded-md border-2 border-gray-200 dark:border-gray-700"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
