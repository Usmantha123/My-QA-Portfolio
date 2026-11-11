import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { BugShowcase } from './components/sections/BugShowcase';
import { QaProcess } from './components/sections/QaProcess';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface text-content transition-colors duration-300 selection:bg-blue-500/30 selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Page Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <BugShowcase />
          <QaProcess />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

