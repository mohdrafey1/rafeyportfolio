"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import Link from "next/link";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MessageCircle,
} from "lucide-react";

const iconMap: Record<string, any> = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
    Mail: Mail,
    Phone: Phone,
};

export function Contact() {
    return (
        <section
            id="contact"
            className="py-24 bg-background relative overflow-hidden"
        >
            {/* Background gradients */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container px-6 mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            <MessageCircle className="w-4 h-4" />
                            Let's Connect
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always
                        open to new opportunities and collaborations.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {socials.map((social, index) => {
                        const Icon = iconMap[social.icon] || Mail;
                        return (
                            <motion.div
                                key={social.platform}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Link
                                    href={social.url}
                                    className="flex items-center gap-4 p-6 rounded-2xl border-2 border-border bg-card hover:bg-muted hover:border-primary/50 transition-all duration-300 group h-full"
                                    target="_blank"
                                >
                                    <motion.div
                                        className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary transition-all duration-300"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <span className="block text-lg font-bold font-heading group-hover:text-primary transition-colors">
                                            {social.platform}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            Connect on {social.platform}
                                        </span>
                                    </div>
                                    <motion.div
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={{ x: -10 }}
                                        whileHover={{ x: 0 }}
                                    >
                                        <svg
                                            className="w-5 h-5 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
