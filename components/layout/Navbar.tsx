"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold font-heading tracking-tight"
                >
                    Rafey<span className="text-primary">.space</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors relative",
                                activeSection === link.href.substring(1)
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                            )}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Button variant="ghost" size="sm" asChild>
                        <Link
                            href="https://drive.google.com/file/d/1frVELJnoDmN6nY9p1CeqQFV0tMFoP8nr/view?usp=sharing"
                            target="_blank"
                            className="border border-primary"
                        >
                            Resume
                        </Link>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors",
                                        activeSection === link.href.substring(1)
                                            ? "text-primary"
                                            : "text-foreground hover:text-primary"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                                <div className="flex gap-3">
                                    <ThemeToggle className="flex-none" />
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-primary text-primary hover:bg-primary/10"
                                        asChild
                                    >
                                        <Link
                                            href="https://drive.google.com/file/d/1frVELJnoDmN6nY9p1CeqQFV0tMFoP8nr/view?usp=sharing"
                                            target="_blank"
                                        >
                                            Resume
                                        </Link>
                                    </Button>
                                </div>
                                <Button
                                    className="w-full"
                                    onClick={() => setIsOpen(false)}
                                    asChild
                                >
                                    <Link href="#contact">Hire Me</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
