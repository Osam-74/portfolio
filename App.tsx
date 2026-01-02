
import React, { useState, useEffect } from 'react';
import { portfolioData } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero data={portfolioData.basic_info} />
        <About summary={portfolioData.professional_summary} />
        <Skills skills={portfolioData.technical_skills} />
        <Experience experiences={portfolioData.work_experience} education={portfolioData.education} />
        <Projects projects={portfolioData.projects} />
        <Contact info={portfolioData.basic_info} />
      </main>

      <Footer info={portfolioData.basic_info} />
    </div>
  );
};

export default App;
