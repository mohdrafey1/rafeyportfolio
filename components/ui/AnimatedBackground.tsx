"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const gridStyle = {
    backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                    linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
    backgroundSize: "50px 50px",
};

interface AnimatedBackgroundProps {
    isActive?: boolean;
}

export function AnimatedBackground({ isActive = true }: AnimatedBackgroundProps) {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const orb1X = useTransform(springX, [0, 1], [0, 50]);
    const orb1Y = useTransform(springY, [0, 1], [0, 50]);
    const orb2X = useTransform(springX, [0, 1], [0, -30]);
    const orb2Y = useTransform(springY, [0, 1], [0, -30]);
    const orb3X = useTransform(springX, [0, 1], [0, -40]);
    const orb3Y = useTransform(springY, [0, 1], [0, -40]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                style={{ x: orb1X, y: orb1Y }}
                animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={
                    isActive
                        ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.5 }
                }
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                style={{ x: orb2X, y: orb2Y }}
                animate={isActive ? { scale: [1.2, 1, 1.2] } : { scale: 1 }}
                transition={
                    isActive
                        ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.5 }
                }
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
                style={{ x: orb3X, y: orb3Y }}
                animate={isActive ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={
                    isActive
                        ? { duration: 12, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.5 }
                }
            />
            <div className="absolute inset-0 opacity-[0.02]" style={gridStyle} />
        </div>
    );
}
