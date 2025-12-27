"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
    return (
        <section
            id="education"
            className="py-24 bg-background relative overflow-hidden"
        >
            {/* Background effects */}
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
                            <GraduationCap className="w-4 h-4" />
                            Academic Journey
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Building a strong foundation through continuous learning
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-transparent" />

                    <div className="space-y-12">
                        {education.map((edu, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={edu.id}
                                    initial={{
                                        opacity: 0,
                                        x: isEven ? -50 : 50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    className={`relative flex items-center ${
                                        isEven
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <motion.div
                                        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                                        initial={{ scale: 0, rotate: 0 }}
                                        whileInView={{ scale: 1, rotate: 360 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.2 + 0.3,
                                            type: "spring",
                                        }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 p-[2px] shadow-lg shadow-primary/30">
                                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                                <GraduationCap className="w-7 h-7 text-primary" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Content card */}
                                    <motion.div
                                        className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                                            isEven ? "md:mr-16" : "md:ml-16"
                                        }`}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            rotateY: isEven ? 2 : -2,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                        style={{
                                            transformStyle: "preserve-3d",
                                        }}
                                    >
                                        <div className="relative group bg-card p-6 rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                                            {/* Gradient overlay on hover */}
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="relative z-10">
                                                {/* Degree badge */}
                                                <div className="inline-block mb-3">
                                                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                                        {edu.degree}
                                                    </span>
                                                </div>

                                                {/* Institution */}
                                                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                                                    {edu.institution}
                                                </h3>

                                                {/* Year */}
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Calendar className="w-4 h-4 text-primary" />
                                                    <span className="font-medium">
                                                        {edu.year}
                                                    </span>
                                                </div>

                                                {/* Location if available */}
                                                {edu.location && (
                                                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                                                        <MapPin className="w-4 h-4 text-primary" />
                                                        <span className="text-sm">
                                                            {edu.location}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Decorative corner accent */}
                                                <motion.div
                                                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, rgba(37, 99, 235, 0.1), transparent)",
                                                    }}
                                                />
                                            </div>

                                            {/* Animated border effect */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{
                                                    background:
                                                        "linear-gradient(45deg, rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))",
                                                    WebkitMaskImage:
                                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",
                                                    padding: "2px",
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
