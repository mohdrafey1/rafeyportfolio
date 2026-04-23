"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase } from "lucide-react";

const typeStyles: Record<string, string> = {
    Founder:
        "bg-purple-500/15 text-purple-400 border border-purple-500/30",
    Internship:
        "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    Freelance:
        "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    Client:
        "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    Remote:
        "bg-sky-500/15 text-sky-400 border border-sky-500/30",
};

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-muted/20 relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container px-6 mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            <Briefcase className="w-4 h-4" />
                            Career Journey
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Professional{" "}
                        <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        My professional journey and career highlights.
                    </p>
                </motion.div>

                <div className="relative border-l border-border ml-4 md:ml-0 space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <motion.div
                                whileHover={{ y: -4, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-card border-2 border-border hover:border-primary/40 rounded-xl p-6 shadow-sm hover:shadow-primary/10 transition-all duration-300"
                            >
                                {/* Top row: role + chips + duration */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-xl font-bold font-heading text-foreground">
                                            {exp.role}
                                        </h3>
                                        {exp.type && (
                                            <span
                                                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                                    typeStyles[exp.type] ??
                                                    "bg-muted text-muted-foreground border border-border"
                                                }`}
                                            >
                                                {exp.type}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit shrink-0">
                                        {exp.duration}
                                    </span>
                                </div>

                                <div className="text-base text-primary font-semibold mb-4">
                                    {exp.company}
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
