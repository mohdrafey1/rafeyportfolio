"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";

const categoryIcons: Record<string, any> = {
    Frontend: Code2,
    Backend: Server,
    Database: Database,
    "Tools & Others": Wrench,
};

export function Skills() {
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <section
            id="skills"
            className="py-24 bg-background relative overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container px-6 mx-auto max-w-6xl relative z-10">
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
                            <Sparkles className="w-4 h-4" />
                            Technical Expertise
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Skills &{" "}
                        <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                        My technical toolkit for building high-performance
                        applications.
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-sm text-muted-foreground/80 max-w-3xl mx-auto border-t border-border/50 pt-6"
                    >
                        <span className="text-primary font-semibold">
                            Note:
                        </span>{" "}
                        These technologies represent my primary stack, but I am
                        not limited to them. As an engineer, I prioritize strong
                        fundamentals and problem-solving, allowing me to adapt
                        to any tool, language, or framework required for the
                        job.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => {
                        const Icon = categoryIcons[category] || Code2;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20, rotateY: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                    rotateY: 5,
                                    transition: { duration: 0.2 },
                                }}
                                className="group bg-card p-6 rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border">
                                    <motion.div
                                        className="p-2 rounded-lg bg-primary/10 text-primary"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.div>
                                    <h3 className="text-lg font-bold text-foreground">
                                        {category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills
                                        .filter(
                                            (skill) =>
                                                skill.category === category,
                                        )
                                        .map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/80 text-secondary-foreground border border-transparent hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all cursor-default backdrop-blur-sm"
                                            >
                                                {skill.name}
                                            </div>
                                        ))}
                                </div>

                                {/* Gradient glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"
                                    style={{
                                        background:
                                            "radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%)",
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
