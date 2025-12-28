"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Globe,
    Layout,
    Code2,
} from "lucide-react";
import { Project } from "@/types";

interface ProjectPageClientProps {
    project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Decorative Background */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10" />

            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>
                    <div className="flex items-center gap-2">
                        {project.githubLink && (
                            <Button variant="ghost" size="sm" asChild>
                                <Link href={project.githubLink} target="_blank">
                                    <Github size={16} className="mr-2" />
                                    Code
                                </Link>
                            </Button>
                        )}
                        {project.liveLink && (
                            <Button size="sm" asChild>
                                <Link href={project.liveLink} target="_blank">
                                    <ExternalLink size={16} className="mr-2" />
                                    Live Demo
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </header>

            <div className="container max-w-4xl mx-auto px-6 pt-12">
                {/* Title & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                {/* Live Embed / Preview Window */}
                {project.liveLink && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative rounded-xl border border-border bg-muted/20 shadow-2xl overflow-hidden mb-16"
                    >
                        {/* Mock Browser Title Bar */}
                        <div className="h-9 bg-muted border-b border-border flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 flex-1 flex justify-center">
                                <div className="bg-background/50 rounded-md px-3 py-0.5 text-xs text-muted-foreground max-w-[200px] truncate text-center">
                                    {project.liveLink}
                                </div>
                            </div>
                        </div>

                        {/* Content Area - Iframe */}
                        <div className="w-full h-[500px] md:h-auto md:aspect-[16/10] relative bg-background">
                            <iframe
                                src={project.liveLink}
                                className="w-full h-full border-0"
                                title={`${project.title} Preview`}
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                            />
                        </div>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Column: Context & Tech */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Long Description */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-2">
                                <Globe className="text-primary" size={24} />
                                Overview
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    {project.longDescription ||
                                        project.description}
                                </p>
                            </div>
                        </motion.section>

                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                                    <Layout
                                        className="text-primary"
                                        size={24}
                                    />
                                    Key Features
                                </h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                                        >
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                            <span className="text-sm text-foreground/80">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}
                        {/* Story Behind the Project */}
                        {project.storybehindproject && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.35 }}
                            >
                                <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-2">
                                    <Code2 className="text-primary" size={24} />
                                    The Story Behind {project.title}
                                </h2>
                                <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                    <p>{project.storybehindproject}</p>
                                </div>
                            </motion.section>
                        )}
                    </div>

                    {/* Right Column: Tech Stack Sidebar */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-card rounded-xl border border-border p-6 sticky top-24"
                        >
                            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
                                <Code2 className="text-primary" size={20} />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
