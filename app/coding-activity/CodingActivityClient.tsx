"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    BarChart2,
    Clock,
    Code2,
    Layers,
    ExternalLink,
} from "lucide-react";

const WAKATIME_USER = "9bbad6d5-9979-4cd2-9e6b-eb9ac680cfa2";

const charts = [
    {
        id: "activity-bar",
        icon: BarChart2,
        title: "Coding Activity",
        subtitle: "Daily coding hours over the last year",
        src: `https://wakatime.com/share/@${WAKATIME_USER}/6acc4a31-4715-45cf-8274-086713ab047b.svg`,
        span: "col-span-1 lg:col-span-2",
    },

    {
        id: "languages",
        icon: Code2,
        title: "Languages",
        subtitle: "Time split across programming languages",
        src: `https://wakatime.com/share/@${WAKATIME_USER}/302bb308-8ebd-4fbb-920a-4eefacb96f24.svg`,
        span: "col-span-1",
    },
    {
        id: "categories",
        icon: Layers,
        title: "Categories",
        subtitle: "Coding vs browsing vs other activity",
        src: `https://wakatime.com/share/@${WAKATIME_USER}/52604a6b-7355-45e1-bed8-d960b83254a7.svg`,
        span: "col-span-1",
    },
];

export default function CodingActivityClient() {
    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Background */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10" />
            <div className="fixed top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="fixed bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Sticky header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/#skills"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <a
                        href={`https://wakatime.com/@mohdrafey1`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
                    >
                        View on WakaTime
                        <ExternalLink size={13} />
                    </a>
                </div>
            </header>

            <div className="container max-w-7xl mx-auto px-6 pt-16">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
                        <BarChart2 className="w-4 h-4" />
                        WakaTime Stats
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight">
                        My Coding{" "}
                        <span className="gradient-text">Activity</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Real-time insights into how I spend my coding hours —
                        tracked automatically across every project and editor.
                    </p>
                </motion.div>

                {/* Charts grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {charts.map((chart, i) => {
                        const Icon = chart.icon;
                        return (
                            <motion.div
                                key={chart.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`${chart.span} group bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-6 shadow-sm hover:shadow-primary/10 transition-all duration-300`}
                            >
                                {/* Card header */}
                                <div className="flex items-start gap-3 mb-5">
                                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                                            {chart.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mt-0.5">
                                            {chart.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* SVG Embed */}
                                <div className="w-full overflow-hidden rounded-xl bg-background/50 border border-border/50 p-2">
                                    <figure className="m-0">
                                        <embed
                                            src={chart.src}
                                            className="w-full h-auto block"
                                            style={{ minHeight: "220px" }}
                                        />
                                    </figure>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-center mt-16 text-sm text-muted-foreground"
                >
                    Stats are pulled live from{" "}
                    <a
                        href="https://wakatime.com/@mohdrafey1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        wakatime.com/@mohdrafey1
                    </a>{" "}
                    and update automatically.
                </motion.div>
            </div>
        </main>
    );
}
