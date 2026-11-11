"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    BarChart2,
    Bot,
    CalendarDays,
    Clock,
    Code2,
    ExternalLink,
    Flame,
    Layers,
    Monitor,
    Sun,
    Trophy,
} from "lucide-react";

// Live stats from Waqt, my own open-source coding time tracker.
// Only public data is used (no project or machine names).
const WAQT_URL = (process.env.NEXT_PUBLIC_WAQT_URL || "https://waqt.rafey.space").replace(/\/+$/, "");

type Item = { name: string; total_seconds: number; percent: number };
type Day = { date: string; total_seconds: number };
type Stats = {
    range: string;
    human_readable_range: string;
    start: string;
    end: string;
    total_seconds: number;
    daily_average: number;
    days_minus_holidays: number;
    best_day: { date: string; total_seconds: number } | null;
    languages: Item[];
    editors: Item[];
    categories: Item[];
    operating_systems: Item[];
    days: Day[];
    hours: number[];
    dayparts: { persona: string | null; parts: { name: string; total_seconds: number }[] };
    best_weekday: string | null;
    streak: { current: number; longest: number } | null;
    ai: {
        seconds: number;
        percent_of_time: number;
        ai_lines: number;
        human_lines: number;
        ai_percent_of_lines: number;
        sessions: number;
        prompts: number;
        input_tokens: number;
        output_tokens: number;
        models: { name: string; total_seconds: number }[];
    };
};

const RANGES = [
    { id: "last_7_days", label: "7 days" },
    { id: "last_30_days", label: "30 days" },
    { id: "last_year", label: "Year" },
    { id: "all_time", label: "All time" },
];

const LANGUAGE_COLORS: Record<string, string> = {
    typescript: "#3178c6", tsx: "#7aa2f7", javascript: "#f1e05a", jsx: "#e7c547", python: "#3572A5",
    java: "#b07219", kotlin: "#A97BFF", go: "#00ADD8", rust: "#dea584", "c++": "#f34b7d", c: "#555555",
    "c#": "#178600", php: "#4F5D95", ruby: "#701516", swift: "#F05138", dart: "#00B4AB", html: "#e34c26",
    css: "#663399", scss: "#c6538c", json: "#cbcb41", markdown: "#083fa1", yaml: "#cb171e", sql: "#e38c00",
    bash: "#89e051", shell: "#89e051", vue: "#41b883", svelte: "#ff3e00", prisma: "#0c344b",
};
const PALETTE = ["#2563eb", "#8b5cf6", "#ec4899", "#06b6d4", "#f59e0b", "#10b981", "#ef4444", "#84cc16"];

function colorFor(dim: string, name: string, i: number) {
    if (dim === "languages" && LANGUAGE_COLORS[name.toLowerCase()]) return LANGUAGE_COLORS[name.toLowerCase()];
    return PALETTE[i % PALETTE.length];
}

