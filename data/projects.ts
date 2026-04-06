import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "StudentSenior",
        slug: "studentsenior",
        description:
            "An education-focused content platform with 23K active users, 1M+ Google impressions, and 700K+ views in 1.5 years — plus a mobile app on the Play Store.",
        longDescription:
            "StudentSenior is a comprehensive education platform that has grown to 23,000+ active users and 3,000+ signups in just 1.5 years. It serves as a hub for exam-related blogs, guides, and resources, generating 1M+ Google Search impressions, 20K+ organic clicks, and 700K+ total views. Deployed on AWS/Google Cloud with a focus on SEO and scalability. Also ships a React Native (Expo) mobile app on the Play Store with 500+ downloads.",
        techStack: [
            "Next.js",
            "React Native",
            "Expo",
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
            "23K+ active users & 3,000+ students signups in 1.5 years",
            "1M+ Google Search impressions & 20K+ organic clicks",
            "700K+ total views across the platform",
            "SEO-optimized long-form exam blogs & guides",
            "Scalable backend on AWS & Google Cloud",
            "React Native (Expo) mobile app — 500+ Play Store downloads",
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
The hardest parts weren't features — they were migrations:

React → Next.js

JavaScript → TypeScript

Those transitions taught me how real-world systems evolve and how to refactor, scale, and improve production code without breaking users.

And then I took it one step further — I built and published a React Native (Expo) mobile app for StudentSenior on the Play Store. It crossed 500+ downloads and gave me hands-on experience shipping a production mobile app: handling native builds, app store submissions, push notifications, and mobile-specific UX considerations.

StudentSenior isn't just a project I built —
it's the ecosystem where I learned how to think like an engineer.`,
    },
    {
        id: "2",
        title: "Puzzle Arrow",
        slug: "puzzle-arrow",
        description:
            "A mind-bending open-source puzzle game with infinite levels, a level editor, and community sharing — built with React Native & Expo.",
        longDescription:
            "Puzzle Arrow is a fun, addictive open-source puzzle game where players guide arrows to the right spots. It combines a built-in campaign of carefully crafted levels with an endless stream of community-created puzzles. Players can design and publish their own brain teasers using the built-in Level Editor, unlock cosmetic rewards like arrow colors, themes, and confetti, and enjoy fully offline gameplay. The app hit 1,000+ downloads in just 10 days after launch.",
        techStack: [
            "React Native",
            "Expo",
            "NativeWind",
            "Reanimated",
            "Firebase",
        ],
        features: [
            "Infinite Puzzles — built-in campaign + endless community levels",
            "Level Editor — design & publish your own brain teasers",
            "Customizations — unlock arrow colors, themes, and confetti",
            "Offline Mode — play seamlessly without internet",
            "1,000+ downloads in the first 10 days",
        ],
        liveLink: "https://puzzlearrow.rafey.space",
        githubLink: "https://github.com/mohdrafey1/puzzle-arrow",
        image: "/projectimages/puzzlearrow.png",
        featured: true,
        projectType: "Personal",
        storybehindproject: `I wanted to build something purely fun — not another utility app, not a SaaS, just a game that people could pick up and enjoy.

Puzzle Arrow started as a weekend experiment. The core mechanic is deceptively simple: guide arrows to the right spots. But as I layered in more puzzle types, the game started getting genuinely mind-bending in ways I didn't expect.

What really made this project exciting was building the Level Editor. I wanted players to not just consume content but create it. Designing a drag-and-drop puzzle builder inside a mobile app — with real-time validation and community publishing — was the most technically challenging part of the whole experience.

I also built an offline-first architecture so the game works without internet, which was crucial for a casual game that people play during commutes or dead zones.

The response was unexpected. 1,000+ downloads in just 10 days after publishing to the Play Store. Seeing people actually playing levels they discovered from other players was genuinely exciting.

It reminded me why I got into building things in the first place — not for metrics, but for the moment someone says "okay one more level."`,
    },

    {
        id: "3",
        title: "Roomio",
        slug: "roomio",
        description:
            "A smart shared expense manager for flatmates and friend groups — with real-time sync, PDF exports, 1-to-1 ledgers, and personal finance tracking.",
        longDescription:
            "Roomio is a full-featured expense management app built for people who share spaces and costs. It lets groups create shared rooms and split bills equally or with custom amounts, tracks personal expenses across 30+ categories with monthly spending insights, maintains 1-to-1 ledgers for running tabs with friends, and delivers real-time updates via Firebase. Users receive instant notifications for new expenses and balance changes. All data can be exported as beautifully formatted PDFs.",
        techStack: [
            "React Native",
            "Expo",
            "Firebase",
            "NativeWind",
            "Reanimated",
        ],
        features: [
            "Shared Rooms — create rooms for flats, trips, or friend groups",
            "Smart Splitting — equal or custom splits with automatic balance calculation",
            "Personal Tracker — 30+ categories, monthly summaries & spending insights",
            "Real-time Sync — Firebase-powered, offline-ready & auto-syncing",
            "Instant Notifications — alerts for new expenses, invites & balance changes",
            "1-to-1 Ledgers — running tab with a friend, net balance always visible",
            "Export to PDF — download room, personal, or ledger summaries",
        ],
        liveLink: "https://roomio.rafey.space/",
        githubLink: "https://github.com/mohdrafey1/roomio-app",
        image: "/projectimages/roomio.png",
        featured: true,
        projectType: "Personal",
        storybehindproject: `Living with flatmates means constantly running into the same awkward question: "Who owes who, and how much?"

Spreadsheets break down. WhatsApp messages get buried. Mental math causes arguments. I'd been the unofficial "finance guy" in my friend group for a while, and I realized the tools out there were either too simple or too complex for real daily use.

So I built Roomio.

The first version was just a basic expense splitter. But as I used it myself, I kept finding gaps. What about trips? What about a running tab with just one friend? What about my personal spending across the month?

Each question became a feature.

The hardest technical challenge was the real-time architecture. Expense apps are inherently collaborative — if someone adds a split, everyone needs to see it immediately. I built the entire sync layer on Firebase with offline-first support, so the app stays usable even in areas with spotty connectivity and reconciles everything when connectivity returns.

The PDF export feature came from a real need — people wanted a record they could share with a landlord or keep for their own bookkeeping. Building dynamic, well-formatted PDF generation on mobile was surprisingly tricky but worth it.

Roomio is the kind of app I wished existed before I built it. That's usually the best reason to build something.`,
    },

    {
        id: "4",
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
        storybehindproject: `I've always been curious about one simple question:

Who is actually the best — and who decides that?

Everywhere I looked, I saw the same pattern:

"Best cricketer"

"Best programming language"

"Best creator"

"Best decision"

But these conversations always turned into noise —
biased comments, loud opinions, influencer dominance, and no real conclusion.

That's where Letsettle was born.

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

The hardest part wasn't building voting —
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
        id: "5",
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
        id: "6",
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
        id: "7",
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
