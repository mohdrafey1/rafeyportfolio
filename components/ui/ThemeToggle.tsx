"use client";

import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        setMounted(true);
        // Get initial theme
        const savedTheme = localStorage.getItem("theme") as
            | "light"
            | "dark"
            | null;
        const isDark = document.documentElement.classList.contains("light")
            ? "light"
            : "dark";
        setTheme(savedTheme || isDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        // Add transition class
        document.documentElement.classList.add("theme-transitioning");

        // Toggle theme
        document.documentElement.classList.toggle(
            "light",
            newTheme === "light"
        );

        // Remove transition class after animation
        setTimeout(() => {
            document.documentElement.classList.remove("theme-transitioning");
        }, 300);
    };

    if (!mounted) {
        return (
            <div
                className={cn(
                    "relative p-2 rounded-lg w-[44px] h-[44px]",
                    "bg-secondary/50 border border-border",
                    className
                )}
            />
        );
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className={cn(
                "relative p-2 rounded-lg transition-all duration-300",
                "bg-secondary/50 hover:bg-secondary border border-border",
                "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20",
                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="h-5 w-5 text-primary" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="h-5 w-5 text-amber-500" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
