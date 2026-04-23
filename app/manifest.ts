import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Mohd Rafey - Full Stack Developer",
        short_name: "Mohd Rafey",
        description: "Portfolio of a creative full stack developer.",
        start_url: "/",
        display: "standalone",
        background_color: "#030014",
        theme_color: "#7042f8",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
