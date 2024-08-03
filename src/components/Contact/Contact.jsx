import React from 'react';
import './Contacts.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text-one">Lucknow, UP</div>
                            <div className="text-two">India</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one">+919455346151</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">
                                studentseniors1@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>
                            If you have any work from me or any types of queries
                            related to my work, you can send me a message from
                            here. It's my pleasure to help you.
                        </p>
                        <form action="#">
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                            <div className="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
