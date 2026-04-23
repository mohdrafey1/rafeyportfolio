"use client";

import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/projects", "/coding-activity"];

export function MainWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hiddenNav =
        HIDDEN_PATHS.includes(pathname) ||
        HIDDEN_PATHS.some((p) => pathname.startsWith(p + "/"));

    return (
        <main className={`min-h-screen ${hiddenNav ? "" : "pt-16"}`}>
            {children}
        </main>
    );
}
