import type { Metadata } from "next";
import CodingActivityClient from "./CodingActivityClient";

export const metadata: Metadata = {
    title: "Coding Activity",
    description:
        "Live WakaTime coding stats for Mohd Rafey — weekly activity, language breakdown, and category distribution across all projects.",
    alternates: {
        canonical: "https://rafey.space/coding-activity",
    },
};

export default function CodingActivityPage() {
    return <CodingActivityClient />;
}
