import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
    ExternalLink,
    Github,
    X,
    ChevronRight,
    Code,
    Monitor,
    Layers,
} from "lucide-react";
import ProjectDetail from "../Projectdetail/ProjectDetail";
import exploreheaven1 from "../../assets/explore-heaven1.png";
import exploreheaven2 from "../../assets/explore-heaven2.png";
import exploreheaven3 from "../../assets/explore-heaven3.png";
import exploreheaven4 from "../../assets/explore-heaven4.png";
import ss1 from "../../assets/studentsenior/ss1.png";
import ss2 from "../../assets/studentsenior/ss2.png";
import ss3 from "../../assets/studentsenior/ss3.png";
import ss4 from "../../assets/studentsenior/ss4.png";
import ssb1 from "../../assets/studentsenior/ssb1.png";
import ssb2 from "../../assets/studentsenior/ssb2.png";
import ssb3 from "../../assets/studentsenior/ssb3.png";
import ssb4 from "../../assets/studentsenior/ssb4.png";
import ssd1 from "../../assets/studentsenior/ssd1.png";
import ssd2 from "../../assets/studentsenior/ssd2.png";
import ssd3 from "../../assets/studentsenior/ssd3.png";
import ssd4 from "../../assets/studentsenior/ssd4.png";
import learning1 from "../../assets/learningblog1.png";
import learning2 from "../../assets/learningblog2.png";
import learning3 from "../../assets/learningblog3.png";
import learning4 from "../../assets/learningblog4.png";
import grocery1 from "../../assets/grocery-mart1.png";
import grocery2 from "../../assets/grocery-mart2.png";
import grocery3 from "../../assets/grocery-mart3.png";
import grocery4 from "../../assets/grocery-mart4.png";

// Using placeholder images for the artifact
const placeholderImages = {
    exploreheaven1: exploreheaven1,
    exploreheaven2: exploreheaven2,
    exploreheaven3: exploreheaven3,
    exploreheaven4: exploreheaven4,
    ss1: ss1,
    ss2: ss2,
    ss3: ss3,
    ss4: ss4,
    ssb1: ssb1,
    ssb2: ssb2,
    ssb3: ssb3,
    ssb4: ssb4,
    ssd1: ssd1,
    ssd2: ssd2,
    ssd3: ssd3,
    ssd4: ssd4,
    learning1: learning1,
    learning2: learning2,
    learning3: learning3,
    learning4: learning4,
    grocery1: grocery1,
    grocery2: grocery2,
    grocery3: grocery3,
    grocery4: grocery4,
};

const projectData = [
    {
        id: 1,
        images: [
            placeholderImages.ss1,
            placeholderImages.ss2,
            placeholderImages.ss3,
            placeholderImages.ss4,
        ],
        title: "Student Senior",
        description:
            "Student Senior is a dynamic platform designed to connect college students for mentorship, guidance, and community building. It enables students to ask questions, share knowledge, and trade items within their college ecosystem. Senior students can register as mentors to guide juniors, fostering a collaborative and supportive environment.",
        github: "https://github.com/mohdrafey1/studentsenior-frontend",
        demo: "https://www.studentsenior.com/",
        tech: "React, Tailwind CSS, REST API, Redux, Pdf-Dist",
        color: "indigo",
        category: "Education",
    },
    {
        id: 2,
        images: [
            placeholderImages.ssd1,
            placeholderImages.ssd2,
            placeholderImages.ssd3,
            placeholderImages.ssd4,
        ],
        title: "Student Senior Dashboard",
        description:
            "Developed a highly optimized admin dashboard for Student Senior using Next.js and Redux. Implemented server-side rendering (SSR) for faster performance and SEO benefits. Integrated role-based authentication to securely manage access for admins, mentors, and students.",
        github: "https://github.com/mohdrafey1/studentsenior-dashboard",
        demo: "https://dashboard.studentsenior.com",
        tech: "Next.js, Tailwind CSS, Redux, Vercel Deployment",
        color: "purple",
        category: "Dashboard",
    },
    {
        id: 3,
        images: [
            placeholderImages.ssb1,
            placeholderImages.ssb2,
            placeholderImages.ssb3,
            placeholderImages.ssb4,
        ],
        title: "Student Senior Backend",
        description:
            "Designed and developed the backend infrastructure for Student Senior, managing a large codebase for robust performance. Built RESTful APIs with Express.js, integrated server-side rendering with EJS, implemented AWS S3 presigned URLs for secure file uploads, rate limiting for API protection, and AWS CloudFront for optimized content delivery.",
        github: "https://github.com/mohdrafey1/studentsenior-backend",
        demo: "https://panel.studentsenior.com",
        tech: "Express.js, EJS, AWS S3, AWS CloudFront, MongoDB",
        color: "blue",
        category: "Dashboard",
    },
    {
        id: 4,
        images: [
            placeholderImages.exploreheaven1,
            placeholderImages.exploreheaven2,
            placeholderImages.exploreheaven3,
            placeholderImages.exploreheaven4,
        ],
        title: "Explore Heaven",
        description:
            "Explore Heaven is a travel platform that allows users to discover and share heavenly destinations worldwide. Users can browse listings, view detailed information, and contribute their own entries to the platform.",
        github: "https://github.com/mohdrafey1/Explore-Heaven",
        demo: "https://explore-heaven.onrender.com/listings",
        tech: "Node.js, Express.js, MongoDB, EJS, Cloudinary, Bootstrap, Render",
        color: "teal",
        category: "Travel",
    },
    {
        id: 5,
        images: [
            placeholderImages.grocery1,
            placeholderImages.grocery2,
            placeholderImages.grocery3,
            placeholderImages.grocery4,
        ],
        title: "Extra Grocery Mart",
        description:
            "A responsive e-commerce platform built with React and Material-UI (MUI), featuring product listings, a dynamic product detail modal, and a seamless shopping experience for users.",
        github: "https://github.com/mohdrafey1/Extra-Grocery-Mart",
        demo: "https://extra-grocery-mart.vercel.app/",
        tech: "React, Material-UI, React Modal",
        color: "green",
        category: "E-commerce",
    },
    {
        id: 6,
        images: [
            placeholderImages.learning1,
            placeholderImages.learning2,
            placeholderImages.learning3,
            placeholderImages.learning4,
        ],
        title: "Learning Blog",
        description:
            "A full-stack blogging platform where users can create, edit, and delete posts. Built with React and Tailwind CSS for the frontend and Appwrite for backend services. Integrated TinyMCE for rich text editing and implemented authentication using Appwrite services.",
        github: "https://github.com/mohdrafey1/Learning-blog",
        demo: "https://good-learning.vercel.app/",
        tech: "React, Tailwind CSS, Redux, Appwrite, TinyMCE, React Hook Form",
        color: "red",
        category: "Blog",
    },
];

