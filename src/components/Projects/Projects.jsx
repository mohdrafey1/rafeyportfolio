import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectDetail from '../Projectdetail/ProjectDetail';
import './Projects.css';
import exploreheaven1 from '../../assets/explore-heaven1.png';
import exploreheaven2 from '../../assets/explore-heaven2.png';
import exploreheaven3 from '../../assets/explore-heaven3.png';
import exploreheaven4 from '../../assets/explore-heaven4.png';
import moviesearch1 from '../../assets/movie-search1.png';
import moviesearch2 from '../../assets/movie-search2.png';
import moviesearch3 from '../../assets/movie-search3.png';
import moviesearch4 from '../../assets/movie-search4.png';
import currencyconverter1 from '../../assets/currencyconverter1.png';
import currencyconverter2 from '../../assets/currencyconverter2.png';
import currencyconverter3 from '../../assets/currencyconverter3.png';
import currencyconverter4 from '../../assets/currencyconverter3.png';
import lottery1 from '../../assets/lottery1.png';
import lottery2 from '../../assets/lottery2.png';
import lottery3 from '../../assets/lottery3.png';
import lottery4 from '../../assets/lottery4.png';
import simon1 from '../../assets/simon1.png';
import simon2 from '../../assets/simon2.png';
import simon3 from '../../assets/simon3.png';
import simon4 from '../../assets/simon1.png';
import weather1 from '../../assets/weather1.png';
import weather2 from '../../assets/weather2.png';
import weather3 from '../../assets/weather3.png';
import weather4 from '../../assets/weather1.png';

const projectData = [
    {
        id: 1,
        images: [
            exploreheaven1,
            exploreheaven2,
            exploreheaven3,
            exploreheaven4,
        ],
        title: 'Explore Heaven',
        description:
            'Explore Heaven is a web application designed to provide users with a platform to explore and discover heavenly destinations around the world. Users can browse through a list of heavenly listings, view details of each listing, and even contribute their own listings.',
        github: 'https://github.com/mohdrafey1/Explore-Heaven',
        demo: 'https://explore-heaven.onrender.com/listings',
        tech: 'HTML, CSS, Javascript, EJS, NodeJs, PassportJs, Bootstrap, ExpressJs, Mongodb, cloudinary, Render.',
    },
    {
        id: 2,
        images: [moviesearch1, moviesearch2, moviesearch3, moviesearch4],
        title: 'Movie Search App',
        description:
            'This project is a React-based application that allows users to search for movies using the OMDb API. It includes components for displaying a list of movies, detailed movie information, and a search form for fetching movies by title. The project incorporates context for state management, modal popups for detailed views, and responsive styling.',
        github: 'https://github.com/mohdrafey1/movie-search-app',
        demo: 'https://movie-search-app-ruddy-one.vercel.app/',
        tech: 'HTML, CSS, Javascript, React, React Modal, Axios.',
    },
    {
        id: 3,
        images: [
            currencyconverter1,
            currencyconverter2,
            currencyconverter3,
            currencyconverter4,
        ],
        title: 'Currency Converter',
        description:
            'The Currency Converter is a simple command-line application that allows users to convert between different currencies. This project utilizes real-time exchange rates retrieved from an API to perform the currency conversions.',
        github: 'https://github.com/mohdrafey1/Currency-converter-project',
        demo: 'https://mohdrafey1.github.io/Currency-converter-project/',
        tech: 'HTML, CSS, Javascript, API.',
    },
    {
        id: 4,
        images: [lottery1, lottery2, lottery3, lottery4],
        title: 'Lottery App',
        description:
            'Welcome to the Lottery Website project! This project aims to provide users with a platform to participate in lotteries online. Built using React and Tailwind CSS, this website offers a seamless and visually appealing experience for users interested in trying their luck.',
        github: 'https://github.com/mohdrafey1/LotteryApp',
        demo: 'https://lottery-app-mu.vercel.app/',
        tech: 'React, Tailwind.',
    },
    {
        id: 5,
        images: [simon1, simon2, simon3, simon4],
        title: 'Simon Game',
        description:
            'Simon Game is a classic memory game where players have to remember and repeat a sequence of lights and sounds. The game provides increasing levels of difficulty by adding more steps to the sequence as the player progresses.',
        github: 'https://github.com/mohdrafey1/Simon-Game',
        demo: 'https://mohdrafey1.github.io/Simon-Game/',
        tech: 'HTML, CSS, Javascript.',
    },
    {
        id: 6,
        images: [weather1, weather2, weather3, weather4],
        title: 'Weather App',
        description:
            'This project is a simple weather application built using React.js and utilizes an API to fetch real-time weather data. The application displays weather information for a specified location, providing users with current weather conditions as well as a forecast.',
        github: 'https://github.com/mohdrafey1/Weather_App_React',
        demo: 'https://weather-app-react-eta-nine.vercel.app/',
        tech: 'React, CSS.',
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
