import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SkillMarquee } from './components/sections/SkillMarquee';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface text-content transition-colors duration-200">
        {/* 1. Sticky Blurred Navbar */}
        <Navbar />

        {/* Page Sections */}
        <main>
          {/* 2. Hero Section with Live Terminal */}
          <Hero />

          {/* 3. Infinite Scrolling Marquee Strip */}
          <SkillMarquee />

          {/* About Section */}
          <About />

          {/* 4 & 5. Services & Stats Row */}
          <Services />

          {/* 6. Experience Row Cards (Fyno has 'Current' lime tag) */}
          <Experience />

          {/* 7. Big Lime Contact Card */}
          <Contact />
        </main>

        {/* 8. Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
