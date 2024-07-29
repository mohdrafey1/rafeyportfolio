import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <Analytics />
            <SpeedInsights />
        </div>
    );
}

export default App;
