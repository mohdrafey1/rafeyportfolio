export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    features?: string[];
    liveLink?: string;
    githubLink?: string;
    image?: string; // Main distinctive image
    screenshots?: string[]; // Array of screenshots for the detail page
    featured: boolean;
    demoUrl?: string; // For iframe embed if different from liveLink
    projectType: "Personal" | "Client"; // New field
    storybehindproject?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    achievements: string[];
}

export interface Skill {
    name: string;
    category:
        | "Languages"
        | "Frontend"
        | "Backend"
        | "Databases"
        | "State Management"
        | "ORM/ODM"
        | "DevOps"
        | "Tools";
    level?: number; // Optional visual indicator
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    year: string;
    location?: string;
}

export interface Social {
    platform: string;
    url: string;
    icon: string;
}
