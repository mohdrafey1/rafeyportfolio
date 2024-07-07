import React from 'react';
import './ProjectDetail.css';

function ProjectDetail({ project, onClose }) {
    return (
        <div className="project-detail">
            <button className="close-button" onClick={onClose}>
                X
            </button>
            <div className="project-content">
                <div className="left-side">
                    {project.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${project.title} image ${index + 1}`}
                            className="project-image"
                        />
                    ))}
                </div>
                <div className="right-side">
                    <h2>{project.title}</h2>
                    <p className="card-text">
                        <strong>Description:</strong> {project.description}
                    </p>
                    <p className="card-text">
                        <strong>Tech Used:</strong> {project.tech}
                    </p>
                    <div className="project-detail-links">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
