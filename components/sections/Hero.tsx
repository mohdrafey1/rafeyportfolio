"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50 z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay z-0 pointer-events-none" />

            <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                        Available for Freelance Projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground leading-tight"
                >
                    Hi, I'm <span className="text-primary">Mohd Rafey</span>.{" "}
                    <br />
                    I build scalable products, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                        not just websites.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    A Full Stack Software Engineer bridging the gap between bold
                    ideas and production-ready applications. Specializing in the
                    MERN stack and Next.js.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="group" asChild>
                        <Link href="#projects">
                            View Work
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#contact">
                            Contact Me
                            <Mail className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
