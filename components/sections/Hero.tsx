"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Typewriter } from "@/components/ui/Typewriter";
import Image from "next/image";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Animated Background */}
            <AnimatedBackground isActive={isInView} />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50 z-0" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex mt-4 lg:mt-0 items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm mb-6">
                                <Sparkles className="w-4 h-4" />
                                Available for Freelance Projects
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground leading-tight mb-6"
                        >
                            Hi, I'm{" "}
                            <span className="relative inline-block">
                                <span className="gradient-text">
                                    Mohd Rafey
                                </span>
                                <motion.div
                                    className="absolute -inset-1 bg-linear-to-r from-primary to-purple-500 rounded-lg blur opacity-20"
                                    animate={
                                        isInView
                                            ? { opacity: [0.2, 0.4, 0.2] }
                                            : { opacity: 0.2 }
                                    }
                                    transition={
                                        isInView
                                            ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                            : {}
                                    }
                                />
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-6"
                        >
                            I build{" "}
                            <Typewriter
                                texts={[
                                    "scalable products.",
                                    "stunning interfaces.",
                                    "powerful backends.",
                                    "amazing experiences.",
                                ]}
                                className="gradient-text"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            A Full Stack Software Engineer bridging the gap
                            between bold ideas and production-ready
                            applications. Specializing in the MERN stack and
                            Next.js.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <Button
                                size="lg"
                                className="group relative overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all duration-300"
                                asChild
                            >
                                <Link href="#projects">
                                    <span className="relative z-10 flex items-center">
                                        View Work
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-r from-primary to-purple-500"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="group border-2 hover:border-primary transition-all duration-300"
                                asChild
                            >
                                <Link href="#contact">
                                    Contact Me
                                    <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: Animated Profile/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Rotating gradient ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                                    padding: "4px",
                                }}
                                animate={{ rotate: isInView ? 360 : 0 }}
                                transition={
                                    isInView
                                        ? { duration: 8, repeat: Infinity, ease: "linear" }
                                        : { duration: 0.5 }
                                }
                            >
                                <div className="w-full h-full rounded-full bg-background" />
                            </motion.div>

                            {/* Profile image */}
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background z-10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="/pic.jpg"
                                    alt="Mohd Rafey"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Floating particles */}
                            <motion.div
                                className="absolute top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                                animate={
                                    isInView
                                        ? { y: [0, -20, 0], x: [0, 10, 0] }
                                        : { y: 0, x: 0 }
                                }
                                transition={
                                    isInView
                                        ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                        : { duration: 0.3 }
                                }
                            />
                            <motion.div
                                className="absolute bottom-10 -left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                                animate={
                                    isInView
                                        ? { y: [0, 20, 0], x: [0, -10, 0] }
                                        : { y: 0, x: 0 }
                                }
                                transition={
                                    isInView
                                        ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                        : { duration: 0.3 }
                                }
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
