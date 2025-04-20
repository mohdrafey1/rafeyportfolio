import React, { useEffect, useRef } from "react";
import { MapPin, Code, User, Calendar, BookOpen, Award } from "lucide-react";
import aboutPic from "../../assets/pic.jpg";

export default function About() {
    const progressRef = useRef(null);

    useEffect(() => {
        // Initialize animation for skill bars
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const skillBars =
                            document.querySelectorAll(".skill-progress");
                        skillBars.forEach((bar) => {
                            const targetWidth =
                                bar.getAttribute("data-progress");
                            bar.style.width = targetWidth;
                            bar.style.opacity = 1;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, []);

    const skills = [
        { name: "Front-end Development", level: "90%" },
        { name: "Back-end Development", level: "80%" },
        { name: "UI/UX Design", level: "75%" },
        { name: "Database Management", level: "85%" },
    ];

    const highlights = [
        {
            icon: <Code className="w-5 h-5 text-pink-500" />,
            title: "Web Development",
            description: "Building responsive and interactive web applications",
        },
        {
            icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
            title: "Continuous Learning",
            description: "Always exploring new technologies and frameworks",
        },
        {
            icon: <Award className="w-5 h-5 text-yellow-500" />,
            title: "Problem Solving",
            description: "Creating efficient solutions to complex challenges",
        },
    ];

    return (
        <section
            id="about"
            className="py-24 bg-gray-50 dark:bg-gray-900 w-full overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute left-0 top-1/4 w-64 h-64 bg-pink-400/10 dark:bg-pink-400/5 rounded-full filter blur-3xl" />
            <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full filter blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center">
                        <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-500"></span>
                        <span className="mx-4 text-pink-500 dark:text-pink-400 font-medium">
                            ABOUT ME
                        </span>
                        <span className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-transparent"></span>
                    </div>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Get to Know Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left column - Profile Image & Info */}
                    <div className="flex flex-col items-center lg:items-start space-y-8">
                        {/* Enhanced animated profile image */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-xl blur-md opacity-30 group-hover:opacity-70 transition duration-700"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform group-hover:scale-[1.01] transition duration-500">
                                {/* Replace with your actual image path */}
                                <img
                                    src={aboutPic}
                                    alt="About Me"
                                    className="w-full h-full object-cover"
                                />

                                {/* Info chips */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                Mohd Rafey
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                Lucknow, India
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                Computer Science Engineering
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill progress bars */}
                        <div
                            ref={progressRef}
                            className="w-full max-w-md space-y-6 px-2"
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                My Skills
                            </h3>

                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
                                            {skill.level}
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="skill-progress h-full bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-0 transition-all duration-1000 ease-out"
                                            data-progress={skill.level}
                                            style={{ width: "0%" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column - About content */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                                Computer Science Engineering Student
                            </h3>

                            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                <p className="mb-4">
                                    Hey there! I'm{" "}
                                    <span className="font-semibold text-gray-800 dark:text-white">
                                        Mohd Rafey
                                    </span>
                                    , a passionate computer science engineering
                                    student with a deep love for web development
                                    and creating digital experiences that make
                                    an impact.
                                </p>
                                <p className="mb-4">
                                    My journey into the world of programming
                                    began with curiosity, which quickly evolved
                                    into a passion for building solutions that
                                    solve real-world problems. I'm proficient in
                                    HTML, CSS, and JavaScript, with expertise in
                                    modern frameworks like React.js and Node.js.
                                </p>
                                <p>
                                    I believe in continuous learning and staying
                                    up-to-date with the latest technologies.
                                    When I'm not coding, you can find me
                                    exploring new tech trends, collaborating on
                                    open-source projects, or enhancing my
                                    problem-solving skills.
                                </p>
                            </div>
                        </div>

                        {/* Highlights/Focus areas */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="p-3 inline-flex rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-6 flex justify-start">
                            <a
                                href="#experience"
                                className="group inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-pink-600 dark:hover:bg-pink-500 transition-colors duration-300"
                            >
                                <span>View My Experience</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
