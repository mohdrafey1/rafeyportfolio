"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        slug: string;
        image?: string;
        liveLink?: string;
        githubLink?: string;
        techStack: string[];
        projectType: "Client" | "Personal";
    };
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["7.5deg", "-7.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-7.5deg", "7.5deg"]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovering(false);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative rounded-xl overflow-hidden border-2 border-border bg-card hover:border-primary/50 transition-all duration-300"
        >
            {/* Spotlight effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${
                        x.get() * 100 + 50
                    }% ${
                        y.get() * 100 + 50
                    }%, rgba(59, 130, 246, 0.1), transparent 40%)`,
                }}
            />

            {/* Image Section */}
            <div className="relative h-64 w-full bg-muted overflow-hidden">
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className={`px-3 py-1 text-xs font-bold rounded-full border shadow-lg backdrop-blur-md ${
                            project.projectType === "Client"
                                ? "bg-amber-500/20 text-amber-500 border-amber-500/30"
                                : "bg-primary/20 text-primary border-primary/30"
                        }`}
                    >
                        {project.projectType} Project
                    </motion.span>
                </div>

                {project.image ? (
                    <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-muted to-muted/50 text-muted-foreground">
                        <span className="text-6xl font-bold opacity-10">
                            {project.title[0]}
                        </span>
                    </div>
                )}

                {/* Hover Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col items-center justify-center gap-3"
                >
                    <Button size="default" className="shadow-lg" asChild>
                        <Link href={`/projects/${project.slug}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                        </Link>
                    </Button>

                    <div className="flex gap-2">
                        {project.liveLink && (
                            <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-black backdrop-blur-sm"
                                asChild
                            >
                                <Link href={project.liveLink} target="_blank">
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                        {project.githubLink && (
                            <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-black backdrop-blur-sm"
                                asChild
                            >
                                <Link href={project.githubLink} target="_blank">
                                    <Github className="h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-6" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Gradient border glow on hover */}
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                    opacity: isHovering ? 1 : 0,
                }}
                style={{
                    background:
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5))",
                    WebkitMaskImage:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                }}
            />
        </motion.div>
    );
}
