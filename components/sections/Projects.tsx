"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container px-6 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of my recent work and personal projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-xl overflow-hidden border border-border bg-muted/20"
                        >
                            {/* Image Placeholder or Actual Image */}
                            <div className="relative h-64 w-full bg-muted overflow-hidden">
                                {/* Project Type Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span
                                        className={`px-3 py-1 text-xs font-bold rounded-full border shadow-sm backdrop-blur-md ${
                                            project.projectType === "Client"
                                                ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                                : "bg-primary/10 text-primary border-primary/20"
                                        }`}
                                    >
                                        {project.projectType} Project
                                    </span>
                                </div>

                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-800 to-gray-900 text-muted-foreground">
                                        <span className="text-4xl font-bold opacity-20">
                                            {project.title[0]}
                                        </span>
                                    </div>
                                )}

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                                    <Button size="default" asChild>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                        >
                                            View Details
                                        </Link>
                                    </Button>

                                    <div className="flex gap-2">
                                        {project.liveLink && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
                                                asChild
                                            >
                                                <Link
                                                    href={project.liveLink}
                                                    target="_blank"
                                                >
                                                    <ExternalLink size={16} />
                                                </Link>
                                            </Button>
                                        )}
                                        {project.githubLink && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
                                                asChild
                                            >
                                                <Link
                                                    href={project.githubLink}
                                                    target="_blank"
                                                >
                                                    <Github size={16} />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
