import React from 'react';
import './About.css';
import aboutPic from '../../assets/about.jpg';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="image">
                        {' '}
                        <img src={aboutPic} alt="About Me" />
                    </div>
                    <div className="text">
                        <h3>About me</h3>
                        <h4>
                            Computer Science Engineering Student Lucknow, India
                            📍{' '}
                        </h4>
                        <p>
                            Hey, my name is Mohd Rafey, and I'm a Passionate
                            computer science engineering student with a love for
                            web development. Proficient in HTML, CSS, and
                            JavaScript, with expertise in React.js and Node.js
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
