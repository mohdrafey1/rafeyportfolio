import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { generateProjectSchema, createJsonLd } from "@/lib/structured-data";
import ProjectPageClient from "./ProjectPageClient";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    const siteUrl = "https://rafey.space";
    const projectUrl = `${siteUrl}/projects/${project.slug}`;
    const ogImage = project.image
        ? `${siteUrl}${project.image}`
        : `${siteUrl}/og-image.png`;

    return {
        title: project.title,
        description: project.longDescription || project.description,
        keywords: [
            ...project.techStack,
            project.title,
            "portfolio project",
            "full stack",
        ],
        authors: [{ name: "Mohd Rafey", url: siteUrl }],
        openGraph: {
            type: "article",
            url: projectUrl,
            title: `${project.title} - Rafey Portfolio`,
            description: project.longDescription || project.description,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            siteName: "Mohd Rafey Portfolio",
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Rafey Portfolio`,
            description: project.longDescription || project.description,
            images: [ogImage],
            creator: "@mohdrafey1",
        },
        alternates: {
            canonical: projectUrl,
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return null; // Will trigger 404
    }

    const siteUrl = "https://rafey.space";
    const projectSchema = generateProjectSchema({
        name: project.title,
        description: project.longDescription || project.description,
        url: project.liveLink,
        image: project.image ? `${siteUrl}${project.image}` : undefined,
        keywords: project.techStack,
        author: {
            "@type": "Person",
            name: "Mohd Rafey",
        },
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={createJsonLd(projectSchema)}
            />
            <ProjectPageClient project={project} />
        </>
    );
}
