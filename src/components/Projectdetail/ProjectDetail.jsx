import React, { useState, useEffect } from "react";
import {
    X,
    Github,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

function ProjectDetail({ project, onClose }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Prevent scroll on body when component is mounted
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // Dynamic theme based on project color
    const themeConfig = {
        indigo: {
            gradient: "from-indigo-600 to-purple-600",
            accent: "bg-indigo-600",
            ring: "ring-indigo-500",
            text: "text-indigo-600 dark:text-indigo-400",
            buttonBg: "bg-indigo-600 hover:bg-indigo-700",
            badgeBg: "bg-indigo-100 dark:bg-indigo-900/40",
            badgeText: "text-indigo-700 dark:text-indigo-300",
        },
        blue: {
            gradient: "from-blue-600 to-cyan-600",
            accent: "bg-blue-600",
            ring: "ring-blue-500",
            text: "text-blue-600 dark:text-blue-400",
            buttonBg: "bg-blue-600 hover:bg-blue-700",
            badgeBg: "bg-blue-100 dark:bg-blue-900/40",
            badgeText: "text-blue-700 dark:text-blue-300",
        },
        teal: {
            gradient: "from-teal-600 to-emerald-600",
            accent: "bg-teal-600",
            ring: "ring-teal-500",
            text: "text-teal-600 dark:text-teal-400",
            buttonBg: "bg-teal-600 hover:bg-teal-700",
            badgeBg: "bg-teal-100 dark:bg-teal-900/40",
            badgeText: "text-teal-700 dark:text-teal-300",
        },
        green: {
            gradient: "from-green-600 to-emerald-600",
            accent: "bg-green-600",
            ring: "ring-green-500",
            text: "text-green-600 dark:text-green-400",
            buttonBg: "bg-green-600 hover:bg-green-700",
            badgeBg: "bg-green-100 dark:bg-green-900/40",
            badgeText: "text-green-700 dark:text-green-300",
        },
        purple: {
            gradient: "from-purple-600 to-indigo-600",
            accent: "bg-purple-600",
            ring: "ring-purple-500",
            text: "text-purple-600 dark:text-purple-400",
            buttonBg: "bg-purple-600 hover:bg-purple-700",
            badgeBg: "bg-purple-100 dark:bg-purple-900/40",
            badgeText: "text-purple-700 dark:text-purple-300",
        },
        red: {
            gradient: "from-red-600 to-orange-600",
            accent: "bg-red-600",
            ring: "ring-red-500",
            text: "text-red-600 dark:text-red-400",
            buttonBg: "bg-red-600 hover:bg-red-700",
            badgeBg: "bg-red-100 dark:bg-red-900/40",
            badgeText: "text-red-700 dark:text-red-300",
        },
    };

    const theme = themeConfig[project?.color || "purple"];

    // Navigation for image gallery
    const goToNextImage = () => {
        setActiveImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevImage = () => {
        setActiveImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative flex flex-col h-full w-full bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-2xl">
            {/* Top color bar */}
            <div
                className={`h-1 w-full bg-gradient-to-r ${theme.gradient}`}
            ></div>

            {/* Close button */}
            <button
                className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors"
                onClick={onClose}
                aria-label="Close modal"
            >
                <X className="h-5 w-5" />
            </button>

            {/* Project content wrapper - making it scrollable for small screens */}
            <div className="flex flex-col h-full overflow-y-auto">
                {/* Project header with category badge - visible on all screens */}
                <div className="px-4 pt-6 pb-2 md:hidden">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                    </h2>
                </div>

                {/* Main content area - flexible layout for different screen sizes */}
                <div className="flex flex-col md:flex-row flex-grow">
                    {/* Left side - Project information */}
                    <div className="w-full md:w-1/2 p-4 md:p-6 md:overflow-y-auto order-2 md:order-1">
                        <div className="space-y-4 md:space-y-6">
                            {/* Project header - hidden on mobile, shown on larger screens */}
                            <div className="hidden md:block">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${theme.badgeBg} ${theme.badgeText} mb-2`}
                                >
                                    {project.category}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                                    {project.title}
                                </h2>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                    About
                                    <div
                                        className={`h-px flex-grow ${theme.accent} opacity-20 ml-2`}
                                    ></div>
                                </h3>
                                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                    Technologies
                                    <div
                                        className={`h-px flex-grow ${theme.accent} opacity-20 ml-2`}
                                    ></div>
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech
                                        .split(",")
                                        .map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`px-2 py-1 text-xs md:text-sm ${theme.badgeBg} ${theme.badgeText} rounded-full`}
                                            >
                                                {tech.trim()}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 text-sm bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                                >
                                    <Github className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                    GitHub Repo
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 text-sm text-white rounded-lg transition-colors ${theme.buttonBg}`}
                                    >
                                        <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image gallery */}
                    <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 flex flex-col order-1 md:order-2">
                        {/* Main image display with navigation controls */}
                        <div className="relative flex-grow flex items-center justify-center p-4 md:p-6">
                            <div className="relative w-full h-48 sm:h-64 md:h-full max-h-96 rounded-lg overflow-hidden group">
                                {/* Image */}
                                <img
                                    src={project.images[activeImageIndex]}
                                    alt={`${project.title} screenshot ${
                                        activeImageIndex + 1
                                    }`}
                                    className="w-full h-full object-contain bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                                />

                                {/* Image counter */}
                                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                    {activeImageIndex + 1} /{" "}
                                    {project.images.length}
                                </div>

                                {/* Navigation buttons (always visible on mobile, hover on desktop) */}
                                <button
                                    onClick={goToPrevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={goToNextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Thumbnails - more compact on mobile */}
                        <div className="px-4 pb-4 md:p-6 md:pt-0 hidden md:flex">
                            <div className="grid grid-cols-4 gap-1 md:gap-2">
                                {project.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setActiveImageIndex(index)
                                        }
                                        className={`relative border rounded-md overflow-hidden h-12 md:h-16 transition-all ${
                                            activeImageIndex === index
                                                ? `ring-2 ${theme.ring} ring-offset-1 dark:ring-offset-gray-800`
                                                : "opacity-70 hover:opacity-100 border-gray-200 dark:border-gray-700"
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
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
    );
}

export default ProjectDetail;
