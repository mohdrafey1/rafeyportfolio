import { PreferenceProvider, usePreference } from "./PreferenceContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import OldHeader from "./components/OldUi/Header/Header";
import OldHero from "./components/OldUi/Hero/Hero";
import OldFooter from "./components/OldUi/Footer/Footer";
import OldAbout from "./components/OldUi/About/About";
import OldProject from "./components/OldUi/Projects/Project";

function AppContent() {
    const { isOldUI, mounted } = usePreference();

    if (!mounted) return null;

    if (isOldUI) {
        return (
            <>
                <OldHeader />
                <OldHero />
                <OldAbout />
                <OldProject />
                <OldFooter />
            </>
        );
    }

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default function App() {
    return (
        <PreferenceProvider>
            <AppContent />
        </PreferenceProvider>
    );
}
