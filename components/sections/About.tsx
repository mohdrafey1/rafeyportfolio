"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User, Target, Rocket } from "lucide-react";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min(
                (currentTime - startTime) / (duration * 1000),
                1,
            );

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function About() {
    return (
        <section
            id="about"
            className="py-24 bg-muted/20 relative overflow-hidden"
        >
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container px-6 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Text */}
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            <User className="w-4 h-4" />
                            Get To Know Me
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold font-heading mt-6 mb-6">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-base md:text-lg">
                            <p>
                                I'm a <strong className="text-foreground">Computer Science Engineering graduate</strong> and Full Stack Software Engineer who builds scalable,
                                production-ready products from scratch. I focus
                                on clean architecture, automation, performance,
                                and developer experience.
                            </p>
                            <p>
                                I've independently developed and scaled
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

                        <div className="mt-8 grid grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Target,
                                    value: 5,
                                    suffix: "M+",
                                    label: "Lines Code Written",
                                },
                                {
                                    icon: User,
                                    value: 25,
                                    suffix: "k+",
                                    label: "Users Served",
                                },
                                {
                                    icon: Rocket,
                                    value: 10,
                                    suffix: "+",
                                    label: "Projects Delivered",
                                },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        type: "spring",
                                    }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="text-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                                >
                                    <motion.div
                                        className="inline-flex p-2 rounded-lg bg-primary/10 text-primary mb-2"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <stat.icon className="w-5 h-5" />
                                    </motion.div>
                                    <div className="text-2xl md:text-3xl font-bold text-primary">
                                        <Counter end={stat.value} />
                                        {stat.suffix}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Main image container */}
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Gradient border */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 p-[3px] rounded-2xl">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/aboutpic.png"
                                            alt="Mohd Rafey"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating gradient blobs */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.5, 0.3, 0.5],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
