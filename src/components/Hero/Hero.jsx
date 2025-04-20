import React, { useEffect, useRef } from "react";
import { Github, Linkedin, ArrowDown, Code } from "lucide-react";
import pic from "../../assets/pic.jpg";

function Hero() {
    const techStackRef = useRef(null);

    // Animation for typing effect
    useEffect(() => {
        const animateText = () => {
            const textElement = document.querySelector(".typewriter");
            if (!textElement) return;

            const text = textElement.getAttribute("data-text");
            textElement.innerHTML = "";

            let i = 0;
            const typeChar = () => {
                if (i < text.length) {
                    textElement.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeChar, Math.random() * 100 + 50);
                }
            };

            typeChar();
        };

        // Initialize animations after a small delay
        setTimeout(animateText, 500);

        // Background particles effect setup
        const canvas = document.getElementById("particles-canvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = [];
            const particleCount = 100;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 3 + 1,
                    color: `rgba(${Math.random() * 100 + 155}, ${
                        Math.random() * 100 + 155
                    }, 255, ${Math.random() * 0.3 + 0.2})`,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25,
                });
            }

            const animate = () => {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle) => {
                    ctx.beginPath();
                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.radius,
                        0,
                        Math.PI * 2
                    );
                    ctx.fillStyle = particle.color;
                    ctx.fill();

                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x < 0 || particle.x > canvas.width)
                        particle.speedX *= -1;
                    if (particle.y < 0 || particle.y > canvas.height)
                        particle.speedY *= -1;
                });
            };

            animate();

            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const scrollToTechStack = () => {
        if (techStackRef.current) {
            techStackRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const techStacks = [
        {
            category: "Frontend",
            icons: [
                { src: "https://skillicons.dev/icons?i=react", alt: "React" },
                { src: "https://skillicons.dev/icons?i=next", alt: "Next.js" },
                { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
                { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript" },
                {
                    src: "https://skillicons.dev/icons?i=tailwind",
                    alt: "Tailwind CSS",
                },
                {
                    src: "https://skillicons.dev/icons?i=bootstrap",
                    alt: "Bootstrap",
                },
            ],
        },
        {
            category: "Backend",
            icons: [
                {
                    src: "https://skillicons.dev/icons?i=nodejs",
                    alt: "Node.js",
                },
                {
                    src: "https://skillicons.dev/icons?i=express",
                    alt: "Express",
                },
                {
                    src: "https://skillicons.dev/icons?i=mongodb",
                    alt: "MongoDB",
                },
                {
                    src: "https://skillicons.dev/icons?i=postgresql",
                    alt: "PostgreSQL",
                },
            ],
        },
        {
            category: "Tools",
            icons: [
                { src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
                { src: "https://skillicons.dev/icons?i=vercel", alt: "Vercel" },
                { src: "https://skillicons.dev/icons?i=redux", alt: "Redux" },
                {
                    src: "https://skillicons.dev/icons?i=postman",
                    alt: "Postman",
                },
                { src: "https://skillicons.dev/icons?i=aws", alt: "aws" },
                { src: "https://skillicons.dev/icons?i=docker", alt: "docker" },
            ],
        },
    ];

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            id="home"
        >
            {/* Background elements */}
            <canvas id="particles-canvas" className="absolute inset-0 z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-pink-900/10 dark:from-indigo-900/20 dark:to-pink-900/20 z-0" />

            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-600/10 dark:bg-pink-600/20 rounded-full filter blur-3xl" />
            <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full filter blur-3xl" />

            {/* Content container */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10 pt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - Hero text */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h2 className=" inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:to-pink-500/20 rounded-lg text-indigo-600 dark:text-indigo-400 font-medium text-sm md:text-base">
                                <span className="mr-2">👋</span> Welcome to my
                                portfolio
                            </h2>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Hi, I'm{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600 dark:from-pink-500 dark:to-indigo-500">
                                    Mohd Rafey
                                </span>
                            </h1>

                            <div className="h-8 md:h-12">
                                <p
                                    className="typewriter text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium"
                                    data-text="A Computer Science Engineering Student"
                                ></p>
                            </div>

                            <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
                                Focused on Web Development and Software
                                Engineering, building innovative solutions with
                                modern technologies.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-pink-600 to-indigo-600 dark:from-pink-500 dark:to-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-500 dark:to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative">Let's Connect</span>
                            </a>

                            <a
                                href="#experience"
                                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-transparent rounded-lg transition-all duration-300"
                            >
                                <span className="absolute inset-0 w-0 bg-gray-100 dark:bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                                <span className="relative">
                                    View Experience
                                </span>
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-6 justify-center lg:justify-start">
                            <a
                                href="https://github.com/mohdrafey1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:scale-110 transition-transform duration-300 group"
                                aria-label="GitHub Profile"
                            >
                                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohd-rafey/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:scale-110 transition-transform duration-300 group"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Right column - Floating image */}
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-indigo-600/30 dark:from-pink-500/20 dark:to-indigo-500/20 opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-500" />

                        <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-1 shadow-xl transform hover:rotate-2 transition-transform duration-500">
                            <div className="w-full h-full bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden relative">
                                <img
                                    src={pic}
                                    alt="Mohd Rafey"
                                    className="w-full h-full object-cover "
                                />

                                {/* Code decoration */}
                                <div className="absolute top-4 left-4 p-2 bg-black/50 backdrop-blur-sm rounded-md text-xs text-white font-mono">
                                    <span className="text-pink-400">const</span>{" "}
                                    <span className="text-indigo-300">
                                        developer
                                    </span>{" "}
                                    = {"{"}
                                    <br />
                                    <span className="pl-4 text-pink-400">
                                        name
                                    </span>
                                    :{" "}
                                    <span className="text-green-300">
                                        'Mohd Rafey'
                                    </span>
                                    ,
                                    <br />
                                    <span className="pl-4 text-pink-400">
                                        passion
                                    </span>
                                    :{" "}
                                    <span className="text-green-300">
                                        'Web Development'
                                    </span>
                                    <br />
                                    {"}"};
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-12 mb-6">
                    <button
                        onClick={scrollToTechStack}
                        className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 transition-all duration-300"
                        aria-label="Scroll to tech stack"
                    >
                        <ArrowDown className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div
                ref={techStackRef}
                className="container mx-auto px-6 md:px-12 pb-24 mt-12 z-10"
            >
                <div className="space-y-10">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:to-pink-500/20 rounded-lg">
                            <Code className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                            <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                                Tech Stack
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Technologies I work with
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {techStacks.map((stack, index) => (
                            <div
                                key={index}
                                className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
                            >
                                <div className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                    {stack.category}
                                </h4>

                                <div className="flex flex-wrap gap-4">
                                    {stack.icons.map((icon, idx) => (
                                        <div
                                            key={idx}
                                            className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg hover:scale-110 transition-transform duration-300"
                                            title={icon.alt}
                                        >
                                            <img
                                                src={icon.src}
                                                alt={icon.alt}
                                                className="w-8 h-8"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
