"use client";

import { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll as useScrollMotion,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScrollMotion();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Calculate circle stroke dashoffset based on scroll progress
    const circumference = 2 * Math.PI * 20; // radius is 20

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    {/* Progress ring */}
                    <svg
                        className="absolute inset-0 -rotate-90"
                        width="48"
                        height="48"
                    >
                        {/* Background circle */}
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-primary-foreground/20"
                        />
                        {/* Progress circle */}
                        <motion.circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-primary-foreground"
                            strokeDasharray={circumference}
                            style={{
                                strokeDashoffset:
                                    circumference -
                                    scrollYProgress.get() * circumference,
                            }}
                        />
                    </svg>

                    {/* Icon */}
                    <ArrowUp className="relative z-10 h-5 w-5" />

                    {/* Ripple effect on click */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary-foreground"
                        initial={{ scale: 0, opacity: 0.5 }}
                        whileTap={{
                            scale: 2,
                            opacity: 0,
                            transition: { duration: 0.4 },
                        }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
