"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Projects() {
    return (
        <section
            id="projects"
            className="py-24 bg-card relative overflow-hidden"
        >
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container px-6 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            My Work
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of my recent work and personal projects
                        showcasing modern web technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects
                        .filter((p) => p.featured)
                        .map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* View All Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-primary/40 text-sm font-semibold text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    >
                        View All Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-purple-500/10 border border-primary/20 relative overflow-hidden"
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
                    
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                            Beyond the <span className="gradient-text">Highlights</span>
                        </h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            While these featured pieces showcase my core skills, my complete journey is much broader. I've delivered impactful solutions across various <span className="text-foreground font-semibold">internships</span>, built tailored web applications through <span className="text-foreground font-semibold">freelance</span> projects, and actively engaged in meaningful <span className="text-foreground font-semibold">collaborations</span>.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {['Internships', 'Freelancing', 'Collaborations', 'Client Projects'].map((tag) => (
                                <span key={tag} className="px-5 py-2 text-sm font-medium rounded-full bg-background border border-primary/20 text-foreground shadow-sm hover:border-primary/40 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
