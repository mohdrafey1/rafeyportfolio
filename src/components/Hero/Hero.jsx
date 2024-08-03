import React from 'react';
import './Hero.css';
import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="content">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>
                                Hi, I'm Mohd Rafey{' '}
                                <span className="wave">👋</span>
                            </h1>
                            <p>
                                A passionate Computer Science Engineering
                                Student with a Focus on Web Development and
                                Software Engineering...
                            </p>
                            <span className="social-links">
                                <a
                                    href="https://github.com/mohdrafey1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mohd-rafey/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={linkedinLogo} alt="LinkedIn" />
                                </a>
                            </span>
                        </div>
                        <div className="hero-image"></div>
                    </div>

                    <div className="skills">
                        <p>Tech Stack</p>
                        <div className="logos">
                            <ul>
                                <li>
                                    <img
                                        src="https://skillicons.dev/icons?i=html,css"
                                        alt="HTML & CSS icon"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://skillicons.dev/icons?i=js,ts"
                                        alt="JavaScript & TypeScript icon"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://skillicons.dev/icons?i=react,next"
                                        alt="React & Next.js icon"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://skillicons.dev/icons?i=tailwind,bootstrap"
                                        alt="Tailwind CSS & SCSS icon"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
