import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Mohd Rafey - Full Stack Developer",
        short_name: "Rafey.space",
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
        ],
    };
}
