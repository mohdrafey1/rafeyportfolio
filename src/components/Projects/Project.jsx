import React, { useState } from "react";
import Modal from "react-modal";
import ProjectDetail from "../Projectdetail/ProjectDetail";
import exploreheaven1 from "../../assets/explore-heaven1.png";
import exploreheaven2 from "../../assets/explore-heaven2.png";
import exploreheaven3 from "../../assets/explore-heaven3.png";
import exploreheaven4 from "../../assets/explore-heaven4.png";
import moviesearch1 from "../../assets/movie-search1.png";
import moviesearch2 from "../../assets/movie-search2.png";
import moviesearch3 from "../../assets/movie-search3.png";
import moviesearch4 from "../../assets/movie-search4.png";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import ss4 from "../../assets/ss4.png";
import pss1 from "../../assets/pss1.png";
import pss2 from "../../assets/pss2.png";
import pss3 from "../../assets/pss3.png";
import pss4 from "../../assets/pss4.png";
import learning1 from "../../assets/learningblog1.png";
import learning2 from "../../assets/learningblog2.png";
import learning3 from "../../assets/learningblog3.png";
import learning4 from "../../assets/learningblog4.png";
import grocery1 from "../../assets/grocery-mart1.png";
import grocery2 from "../../assets/grocery-mart2.png";
import grocery3 from "../../assets/grocery-mart3.png";
import grocery4 from "../../assets/grocery-mart4.png";

const projectData = [
    {
        id: 1,
        images: [ss1, ss2, ss3, ss4],
        title: "Student Senior",
        description:
            "Student Senior is a dynamic platform that connects college students for mentorship, guidance, and community building. The website allows students to ask questions, share knowledge, and trade items within the same college. Senior students can register to mentor juniors of their college , creating a collaborative ecosystem of knowledge sharing.",
        github: "https://github.com/mohdrafey1/studentsenior-frontend",
        demo: "https://www.studentsenior.com/",
        tech: "React, Tailwind, API",
    },
    {
        id: 2,
        images: [pss1, pss2, pss3, pss4],
        title: "Student Senior Dashboard",
        description:
            "The Student Senior Dashboard is an administrative interface designed to manage and oversee all the data and operations of the Student Senior platform. This dashboard provides a centralized control panel for managing users, academic resources, community posts, mentorship pairings, and item listings. Admins can easily review, update, or delete data, ensuring that the platform remains organized and efficient. ",
        github: "https://github.com/mohdrafey1/studentsenior-frontend",
        demo: "https://panel.studentsenior.com",
        tech: "HTML, Bootstrap, Express.",
    },
    {
        id: 3,
        images: [
            exploreheaven1,
            exploreheaven2,
            exploreheaven3,
            exploreheaven4,
        ],
        title: "Explore Heaven",
        description:
            "Explore Heaven is a web application designed to provide users with a platform to explore and discover heavenly destinations around the world. Users can browse through a list of heavenly listings, view details of each listing, and even contribute their own listings.",
        github: "https://github.com/mohdrafey1/Explore-Heaven",
        demo: "https://explore-heaven.onrender.com/listings",
        tech: "HTML, CSS, Javascript, EJS, NodeJs, PassportJs, Bootstrap, ExpressJs, Mongodb, cloudinary, Render.",
    },
    {
        id: 4,
        images: [grocery1, grocery2, grocery3, grocery4],
        title: "Extra Grocery Mart",
        description:
            "This project is a React-based e-commerce website built with React and Material-UI (MUI). It features a responsive navbar, product listings, and a modal for product details. The site allows users to browse products, view details.",
        github: "https://github.com/mohdrafey1/Extra-Grocery-Mart",
        demo: "https://extra-grocery-mart.vercel.app/",
        tech: "Javascript, React, React Modal, Material Ui.",
    },
    {
        id: 5,
        images: [learning1, learning2, learning3, learning4],
        title: "Learning Blog",
        description:
            "This project is a full-stack web application built with React for the frontend and Appwrite for the backend. The application allows users to create, read, update, and delete posts. Authentication is handled using Appwrite, and the project is styled using Tailwind CSS. Additionally, it includes TinyMCE for rich text editing.",
        github: "https://github.com/mohdrafey1/Learning-blog",
        demo: "https://good-learning.vercel.app/",
        tech: "React, Tailwind, Redux, Appwrite, TinyMice , React-Hook-Form.",
    },
    {
        id: 6,
        images: [moviesearch1, moviesearch2, moviesearch3, moviesearch4],
        title: "Movie Search App",
        description:
            "This project is a React-based application that allows users to search for movies using the OMDb API. It includes components for displaying a list of movies, detailed movie information, and a search form for fetching movies by title.",
        github: "https://github.com/mohdrafey1/movie-search-app",
        demo: "https://movie-search-app-ruddy-one.vercel.app/",
        tech: "HTML, CSS, Javascript, React, React Modal, Axios.",
    },
];

function Projects() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalIsOpen(false);
    };

    return (
        <section
            id="projects"
            className="py-16 px-4 md:px-8 w-full transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold relative text-gray-800 dark:text-white after:content-[''] after:absolute after:w-16 after:h-1 after:bg-purple-500 after:left-0 after:-bottom-2">
                        Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="group rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4 w-full">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech
                                                .split(", ")
                                                .slice(0, 3)
                                                .map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-xs font-medium bg-purple-500 text-white px-2 py-1 rounded"
                                                    >
                                                        {tech.split(",")[0]}
                                                    </span>
                                                ))}
                                            {project.tech.split(", ").length >
                                                3 && (
                                                <span className="text-xs font-medium bg-purple-500 text-white px-2 py-1 rounded">
                                                    +
                                                    {project.tech.split(", ")
                                                        .length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 text-gray-800 dark:text-gray-200">
                                <h3 className="font-bold text-xl mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => openModal(project)}
                                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors duration-300"
                                    >
                                        <span>View Details</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>

                                    <div className="flex space-x-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-purple-500 transition-colors dark:text-gray-400 dark:hover:text-purple-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-purple-500 transition-colors dark:text-gray-400 dark:hover:text-purple-400"
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
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="max-w-4xl mx-auto p-6 rounded-xl shadow-2xl outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
                style={{
                    content: {
                        transform: "translateY(0px)",
                        transition: "transform 0.3s ease-out",
                    },
                }}
            >
                {selectedProject && (
                    <ProjectDetail
                        project={selectedProject}
                        onClose={closeModal}
                    />
                )}
            </Modal>
        </section>
    );
}

export default Projects;
