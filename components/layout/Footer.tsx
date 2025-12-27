import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold font-heading">
                        Rafey.space
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/mohdrafey1"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mohdrafey1"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="https://x.com/MohdRafey72"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Twitter size={20} />
                    </Link>
                    <Link
                        href="mailto:mohdrafey600@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </Link>
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Rafey. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
