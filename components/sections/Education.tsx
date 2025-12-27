"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

export function Education() {
    return (
        <section id="education" className="py-24 bg-muted/20">
            <div className="container px-6 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Education
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background p-8 rounded-xl border border-border flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-sm"
                        >
                            <div>
                                <h3 className="text-xl font-bold font-heading text-primary bg-primary/10 inline-block px-3 py-1 rounded-md mb-2">
                                    {edu.degree}
                                </h3>
                                <div className="text-lg font-medium text-foreground">
                                    {edu.institution}
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 text-muted-foreground font-medium">
                                {edu.year}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
