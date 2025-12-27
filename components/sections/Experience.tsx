"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-muted/20">
            <div className="container px-6 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Experience
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

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold font-heading text-foreground">
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {exp.duration}
                                </span>
                            </div>

                            <div className="text-lg text-primary font-medium mb-4">
                                {exp.company}
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
