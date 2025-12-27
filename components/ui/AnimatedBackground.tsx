"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    x: mousePosition.x * 50,
                    y: mousePosition.y * 50,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    x: { type: "spring", stiffness: 50, damping: 20 },
                    y: { type: "spring", stiffness: 50, damping: 20 },
                    scale: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                    x: -mousePosition.x * 30,
                    y: -mousePosition.y * 30,
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    x: { type: "spring", stiffness: 50, damping: 20 },
                    y: { type: "spring", stiffness: 50, damping: 20 },
                    scale: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
                animate={{
                    x: mousePosition.x * -40,
                    y: mousePosition.y * -40,
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    x: { type: "spring", stiffness: 50, damping: 20 },
                    y: { type: "spring", stiffness: 50, damping: 20 },
                    scale: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                                    linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />
        </div>
    );
}