function fmt(sec: number) {
    const t = Math.max(0, Math.round(sec || 0));
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    if (h > 0) return `${h} hr${h === 1 ? "" : "s"}${m ? ` ${m} min${m === 1 ? "" : "s"}` : ""}`;
    return `${m} min${m === 1 ? "" : "s"}`;
}
function short(sec: number) {
    const t = Math.round((sec || 0) / 60);
    const h = Math.floor(t / 60);
    const m = t % 60;
    return h ? (m ? `${h}h ${m}m` : `${h}h`) : `${m}m`;
}
const compact = (n: number) => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(n || 0);
const addDays = (day: string, n: number) => {
    const [y, m, d] = day.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
};
const pretty = (day: string, opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" }) =>
    new Date(day + "T00:00:00Z").toLocaleDateString("en-US", { ...opts, timeZone: "UTC" });

async function getStats(range: string): Promise<Stats> {
    const res = await fetch(`${WAQT_URL}/api/v1/users/rafey/stats/${range}`);
    if (!res.ok) throw new Error(`Waqt answered ${res.status}`);
    return (await res.json()).data as Stats;
}

/* ---------- small building blocks ---------- */

function Card({ icon: Icon, title, subtitle, children, className = "", delay = 0 }: {
    icon: React.ElementType;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`group bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-6 shadow-sm hover:shadow-primary/10 transition-all duration-300 ${className}`}
        >
            <div className="flex items-start gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                    <h2 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors">{title}</h2>
                    {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
                </div>
            </div>
            {children}
        </motion.div>
    );
}

function Tile({ icon: Icon, label, value, note, delay }: { icon: React.ElementType; label: string; value: string; note?: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            className="bg-card border-2 border-border rounded-2xl p-5"
        >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                {label}
            </div>
            <div className="text-2xl md:text-3xl font-bold font-heading mt-2 tracking-tight">{value}</div>
            {note && <div className="text-xs text-muted-foreground mt-1">{note}</div>}
        </motion.div>
    );
}

function Bars({ items, dim, limit = 6 }: { items: Item[]; dim: string; limit?: number }) {
    const list = items.filter((i) => i.total_seconds >= 60).slice(0, limit);
    if (!list.length) return <p className="text-sm text-muted-foreground py-6 text-center">No activity in this range</p>;
    const total = list.reduce((a, i) => a + i.total_seconds, 0) || 1;
    return (
        <div className="space-y-3.5">
            {list.map((it, i) => {
                const pct = (it.total_seconds / total) * 100;
                const color = colorFor(dim, it.name, i);
                return (
                    <div key={it.name}>
                        <div className="flex justify-between gap-3 text-sm">
                            <span className="flex items-center gap-2 min-w-0">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
                                <span className="truncate">{it.name}</span>
                            </span>
                            <span className="text-muted-foreground tabular-nums whitespace-nowrap">
                                {short(it.total_seconds)} · {Math.round(pct)}%
                            </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted mt-1.5 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.max(pct, 1.5)}%` }}
                                transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
                                className="h-full rounded-full"
                                style={{ background: color }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function Heatmap({ days, end }: { days: Day[]; end: string }) {
    const { cells, months } = useMemo(() => {
        const byDay = new Map(days.map((d) => [d.date, d.total_seconds]));
        const max = Math.max(1, ...days.map((d) => d.total_seconds));
        const wd = new Date(end + "T00:00:00Z").getUTCDay();
        const start = addDays(end, -(52 * 7 + wd));
        const cells: { day: string; level: number; secs: number; future: boolean }[] = [];
        const months: { week: number; label: string }[] = [];
        let lastMonth = "";
        for (let w = 0; w < 53; w++) {
            for (let d = 0; d < 7; d++) {
                const day = addDays(start, w * 7 + d);
                const secs = byDay.get(day) || 0;
                const f = secs / max;
                cells.push({ day, secs, future: day > end, level: secs <= 0 ? 0 : f < 0.25 ? 1 : f < 0.5 ? 2 : f < 0.75 ? 3 : 4 });
                if (d === 0 && day.slice(5, 7) !== lastMonth && w < 52) {
                    if (lastMonth || Number(day.slice(8)) <= 7) months.push({ week: w, label: pretty(day, { month: "short" }) });
                    lastMonth = day.slice(5, 7);
                }
            }
        }
        return { cells, months };
    }, [days, end]);
    const levels = ["bg-muted", "bg-primary/30", "bg-primary/55", "bg-primary/80", "bg-primary"];
    return (
        <div className="overflow-x-auto pb-1">
            <div className="w-max mx-auto">
                <div className="relative h-5 text-[11px] text-muted-foreground" style={{ width: 53 * 15 }}>
                    {months.map((m) => (
                        <span key={m.week} className="absolute" style={{ left: m.week * 15 }}>{m.label}</span>
                    ))}
                </div>
                <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
                    {cells.map((c) => (
                        <div
                            key={c.day}
                            title={c.future ? "" : `${pretty(c.day, { weekday: "short", month: "short", day: "numeric", year: "numeric" })} · ${fmt(c.secs)}`}
                            className={`w-3 h-3 rounded-[3px] ${c.future ? "invisible" : levels[c.level]}`}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-end gap-1 text-[11px] text-muted-foreground mt-3">
                    Less {levels.map((l) => <span key={l} className={`w-3 h-3 rounded-[3px] ${l}`} />)} More
                </div>
            </div>
        </div>
    );
}

function DailyBars({ days, start, end }: { days: Day[]; start: string; end: string }) {
    const buckets = useMemo(() => {
        const byDay = new Map(days.map((d) => [d.date, d.total_seconds]));
        const all: Day[] = [];
        for (let d = start; d <= end; d = addDays(d, 1)) all.push({ date: d, total_seconds: byDay.get(d) || 0 });
        if (all.length <= 92) return all.map((d) => ({ ...d, label: pretty(d.date, { weekday: "short", month: "short", day: "numeric" }) }));
        // Long ranges: one bar per month
        const m = new Map<string, number>();
        for (const d of all) m.set(d.date.slice(0, 7), (m.get(d.date.slice(0, 7)) || 0) + d.total_seconds);
        return [...m].map(([k, v]) => ({ date: k, total_seconds: v, label: pretty(k + "-01", { month: "short", year: "numeric" }) }));
    }, [days, start, end]);
    const max = Math.max(1, ...buckets.map((b) => b.total_seconds));
    return (
        <div>
            <div className="flex items-end gap-[3px] h-40">
                {buckets.map((b, i) => (
                    <div key={b.date} className="flex-1 h-full flex items-end" title={`${b.label} · ${fmt(b.total_seconds)}`}>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(b.total_seconds / max) * 100}%` }}
                            transition={{ duration: 0.6, delay: Math.min(i * 0.01, 0.4) }}
                            className="w-full rounded-t-[4px] bg-gradient-to-t from-primary to-[var(--gradient-to)] opacity-90 hover:opacity-100"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
                <span>{buckets[0]?.label}</span>
                <span>{buckets[buckets.length - 1]?.label}</span>
            </div>
        </div>
    );
}

function HourBars({ hours }: { hours: number[] }) {
    const max = Math.max(1, ...hours);
    const label = (h: number) => (h === 0 ? "12 am" : h < 12 ? `${h} am` : h === 12 ? "12 pm" : `${h - 12} pm`);
    return (
        <div>
            <div className="flex items-end gap-[3px] h-28">
                {hours.map((s, h) => (
                    <div key={h} className="flex-1 h-full flex items-end" title={`${label(h)} · ${fmt(s)}`}>
                        <div className={`w-full rounded-t-[3px] ${h < 6 || h >= 18 ? "bg-[var(--gradient-to)]" : "bg-primary"}`} style={{ height: `${(s / max) * 100}%` }} />
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
                <span>12 am</span><span>6 am</span><span>12 pm</span><span>6 pm</span><span>11 pm</span>
            </div>
        </div>
    );
}

function Skeleton({ className = "" }: { className?: string }) {
    return <div className={`animate-pulse rounded-2xl bg-card border-2 border-border ${className}`} />;
}

/* ---------- page ---------- */

export default function CodingActivityClient() {
    const [range, setRange] = useState("last_30_days");
    // Stats are stored with the range they belong to, so switching ranges shows the skeleton.
    const [loaded, setLoaded] = useState<{ range: string; stats: Stats } | null>(null);
    const [year, setYear] = useState<Stats | null>(null);
    const [error, setError] = useState(false);
    const stats = loaded?.range === range ? loaded.stats : null;

    useEffect(() => {
        getStats("last_year").then(setYear).catch(() => setError(true));
    }, []);

    useEffect(() => {
        let cancelled = false;
        getStats(range)
            .then((s) => !cancelled && setLoaded({ range, stats: s }))
            .catch(() => !cancelled && setError(true));
        return () => {
            cancelled = true;
        };
    }, [range]);

    const streak = year?.streak;
    const ai = stats?.ai;
    const lines = ai ? ai.ai_lines + ai.human_lines : 0;

    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Background */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10" />
            <div className="fixed top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="fixed bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Sticky header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/#skills" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <a
                        href={`${WAQT_URL}/profile/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
                    >
                        Open on Waqt
                        <ExternalLink size={13} />
                    </a>
                </div>
            </header>

            <div className="container max-w-7xl mx-auto px-6 pt-16">
                {/* Hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        Live from Waqt
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight">
                        My Coding <span className="gradient-text">Activity</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        How I spend my coding hours, tracked automatically across every editor by{" "}
                        <Link href="/projects/waqt" className="text-primary hover:underline">Waqt</Link>, the free, open-source time tracker I built.
                    </p>
                </motion.div>

                {/* Range switcher */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex p-1 rounded-xl bg-card border-2 border-border">
                        {RANGES.map((r) => (
                            <button
                                key={r.id}
                                onClick={() => setRange(r.id)}
                                className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${range === r.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                {r.label}
                            </button>
                        ))}
                    </div>
                </div>

                {error && !stats && (
                    <div className="text-center bg-card border-2 border-border rounded-2xl p-10 text-muted-foreground">
                        Couldn&apos;t load the stats right now. See them on{" "}
                        <a href={`${WAQT_URL}/profile/`} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            {WAQT_URL.replace(/^https?:\/\//, "")}
                        </a>
                        .
                    </div>
                )}

                {/* Tiles */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats ? (
                        <>
                            <Tile icon={Clock} label="Total time" value={fmt(stats.total_seconds)} note={stats.human_readable_range} delay={0} />
                            <Tile icon={CalendarDays} label="Daily average" value={fmt(stats.daily_average)} note={`${stats.days_minus_holidays} active day${stats.days_minus_holidays === 1 ? "" : "s"}`} delay={0.05} />
                            <Tile icon={Trophy} label="Best day" value={stats.best_day ? fmt(stats.best_day.total_seconds) : "—"} note={stats.best_day ? pretty(stats.best_day.date, { weekday: "short", month: "short", day: "numeric" }) : ""} delay={0.1} />
                            <Tile icon={Flame} label="Streak" value={streak ? `${streak.current} day${streak.current === 1 ? "" : "s"}` : "—"} note={streak ? `Longest: ${streak.longest} day${streak.longest === 1 ? "" : "s"}` : ""} delay={0.15} />
                        </>
                    ) : (
                        !error && [0, 1, 2, 3].map((i) => <Skeleton key={i} className="h-[118px]" />)
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Heatmap */}
                    {year ? (
                        <Card icon={BarChart2} title="Last 12 months" subtitle={`${fmt(year.total_seconds)} across ${year.days_minus_holidays} active days`} className="lg:col-span-2">
                            <Heatmap days={year.days} end={year.end} />
                        </Card>
                    ) : (
                        !error && <Skeleton className="h-[230px] lg:col-span-2" />
                    )}

                    {stats ? (
                        <>
                            {stats.start !== stats.end && (
                                <Card icon={CalendarDays} title="Daily coding time" subtitle={`${pretty(stats.start)} – ${pretty(stats.end)}`} className="lg:col-span-2" delay={0.05}>
                                    <DailyBars days={stats.days} start={stats.start} end={stats.end} />
                                </Card>
                            )}
                            <Card icon={Code2} title="Languages" subtitle="Time split across programming languages" delay={0.1}>
                                <Bars items={stats.languages} dim="languages" />
                            </Card>
                            <Card icon={Monitor} title="Editors & tools" subtitle="Where the time was spent" delay={0.15}>
                                <Bars items={stats.editors} dim="editors" />
                            </Card>
                            <Card icon={Sun} title="Time of day" subtitle={stats.dayparts.persona ? `I'm a ${stats.dayparts.persona}${stats.best_weekday ? ` · most productive on ${stats.best_weekday}` : ""}` : "When I code"} delay={0.2}>
                                <HourBars hours={stats.hours} />
                            </Card>
                            <Card icon={Bot} title="AI coding" subtitle={ai && ai.seconds ? `${fmt(ai.seconds)} with AI agents · ${ai.percent_of_time}% of coding time` : "Coding with AI agents"} delay={0.25}>
                                {ai && (ai.seconds || lines) ? (
                                    <div>
                                        <div className="grid grid-cols-3 gap-3 mb-5">
                                            <div>
                                                <div className="text-xs uppercase tracking-wider text-muted-foreground">Lines by AI</div>
                                                <div className="text-xl font-bold font-heading mt-1">{lines ? `${Math.round(ai.ai_percent_of_lines)}%` : "—"}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase tracking-wider text-muted-foreground">Sessions</div>
                                                <div className="text-xl font-bold font-heading mt-1">{compact(ai.sessions)}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase tracking-wider text-muted-foreground">Tokens</div>
                                                <div className="text-xl font-bold font-heading mt-1">{compact(ai.input_tokens + ai.output_tokens)}</div>
                                            </div>
                                        </div>
                                        {lines > 0 && (
                                            <>
                                                <div className="flex h-2.5 rounded-full overflow-hidden bg-muted">
                                                    <div className="bg-[var(--gradient-to)]" style={{ width: `${(ai.ai_lines / lines) * 100}%` }} />
                                                    <div className="bg-primary" style={{ width: `${(ai.human_lines / lines) * 100}%` }} />
                                                </div>
                                                <div className="flex gap-4 text-xs text-muted-foreground mt-2 mb-5">
                                                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[var(--gradient-to)]" /> AI · {compact(ai.ai_lines)} lines</span>
                                                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-primary" /> Me · {compact(ai.human_lines)} lines</span>
                                                </div>
                                            </>
                                        )}
                                        <Bars items={ai.models.map((m) => ({ ...m, percent: 0 }))} dim="models" limit={4} />
                                    </div>
                                ) : (
                                    <p className="text-sm text-muted-foreground py-6 text-center">No AI agent activity in this range</p>
                                )}
                            </Card>
                            <Card icon={Layers} title="Activity" subtitle="Coding, AI coding, debugging and more" delay={0.3}>
                                <Bars items={stats.categories} dim="categories" />
                            </Card>
                            <Card icon={Monitor} title="Operating systems" delay={0.35}>
                                <Bars items={stats.operating_systems} dim="os" />
                            </Card>
                        </>
                    ) : (
                        !error && [0, 1, 2, 3].map((i) => <Skeleton key={i} className="h-[300px]" />)
                    )}
                </div>

                {/* Footer note */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-center mt-16 text-sm text-muted-foreground">
                    Stats are pulled live from{" "}
                    <a href={`${WAQT_URL}/profile/`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {WAQT_URL.replace(/^https?:\/\//, "")}
                    </a>
                    , tracked with{" "}
                    <a href="https://github.com/mohdrafey1/Waqt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Waqt
                    </a>
                    , my open-source coding time tracker.
                </motion.div>
            </div>
        </main>
    );
}
