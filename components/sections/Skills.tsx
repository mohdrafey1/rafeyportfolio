"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export function Skills() {
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <section id="skills" className="py-24 bg-background">
            <div className="container px-6 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                        My technical toolkit for building high-performance
                        applications.
                    </p>
                    <p className="text-sm text-muted-foreground/80 max-w-3xl mx-auto border-t border-border/50 pt-6">
                        <span className="text-primary font-semibold">
                            Note:
                        </span>{" "}
                        These technologies represent my primary stack, but I am
                        not limited to them. As an engineer, I prioritize strong
                        fundamentals and problem-solving, allowing me to adapt
                        to any tool, language, or framework required for the
                        job.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors shadow-sm"
                        >
                            <h3 className="text-xl font-bold mb-6 text-foreground border-b border-border pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills
                                    .filter(
                                        (skill) => skill.category === category
                                    )
                                    .map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="px-3 py-1.5 text-sm font-medium rounded-md bg-secondary text-secondary-foreground border border-transparent hover:border-primary/30 hover:bg-secondary/80 transition-all cursor-default"
                                        >
                                            {skill.name}
                                        </div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
