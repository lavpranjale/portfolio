import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import { portfolioData } from './data/portfolioData';

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    blogs: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  // Intersection observer for active nav section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        name={portfolioData.name}
      />
      <main>
        <Hero ref={sectionRefs.hero} data={portfolioData} />
        <About ref={sectionRefs.about} data={portfolioData} />
        <Skills ref={sectionRefs.skills} data={portfolioData} />
        <Experience ref={sectionRefs.experience} data={portfolioData} />
        <Projects
          ref={sectionRefs.projects}
          projects={portfolioData.projects}
          onProjectClick={setSelectedProject}
        />
        <Blogs ref={sectionRefs.blogs} blogs={portfolioData.blogs} />
        <Education ref={sectionRefs.education} education={portfolioData.education} />
        <Contact ref={sectionRefs.contact} contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;