// Theme configuration for project cards
const themeConfig = {
    indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        border: "border-indigo-200 dark:border-indigo-800",
        glow: "shadow-indigo-500/30",
        text: "text-indigo-700 dark:text-indigo-300",
        buttonBg:
            "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700",
        categoryBg: "bg-indigo-100 dark:bg-indigo-900/40",
        gradient: "from-indigo-600 to-purple-600",
        icon: Code,
    },
    blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        glow: "shadow-blue-500/30",
        text: "text-blue-700 dark:text-blue-300",
        buttonBg:
            "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",
        categoryBg: "bg-blue-100 dark:bg-blue-900/40",
        gradient: "from-blue-600 to-cyan-600",
        icon: Monitor,
    },
    teal: {
        bg: "bg-teal-50 dark:bg-teal-900/20",
        border: "border-teal-200 dark:border-teal-800",
        glow: "shadow-teal-500/30",
        text: "text-teal-700 dark:text-teal-300",
        buttonBg:
            "bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700",
        categoryBg: "bg-teal-100 dark:bg-teal-900/40",
        gradient: "from-teal-600 to-emerald-600",
        icon: Monitor,
    },
    green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        glow: "shadow-green-500/30",
        text: "text-green-700 dark:text-green-300",
        buttonBg:
            "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700",
        categoryBg: "bg-green-100 dark:bg-green-900/40",
        gradient: "from-green-600 to-emerald-600",
        icon: Layers,
    },
    purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        glow: "shadow-purple-500/30",
        text: "text-purple-700 dark:text-purple-300",
        buttonBg:
            "bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700",
        categoryBg: "bg-purple-100 dark:bg-purple-900/40",
        gradient: "from-purple-600 to-indigo-600",
        icon: Code,
    },
    red: {
        bg: "bg-red-50 dark:bg-red-900/20",
        border: "border-red-200 dark:border-red-800",
        glow: "shadow-red-500/30",
        text: "text-red-700 dark:text-red-300",
        buttonBg:
            "bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700",
        categoryBg: "bg-red-100 dark:bg-red-900/40",
        gradient: "from-red-600 to-orange-600",
        icon: Layers,
    },
};

