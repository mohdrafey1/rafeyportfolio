import type { Metadata } from "next";
import CodingActivityClient from "./CodingActivityClient";

export const metadata: Metadata = {
    title: "Coding Activity",
    description:
        "Live coding stats for Mohd Rafey from Waqt, his open-source coding time tracker: a year of activity, languages, editors, time of day and AI coding.",
    alternates: {
        canonical: "https://rafey.space/coding-activity",
    },
};

export default function CodingActivityPage() {
    return <CodingActivityClient />;
}
