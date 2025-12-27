"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 bg-muted/20">
            <div className="container px-6 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            About Me
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                I’m a Full Stack Software Engineer and Computer
                                Science student who builds scalable,
                                production-ready products from scratch. I focus
                                on clean architecture, automation, performance,
                                and developer experience.
                            </p>
                            <p>
                                I’ve independently developed and scaled
                                platforms used by thousands of users, handling
                                everything from system design and backend
                                architecture to frontend performance and SEO.
                            </p>
                            <p>
                                I believe good products are built with{" "}
                                <strong className="text-foreground">
                                    clarity, strong logic, and attention to
                                    real-world problems
                                </strong>
                                —not just flashy UI.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-8">
                            <div>
                                <span className="block text-3xl font-bold text-primary">
                                    100k+
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Lines Code Written
                                </span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-primary">
                                    10k+
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Users Served
                                </span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-primary">
                                    5+
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Projects Delivered
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual/Image */}
                    <div className="relative flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 bg-muted">
                            <Image
                                src="/pic.jpg"
                                alt="Mohd Rafey"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
