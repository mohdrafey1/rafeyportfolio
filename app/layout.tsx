import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Rafey - Full Stack Developer",
    description: "Portfolio of a creative full stack developer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body
                className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
            >
                <ScrollProgress />
                <Navbar />
                <main className="min-h-screen pt-16">{children}</main>
                <Footer />
                <BackToTop />
            </body>
        </html>
    );
}
