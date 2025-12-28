"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/mohdrafey1",
            label: "GitHub",
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/mohdrafey1",
            label: "LinkedIn",
        },
        { icon: Twitter, href: "https://x.com/MohdRafey72", label: "Twitter" },
        { icon: Mail, href: "mailto:mohdrafey600@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative bg-muted/30 border-t-2 border-border mt-20 overflow-hidden">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

            {/* Background gradient */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left: Branding */}
                    <div className="text-center md:text-left">
                        <motion.h2
                            className="text-xl font-bold font-heading mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            Rafey<span className="text-primary">.space</span>
                        </motion.h2>
                        <p className="text-sm text-muted-foreground">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    {/* Center: Social Links */}
                    <div className="flex items-center justify-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.div
                                key={social.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    aria-label={social.label}
                                    className=""
                                >
                                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                                        whileHover={{ scale: 1.2 }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
                            © {currentYear} Made with{" "}
                            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
                            by Rafey
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
