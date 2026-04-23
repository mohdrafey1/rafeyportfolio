"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Project } from "@/types";

const FILTERS = ["All", "Personal", "Client"] as const;
type FilterType = (typeof FILTERS)[number];

interface AllProjectsClientProps {
    projects: Project[];
}

export default function AllProjectsClient({
    projects,
}: AllProjectsClientProps) {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");

    const filtered = useMemo(() => {
        return projects.filter((p) => {
            const matchesFilter =
                activeFilter === "All" || p.projectType === activeFilter;
            const matchesSearch =
                search.trim() === "" ||
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase()) ||
                p.techStack.some((t) =>
                    t.toLowerCase().includes(search.toLowerCase())
                );
            return matchesFilter && matchesSearch;
        });
    }, [projects, search, activeFilter]);

    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Fixed radial gradient background */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10" />
            <div className="fixed top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="fixed bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Sticky top bar */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <span className="text-sm font-semibold text-foreground">
                        Rafey<span className="text-primary">.space</span>
                    </span>
                </div>
            </header>

            <div className="container max-w-7xl mx-auto px-6 pt-16">
                {/* Hero text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
                        <Filter className="w-4 h-4" />
                        All Projects
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight">
                        Every Project I've{" "}
                        <span className="gradient-text">Built</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From solo ventures and open-source games to client
                        platforms and freelance work — here's everything.
                    </p>
                </motion.div>

                {/* Search + Filter row */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10"
                >
                    {/* Search */}
                    <div className="relative w-full sm:max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            id="projects-search"
                            type="text"
                            placeholder="Search by name, tech, or keyword…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>

                    {/* Filter pills */}
                    <div className="flex items-center gap-2">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                id={`filter-${f.toLowerCase()}`}
                                onClick={() => setActiveFilter(f)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                                    activeFilter === f
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                        : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                                }`}
                            >
                                {f}
                                <span className="ml-1.5 text-xs opacity-70">
                                    (
                                    {f === "All"
                                        ? projects.length
                                        : projects.filter(
                                              (p) => p.projectType === f
                                          ).length}
                                    )
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Results count */}
                <motion.p
                    key={filtered.length}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-muted-foreground mb-6"
                >
                    Showing{" "}
                    <span className="text-foreground font-semibold">
                        {filtered.length}
                    </span>{" "}
                    of {projects.length} projects
                </motion.p>

                {/* Grid */}
                <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                        >
                            {filtered.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.25, delay: index * 0.04 }}
                                >
                                    <ProjectCard
                                        project={project}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24 text-muted-foreground"
                        >
                            <p className="text-5xl mb-4">🔍</p>
                            <p className="text-lg font-medium">
                                No projects match your search.
                            </p>
                            <p className="text-sm mt-1">
                                Try a different keyword or clear the filter.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
