"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, FileQuestion } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center px-4"
            >
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="inline-flex justify-center mb-8"
                >
                    <div className="relative">
                        <FileQuestion className="w-24 h-24 text-primary opacity-80" />
                        <motion.div
                            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                <h1 className="text-8xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Page Not Found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
                    The page you're looking for seems to have gone on a little
                    adventure. Don't worry, we can help you find your way back.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/">
                            <Home className="mr-2 w-4 h-4" />
                            Return Home
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/#contact">Contact Support</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
