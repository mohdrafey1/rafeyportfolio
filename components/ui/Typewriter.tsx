"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    texts: string[];
    className?: string;
}

export function Typewriter({ texts, className }: TypewriterProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                const fullText = texts[currentTextIndex];

                if (!isDeleting) {
                    // Typing
                    if (currentText.length < fullText.length) {
                        setCurrentText(
                            fullText.slice(0, currentText.length + 1)
                        );
                    } else {
                        // Pause before deleting
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    // Deleting
                    if (currentText.length > 0) {
                        setCurrentText(
                            fullText.slice(0, currentText.length - 1)
                        );
                    } else {
                        setIsDeleting(false);
                        setCurrentTextIndex(
                            (prev) => (prev + 1) % texts.length
                        );
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentTextIndex, texts]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
            />
        </span>
    );
}
