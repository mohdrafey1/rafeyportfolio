import React, { useState } from "react";
import Modal from "react-modal";
import ProjectDetail from "../Projectdetail/ProjectDetail";
import "./Projects.css";
import exploreheaven1 from "../../../assets/explore-heaven1.png";
import exploreheaven2 from "../../../assets/explore-heaven2.png";
import exploreheaven3 from "../../../assets/explore-heaven3.png";
import exploreheaven4 from "../../../assets/explore-heaven4.png";
import moviesearch1 from "../../../assets/movie-search1.png";
import moviesearch2 from "../../../assets/movie-search2.png";
import moviesearch3 from "../../../assets/movie-search3.png";
import moviesearch4 from "../../../assets/movie-search4.png";
import ss1 from "../../../assets/ss1.png";
import ss2 from "../../../assets/ss2.png";
import ss3 from "../../../assets/ss3.png";
import ss4 from "../../../assets/ss4.png";
import pss1 from "../../../assets/pss1.png";
import pss2 from "../../../assets/pss2.png";
import pss3 from "../../../assets/pss3.png";
import pss4 from "../../../assets/pss4.png";
import learning1 from "../../../assets/learningblog1.png";
import learning2 from "../../../assets/learningblog2.png";
import learning3 from "../../../assets/learningblog3.png";
import learning4 from "../../../assets/learningblog4.png";
import grocery1 from "../../../assets/grocery-mart1.png";
import grocery2 from "../../../assets/grocery-mart2.png";
import grocery3 from "../../../assets/grocery-mart3.png";
import grocery4 from "../../../assets/grocery-mart4.png";

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
        <section className="projects" id="projects">
            <div className="project-container">
                <h2>Projects</h2>
                <div className="project-cards">
                    {projectData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <img src={project.images[0]} alt={project.title} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>
                                    {project.description.length >= 25
                                        ? `${project.description.substring(
                                              0,
                                              25
                                          )}...`
                                        : project.description}
                                </p>
                            </div>
                            <div className="project-links">
                                <button onClick={() => openModal(project)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="modal"
                overlayClassName="overlay"
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
