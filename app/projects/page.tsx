import type { Metadata } from "next";
import { projects } from "@/data/projects";
import AllProjectsClient from "./AllProjectsClient";

export const metadata: Metadata = {
    title: "All Projects",
    description:
        "Browse all projects by Mohd Rafey — personal builds, client work, freelance projects, and open-source contributions across web and mobile.",
    alternates: {
        canonical: "https://rafey.space/projects",
    },
};

export default function AllProjectsPage() {
    return <AllProjectsClient projects={projects} />;
}