function ProjectModal({ project, isOpen, onClose }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const theme = themeConfig[project?.color || "purple"];

    if (!project) return null;

    // Prevent scroll on body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Color accent */}
                        <div
                            className={`h-1 w-full bg-gradient-to-r ${theme.gradient}`}
                        ></div>

                        <div className="flex flex-col md:flex-row h-[80vh]">
                            {/* Left: Project info */}
                            <div className="w-full md:w-1/2 p-6 overflow-y-auto">
                                <div className="space-y-4">
                                    {/* Project title */}
                                    <div>
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${theme.categoryBg} ${theme.text} mb-2`}
                                        >
                                            {project.category}
                                        </span>
                                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                                            {project.title}
                                        </h2>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                            About
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech
                                                .split(",")
                                                .map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-3 py-1 text-sm ${theme.categoryBg} ${theme.text} rounded-full`}
                                                    >
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            GitHub Repo
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${theme.buttonBg}`}
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image gallery */}
                            <div
                                className={`w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 ${theme.bg}`}
                            >
                                <div className="p-6">
                                    {/* Main image display */}
                                    <div className="w-full h-64 md:h-80 mb-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                                        <img
                                            src={
                                                project.images[activeImageIndex]
                                            }
                                            alt={`${project.title} screenshot ${
                                                activeImageIndex + 1
                                            }`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Thumbnails */}
                                    <div className="grid grid-cols-4 gap-2">
                                        {project.images.map((img, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setActiveImageIndex(index)
                                                }
                                                className={`relative border rounded-md overflow-hidden h-16 md:h-20 transition-all 
                          ${
                              activeImageIndex === index
                                  ? `ring-2 ring-offset-2 ${theme.border} dark:ring-offset-gray-800`
                                  : "opacity-70 hover:opacity-100"
                          }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function ProjectCard({ project, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const theme = themeConfig[project.color];
    const Icon = theme.icon;

    return (
        <div
            className={`group relative overflow-hidden rounded-xl border ${theme.border} ${theme.bg} transition-all duration-300 hover:shadow-xl hover:shadow-${theme.glow}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Top accent bar */}
            <div
                className={`h-1 w-full bg-gradient-to-r ${theme.gradient}`}
            ></div>

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
                <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${theme.categoryBg} ${theme.text}`}
                >
                    {project.category}
                </span>
            </div>

            {/* Project image with overlay */}
            <div className="relative overflow-hidden h-48">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                        isHovered ? "scale-110" : "scale-100"
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 w-full p-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tech
                                .split(",")
                                .slice(0, 3)
                                .map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`text-xs font-medium px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm`}
                                    >
                                        {tech.trim()}
                                    </span>
                                ))}
                            {project.tech.split(",").length > 3 && (
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                                    +{project.tech.split(",").length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start mb-4">
                    <div className={`p-2 rounded-lg ${theme.categoryBg} mr-3`}>
                        <Icon className={`h-5 w-5 ${theme.text}`} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200">
                        {project.title}
                    </h3>
                </div>

                <p className="text-sm line-clamp-3 mb-5 text-gray-600 dark:text-gray-400">
                    {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                    <button
                        onClick={() => onClick(project)}
                        className={`flex items-center gap-1 px-4 py-2 text-sm text-white rounded-lg transition-all ${theme.buttonBg}`}
                    >
                        <span>View Details</span>
                        <ChevronRight className="h-4 w-4" />
                    </button>

                    <div className="flex space-x-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            aria-label="GitHub repository"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            aria-label="Live demo"
                        >
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [filter, setFilter] = useState("All");
    const [isFiltering, setIsFiltering] = useState(false);

    const categories = [
        "All",
        ...new Set(projectData.map((project) => project.category)),
    ];

    const filteredProjects =
        filter === "All"
            ? projectData
            : projectData.filter((project) => project.category === filter);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    const handleFilterChange = (newFilter) => {
        setIsFiltering(true);
        setTimeout(() => {
            setFilter(newFilter);
            setIsFiltering(false);
        }, 300);
    };

    return (
        <section
            id="projects"
            className="py-24 px-4 md:px-8 w-full transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold inline-block relative text-gray-800 dark:text-white pb-2 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:left-1/2 after:-translate-x-1/2 after:-bottom-1">
                        My Projects
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my development work across various
                        technologies and platforms
                    </p>

                    {/* Filter tabs */}
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilterChange(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    filter === category
                                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                                        : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects grid */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${
                        isFiltering ? "opacity-60" : "opacity-100"
                    }`}
                >
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={openModal}
                        />
                    ))}
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    className="modal-content max-w-4xl w-full mx-auto p-0 rounded-xl shadow-2xl outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                    overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
                    closeTimeoutMS={200}
                    ariaHideApp={false}
                    style={{
                        content: {
                            transform: "translateY(0px)",
                            transition:
                                "transform 0.2s ease-out, opacity 0.2s ease-out",
                            maxHeight: "90vh",
                            height: "auto",
                        },
                    }}
                >
                    {selectedProject && (
                        <ProjectDetail
                            project={selectedProject}
                            onClose={closeModal}
                        />
                    )}
                </Modal>
            </div>
        </section>
    );
}

export default Projects;
