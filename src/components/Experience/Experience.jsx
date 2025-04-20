import React from "react";

// Import icons from your preferred icon library or use SVGs directly
import { MapPin, Calendar } from "lucide-react";

const experienceData = [
    {
        id: 1,
        position: "MERN Stack Developer Intern",
        company: "Reactify Labs",
        location: "Remote",
        duration: "March 2025 - Present",
        description:
            "Working on full-stack development using the MERN (MongoDB, Express.js, React, Node.js) stack. Building responsive web applications and implementing front-end interfaces with React and Tailwind CSS. Contributing to RESTful API development and database integration.",
        skills: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
    },
    {
        id: 2,
        position: "Full Stack Developer Intern",
        company: "Vegingo",
        location: "Lucknow, Remote",
        duration: "July 2024 - October 2024",
        description:
            "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with the design team to implement responsive and user-friendly interfaces. Assisted in database design and API integration.",
        skills: ["JavaScript", "React", "Node.js", "MongoDB", "UI/UX", "Git"],
    },
    {
        id: 3,
        position: "Freelance Developer",
        company: "Al Resala",
        location: "Al Ain Remote",
        duration: "December 2024",
        description:
            "Completed a one-month freelance project developing a custom web application. Worked directly with clients to understand requirements and deliver solutions. Implemented responsive design and provide best services.",
        skills: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind CSS",
            "REST API",
        ],
    },
];

function Experience() {
    return (
        <section
            id="experience"
            className="py-16 px-4 md:px-8 w-full transition-colors duration-300 bg-white dark:bg-gray-900"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold relative text-gray-800 dark:text-white after:content-[''] after:absolute after:w-16 after:h-1 after:bg-purple-500 after:left-0 after:-bottom-2">
                        Experience
                    </h2>
                </div>

                <div className="space-y-8">
                    {experienceData.map((exp) => (
                        <div
                            key={exp.id}
                            className="group relative rounded-xl overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Purple accent on the left */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 group-hover:w-2 transition-all duration-300"></div>

                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                                            {exp.position}
                                        </h3>
                                        <div className="text-purple-600 dark:text-purple-400 font-medium text-lg mb-2">
                                            {exp.company}
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                                        <div className="flex items-center">
                                            <Calendar className="mr-1" />
                                            {exp.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="mr-1" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
