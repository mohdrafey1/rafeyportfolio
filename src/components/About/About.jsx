import React from "react";
import aboutPic from "../../assets/about.jpg";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 md:py-32 bg-white dark:bg-gray-900 w-full flex items-center"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image with animated border effect */}
                    <div className="relative flex justify-center">
                        <div
                            className="w-64 h-64 md:w-80 md:h-64 rounded-xl overflow-hidden relative shadow-xl
                                    before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr 
                                    before:from-pink-500 before:via-transparent before:to-pink-500 
                                    before:animate-spin before:animate-slow before:rounded-xl before:scale-125"
                        >
                            <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-lg z-10 flex items-center justify-center overflow-hidden">
                                <img
                                    src={aboutPic}
                                    alt="About Me"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="text-center md:text-left">
                        <h3 className="text-pink-500 dark:text-pink-400 text-lg font-bold uppercase mb-3">
                            About me
                        </h3>
                        <h4 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl font-bold mb-4">
                            Computer Science Engineering Student <br />
                            <span className="flex items-center justify-center md:justify-start mt-2">
                                Lucknow, India 📍
                            </span>
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
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
