import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Letsettle",
        slug: "letsettle",
        description:
            "A public debate & voting platform where opinions are settled by transparent public voting.",
        longDescription:
            "Letsettle is a public debate & voting platform designed to settle opinions through transparent, public voting rather than comments or influencer bias. It empowers users to create debates, add options, and vote anonymously, providing a clear, data-driven consensus on various topics.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        features: [
            "Create debates with categories & subcategories",
            "Integrated ai for faster debate generation",
            "Debate and pending by Ai reducing admin work 90%",
            "Multiple options per debate (users can add options)",
            "Anonymous voting with IP-based anti-abuse system",
            "Browser fingerprinting & Client-side vote memory",
            "Live vote count & ranking",
            "SEO-focused debate pages",
        ],
        liveLink: "https://letsettle.rafey.space",
        githubLink: "https://github.com/mohdrafey1/Letsettle",
        image: "/projectimages/letsettle.png",
        featured: true,
        projectType: "Personal",
        storybehindproject: `I’ve always been curious about one simple question:

Who is actually the best — and who decides that?

Everywhere I looked, I saw the same pattern:

“Best cricketer”

“Best programming language”

“Best creator”

“Best decision”

But these conversations always turned into noise —
biased comments, loud opinions, influencer dominance, and no real conclusion.

That’s where Letsettle was born.

I wanted to build a platform where debates are settled by clear numbers, not arguments.

So I created Letsettle — a public debate voting platform where:

Anyone can create a debate

Anyone can add options

Anyone can vote anonymously

Results update live and transparently

No comments.
No algorithms.
No influencer bias.
Just public consensus.

The hardest part wasn’t building voting —
it was building fairness without login.

I wanted zero friction for users, but I also needed to prevent fake or repeated votes. So I designed a system that balances anonymity with abuse prevention using:

IP-based vote limits

Browser fingerprinting

Client-side vote memory

Letsettle reflects how I think about products:

Simple UI

Strong logic

Transparency over engagement tricks

Curiosity-driven content that people actually want to explore

At its core, Letsettle is about one thing:

Turning endless arguments into clear outcomes.`,
    },
    {
        id: "2",
        title: "StudentSenior",
        slug: "studentsenior",
        description:
            "An education-focused content platform for exam guides and resources.",
        longDescription:
            "StudentSenior is a comprehensive education platform utilized by over 10,000 students. It serves as a hub for exam-related blogs, guides, and resources, optimized for high discoverability via Google Search. The platform is deployed on AWS/Google Cloud and handles significant traffic with a focus on SEO.",
        techStack: [
            "Next.js",
            "Node.js",
            "Express",
            "AWS",
            "Google Cloud",
            "MongoDB",
            "cloudinary",
            "S3",
            "CDN",
            "React",
            "Redux",
        ],
        features: [
            "Exam-related blogs & detailed guides",
            "SEO-optimized long-form content",
            "Ad placement planning & integration",
            "Scalable backend architecture",
            "Google Search optimization strategy",
        ],
        liveLink: "https://studentsenior.com",
        githubLink:
            "https://github.com/mohdrafey1/studentsenior-frontend-nextjs",
        image: "/projectimages/studentsenior.png",
        featured: true,
        projectType: "Personal",
        storybehindproject: `When I entered college, I struggled with things that almost every student faces but no one really solves properly —
finding PYQs, joining the right student groups, getting reliable guidance, and connecting with seniors who had already figured things out.

That frustration sparked an idea.

At the start of my 3rd year, I decided to build StudentSenior — not just as a project, but as a solution I personally needed.

I initially built it using React.js, focusing on core functionality. As the platform grew, I realized that discoverability was crucial, so I migrated the entire frontend to Next.js to take advantage of SEO and server-side rendering.

On the backend side, the project evolved just as much:

Started with JavaScript

Migrated to TypeScript for scalability, safety, and long-term maintainability

Deployed first on Vercel

Then moved to AWS

And currently running on Google Cloud for better infrastructure control

For media handling:

Initially used Cloudinary for PDFs and images

Later migrated to AWS S3 + CloudFront for better performance, cost efficiency, and scalability

Over time, StudentSenior expanded far beyond its original scope. Today, it includes:

Course-based projects

Blog systems

Certificate-based content

Academic calendars and structured student resources

This project became my biggest learning experience.
The hardest parts weren’t features — they were migrations:

React → Next.js

JavaScript → TypeScript

Those transitions taught me how real-world systems evolve and how to refactor, scale, and improve production code without breaking users.

StudentSenior isn’t just a project I built —
it’s where I learned how to think like an engineer.`,
    },
    {
        id: "3",
        title: "StudentSenior Blog",
        slug: "studentsenior-blog",
        description:
            "A centralized, SEO-optimized blog for the StudentSenior ecosystem.",
        longDescription:
            "A dedicated blogging platform for StudentSenior, built with Next.js to maximize SEO performance. It features AI-driven content summaries and a custom admin dashboard for content management, driving hundreds of views from organic search.",
        techStack: ["Next.js", "AI Integration", "SEO", "Tailwind CSS"],
        features: [
            "Fully SEO optimized architecture",
            "Auto-summary of blogs using AI",
            "Integrated Admin Dashboard",
            "High organic search traffic performance",
             "Ai Based Admin dashboard",
        ],
        liveLink: "https://blog.studentsenior.com/",
        githubLink: "https://github.com/mohdrafey1/studentsenior-blog",
        image: "/projectimages/blog.png",
        featured: true,
        projectType: "Personal",
    },
    {
        id: "4",
        title: "TravChat",
        slug: "travchat",
        description:
            "A WhatsApp-like chat application (Web + Mobile) built with Expo and MERN stack.",
        longDescription:
            "TravChat is a robust chat application available on both Web and Mobile platforms. It mimics WhatsApp's core functionality, enabling 1-to-1 messaging, admin broadcasts, and secure login. It explores advanced concepts like the Signal Protocol and ephemeral status updates.",
        techStack: ["React Native (Expo)", "Express", "MongoDB", "Socket.io"],
        features: [
            "1-to-1 real-time messaging",
            "Admin broadcast to 1000+ users in one click",
            "OTP-based phone login",
            "Push notifications",
            "Admin with extra privileges",
        ],
        // No live link provided for app
        featured: true,
        projectType: "Client",
    },

    {
        id: "5",
        title: "Alresala Tailoring",
        slug: "alresala",
        description:
            "A shop management system automating bookings, delivery, and expenses.",
        longDescription:
            "A highly efficient Tailoring Shop Management System developed for a UAE-based client. It automates key business processes like booking, delivery tracking, and expense management, reducing manual managerial effort by approximately 70%.",
        techStack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux",
            "Tailwind CSS",
        ],
        features: [
            "Booking Management & Tracking",
            "Automated Delivery Status based on payment",
            "Service Listing Management",
            "Expense Tracking & Analysis",
            "Advanced Filters for rapid data access",
            "Dynamic total calculations",
        ],
        // Client project, may not have public link
        featured: true,
        projectType: "Client",
    },
];
