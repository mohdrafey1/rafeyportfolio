"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const iconMap: Record<string, any> = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
    Mail: Mail,
    Phone: Phone,
};

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container px-6 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always
                        open to new opportunities.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {socials.map((social) => {
                        const Icon = iconMap[social.icon] || Mail;
                        return (
                            <Link
                                key={social.platform}
                                href={social.url}
                                className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-muted/30 hover:bg-muted hover:border-primary/50 transition-all group"
                                target="_blank"
                            >
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-background border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <span className="block text-lg font-bold font-heading group-hover:text-primary transition-colors">
                                        {social.platform}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        Connect on {social.platform}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
