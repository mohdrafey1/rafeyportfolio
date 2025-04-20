import React, { useState } from "react";
import { MapPin, Calendar, Briefcase, ChevronRight } from "lucide-react";

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
        color: "purple",
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
        color: "blue",
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
        color: "green",
    },
];

const COLOR_CLASSES = {
    purple: {
        accent: "bg-purple-500",
        hover: "group-hover:bg-purple-600",
        text: "text-purple-600 dark:text-purple-400",
        skillBg: "bg-purple-100 dark:bg-purple-900/30",
        skillText: "text-purple-800 dark:text-purple-300",
        timeline: "bg-gradient-to-b from-purple-500 to-purple-400",
    },
    blue: {
        accent: "bg-blue-500",
        hover: "group-hover:bg-blue-600",
        text: "text-blue-600 dark:text-blue-400",
        skillBg: "bg-blue-100 dark:bg-blue-900/30",
        skillText: "text-blue-800 dark:text-blue-300",
        timeline: "bg-gradient-to-b from-blue-500 to-blue-400",
    },
    green: {
        accent: "bg-emerald-500",
        hover: "group-hover:bg-emerald-600",
        text: "text-emerald-600 dark:text-emerald-400",
        skillBg: "bg-emerald-100 dark:bg-emerald-900/30",
        skillText: "text-emerald-800 dark:text-emerald-300",
        timeline: "bg-gradient-to-b from-emerald-500 to-emerald-400",
    },
};

function ExperienceCard({ exp, isActive, onClick, isFirst, isLast }) {
    const colorClasses = COLOR_CLASSES[exp.color];

    return (
        <div className="relative">
            {/* Timeline elements */}
            <div className="absolute left-8 top-0 bottom-0 w-1 hidden md:block">
                <div
                    className={`w-1 ${
                        isFirst
                            ? "h-1/2 bottom-0"
                            : isLast
                            ? "h-1/2 top-0"
                            : "h-full"
                    } absolute ${colorClasses.timeline}`}
                ></div>
                <div
                    className={`absolute top-10 -left-2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 ${colorClasses.accent} z-10`}
                ></div>
            </div>

            <div
                className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ml-0 md:ml-12 mb-8 cursor-pointer 
                    ${
                        isActive
                            ? "bg-white dark:bg-gray-800 shadow-xl"
                            : "bg-gray-50 dark:bg-gray-800/60 hover:shadow-lg"
                    }`}
                onClick={onClick}
            >
                {/* Side accent */}
                <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 ${colorClasses.accent} ${colorClasses.hover} transition-all duration-300`}
                ></div>

                <div className="p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 flex items-center">
                                <span
                                    className={`mr-2 p-2 rounded-lg ${colorClasses.skillBg}`}
                                >
                                    <Briefcase
                                        className={`w-5 h-5 ${colorClasses.text}`}
                                    />
                                </span>
                                {exp.position}
                            </h3>
                            <div
                                className={`${colorClasses.text} font-medium text-lg mb-2`}
                            >
                                {exp.company}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="mr-1 w-4 h-4" />
                                    {exp.duration}
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="mr-1 w-4 h-4" />
                                    {exp.location}
                                </div>
                            </div>
                        </div>
                        <div className="transform transition-transform duration-300">
                            <ChevronRight
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                    isActive ? "rotate-90" : ""
                                }`}
                            />
                        </div>
                    </div>

                    {isActive && (
                        <div className="mt-4 animate-fadeIn">
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 text-sm ${colorClasses.skillBg} ${colorClasses.skillText} rounded-full transition-all duration-300 hover:scale-105`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Experience() {
    const [activeId, setActiveId] = useState(1);

    const toggleActive = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section
            id="experience"
            className="py-24 px-4 md:px-8 w-full transition-colors duration-300 bg-white dark:bg-gray-900"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl font-bold relative inline-block text-gray-800 dark:text-white pb-2 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:left-0 after:-bottom-1">
                        Professional Journey
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto md:mx-0">
                        A timeline of my professional growth and experiences in
                        the tech industry
                    </p>
                </div>

                <div className="space-y-2">
                    {experienceData.map((exp, index) => (
                        <ExperienceCard
                            key={exp.id}
                            exp={exp}
                            isActive={activeId === exp.id}
                            onClick={() => toggleActive(exp.id)}
                            isFirst={index === 0}
                            isLast={index === experienceData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
