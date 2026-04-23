import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import {
    generatePersonSchema,
    generateWebsiteSchema,
    createJsonLd,
} from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const siteUrl = "https://rafey.space";
const siteName = "Mohd Rafey - Full Stack Developer Portfolio";
const siteDescription =
    "Full Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Building scalable web applications with clean architecture and modern technologies.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteName,
        template: `%s | Rafey Portfolio`,
    },
    description: siteDescription,
    keywords: [
        "Full Stack Developer",
        "Software Engineer",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
        "TypeScript",
        "MongoDB",
        "Web Development",
        "Frontend Developer",
        "Backend Developer",
        "Mohd Rafey",
        "Portfolio",
        "JavaScript",
        "MERN Stack",
        "Rafey Developer",
        "Rafey Shaikh",
        "Mohd Rafey Shaikh",
        "Mohammad Rafey",
        "rafey.space",
        "Rafey",
        "Rafeyspace",
    ],
    authors: [{ name: "Mohd Rafey", url: siteUrl }],
    creator: "Mohd Rafey",
    publisher: "Mohd Rafey",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName,
        title: siteName,
        description: siteDescription,
        images: [
            {
                url: `${siteUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Mohd Rafey - Full Stack Developer Portfolio",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteName,
        description: siteDescription,
        images: [`${siteUrl}/og-image.png`],
        creator: "@mohdrafey1",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
        other: [
            {
                rel: "android-chrome-192x192",
                url: "/android-chrome-192x192.png",
            },
            {
                rel: "android-chrome-512x512",
                url: "/android-chrome-512x512.png",
            },
        ],
    },
    manifest: "/manifest.webmanifest",
};

// Structured Data
const personSchema = generatePersonSchema({
    name: "Mohd Rafey",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    email: "mohdrafey600@gmail.com",
    image: `${siteUrl}/pic.jpg`,
    description:
        "Full Stack Software Engineer specializing in building scalable web applications with modern technologies.",
    sameAs: [
        "https://github.com/mohdrafey1",
        "https://www.linkedin.com/in/mohdrafey1",
    ],
});

const websiteSchema = generateWebsiteSchema(siteUrl, siteName, siteDescription);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <Script
                    id="person-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={createJsonLd(personSchema)}
                />
                <Script
                    id="website-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={createJsonLd(websiteSchema)}
                />
            </head>
            <body
                className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
            >
                <ThemeProvider>
                    <ScrollProgress />
                    <Navbar />
                    <MainWrapper>{children}</MainWrapper>
                    <Footer />
                    <BackToTop />
                </ThemeProvider>
            </body>
        </html>
    );
}
