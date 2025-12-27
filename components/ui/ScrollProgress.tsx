"use client";

import { motion, useScroll as useScrollMotion, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScrollMotion();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-[100]"
                style={{ scaleX }}
            />
            {/* Glow effect at the leading edge */}
            <motion.div
                className="fixed top-0 h-1 w-20 bg-gradient-to-r from-transparent to-primary/50 blur-sm z-[99]"
                style={{
                    left: `${scrollYProgress.get() * 100}%`,
                    scaleX,
                }}
            />
        </>
    );
}
