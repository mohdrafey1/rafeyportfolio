// Structured data (JSON-LD) generators for SEO
// https://schema.org/

export interface PersonSchemaProps {
    name: string;
    jobTitle: string;
    url: string;
    email: string;
    image?: string;
    sameAs?: string[]; // Social media profiles
    description?: string;
}

export interface ProjectSchemaProps {
    name: string;
    description: string;
    url?: string;
    image?: string;
    keywords?: string[];
    author: {
        "@type": "Person";
        name: string;
    };
}

// Generate Person Schema (for portfolio owner)
export function generatePersonSchema(props: PersonSchemaProps) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: props.name,
        jobTitle: props.jobTitle,
        url: props.url,
        email: props.email,
        ...(props.image && { image: props.image }),
        ...(props.description && { description: props.description }),
        ...(props.sameAs &&
            props.sameAs.length > 0 && { sameAs: props.sameAs }),
    };
}

// Generate WebSite Schema
export function generateWebsiteSchema(
    url: string,
    name: string,
    description: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        description,
        url,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${url}/?s={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

// Generate CreativeWork/SoftwareApplication Schema (for projects)
export function generateProjectSchema(props: ProjectSchemaProps) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: props.name,
        description: props.description,
        ...(props.url && { url: props.url }),
        ...(props.image && { image: props.image }),
        ...(props.keywords && { keywords: props.keywords.join(", ") }),
        author: props.author,
    };
}

// Generate ProfilePage Schema (for portfolio homepage)
export function generateProfilePageSchema(
    url: string,
    name: string,
    description: string,
    personName: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
            "@type": "Person",
            name: personName,
            description,
        },
        name,
        url,
    };
}

// Helper to create script tag content
export function createJsonLd(data: object) {
    return {
        __html: JSON.stringify(data),
    };
}
