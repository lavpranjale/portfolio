import React, { useState, useEffect, useRef } from 'react';
import './App.css';
const joiningYear = 2020;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - joiningYear;

// Format experience years, e.g., "5+ Years" or "1 Year" etc.
const experienceString = experienceYears > 1 ? `${experienceYears}+ Years` : `${experienceYears} Year`;
// Data
const portfolioData = {
  name: 'Lav Pranjale',
   title: `Full-Stack JavaScript Engineer | MERN Stack | ${experienceString} Experience`,
  summary: 'Experienced JavaScript Developer with 5+ years building scalable web and mobile apps using React Native, React.js, and the MERN stack (MongoDB, Express.js, React, Node.js). Skilled in full-stack development, REST API integration, clean architecture, and mobile-first design. Delivered end-to-end features in Agile teams across healthcare, fintech, and e-commerce. Seeking impactful roles as a React Native Developer, MERN Stack Developer, or Senior React.js Developer.',
  contact: {
    email: 'lav13feb@gmail.com',
    phone: '+919669662926',
    location: 'Indore, India',
    linkedin: 'https://www.linkedin.com/in/lav-pranjale-628559147',
    github: 'https://github.com/lavpranjale'
  },
  skills: {
    frontend: ['React Native', 'React.js', 'HTML5', 'CSS3', 'TypeScript'],
    backend: ['Node.js', 'Express.js'],
    databases: ['MongoDB', 'MySQL'],
    cloudDevOps: ['Firebase', 'AWS (EC2, S3)', 'CloudFront', 'Git', 'GitHub'],
    projectManagement: ['Agile Methodologies', 'Sprint Planning', 'Requirement Gathering', 'Client Communication'],
    additional: ['RESTful API Integration', 'Responsive Design', 'Cross-functional Team Collaboration']
  },
  experience: [
    {
      title: 'React Developer (Freelancer)',
      company: 'Harbura',
      dates: '03/2025 - 05/2025',
      location: 'Remote',
      description: [
        'Built responsive, accessible UIs using React and TypeScript for a health-focused application.',
        'Integrated RESTful APIs powered by Python and AWS for secure health data transfer.',
        'Enabled users to upload, manage, and view medical documents, enhancing functionality and UX.',
        'Integrated GPT-based AI features for personalized experiences.',
        'Delivered features on time within an Agile remote team, ensuring code quality and timely releases.'
      ],
      techStack: ['React', 'TypeScript', 'REST APIs', 'AWS', 'Git', 'Figma']
    },
    {
      title: 'Senior JavaScript Developer | React Native & MERN',
      company: 'Webcubator Technologies',
      dates: '01/2020 - 03/2025',
      location: 'Pune',
      description: [
        'Built and maintained scalable applications using React Native and the MERN stack, supporting 10,000+ users with 99.9% uptime.',
        'Collaborated with clients and cross-functional teams to gather requirements and deliver custom solutions, boosting satisfaction by 20%.',
        'Led end-to-end feature development: UI/UX, API integration, and database design.',
        'Managed multiple client-facing projects across healthcare, fintech, and retail, meeting 100% of deadlines.',
        'Oversaw production deployments, reducing post-release issues by 30% through CI/CD and testing.'
      ],
      techStack: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'AWS (EC2)', 'S3', 'CloudFront', 'Git', 'Agile']
    }
  ],
  projects: [
    {
      name: 'Harbura Health Application',
      role: 'React Developer (Freelancer)',
      description: 'Developed a secure, high-performance web app using React (TypeScript) to improve usability for patients and families. Implemented features like Smart Sorting, Effortless Uploads, and Auto-Sync for efficient health data management.',
      techStack: ['React', 'TypeScript', 'AWS', 'GPT', 'Python', 'REST API', 'Health Tech'],
      details: 'This project involved building a robust health application from the ground up, focusing on user-centric design and secure data handling. Key achievements included a significant reduction in data retrieval times and a measurable increase in user engagement due to the chatbot integration.'
    },
    {
      name: 'CGMPlus & Clova Health - Glucose & Wellness Apps',
      role: 'React Native Developer at Webcubator Technologies',
      description: 'Developed AI-powered React Native apps for glucose monitoring, weight loss, and wellness tracking, supporting 1,000+ active users. Built meal and exercise logging with 95% calorie tracking accuracy.',
      techStack: ['React Native', 'Firebase', 'AWS', 'CGM', 'Terra', 'Vital', 'Mobile App Development', 'Calorie Tracker'],
      details: 'These applications revolutionized personal health management by providing users with real-time insights into their glucose levels and overall wellness. The development focused on intuitive UX/UI, ensuring that complex health data was presented in an easily understandable format.'
    },
    {
      name: 'Rocco Finance - Personal Finance & Wage Access App',
      role: 'React Native Developer at Webcubator Technologies',
      description: 'Developed a React Native mobile app that provided personalized spending insights, reducing user debt reliance by 40%. Enabled $100 wage advances for 50,000+ users, improving financial flexibility.',
      techStack: ['React Native', 'Firebase', 'AWS', 'Plaid', 'Payliance', 'Fintech', 'Personal Finance'],
      details: 'Rocco Finance was designed to empower users with better financial control. The app\'s success was measured by significant reductions in user debt reliance and improved financial flexibility, directly impacting thousands of users\' daily lives.'
    },
    {
      name: 'EnLaCancha - Latino Community Learning Platform',
      role: 'Full Stack JavaScript Developer at Webcubator Technologies',
      description: 'Built a scalable education platform enabling 50,000+ users from the Latino community to access courses and content. Integrated Stripe for secure payments, boosting course enrollments by 20%.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AWS S3', 'EdTech'],
      details: 'EnLaCancha addressed a critical need for accessible education in the Latino community. My role involved full-stack development, ensuring both a smooth user interface and a highly performant backend.'
    },
    {
      name: 'Palatable - Restaurant Management Platform',
      role: 'React Native Developer at Webcubator Technologies',
      description: 'Developed a React Native mobile app for iOS and Android, enabling over 10,000+ restaurant owners to manage orders, deals, menus, and profiles. Reduced order processing time by 40%.',
      techStack: ['React Native', 'Firebase', 'AWS (EC2)', 'S3', 'CloudFront', 'Cross-Platform Mobile App'],
      details: 'Palatable streamlined restaurant operations for thousands of owners. The focus was on creating a highly efficient and user-friendly mobile experience, leading to significant reductions in order processing time and errors.'
    }
  ],
  education: [
    {
      degree: 'MCA',
      institution: 'International Institute of Professional Studies, DAVV',
      year: '04/2019',
      location: 'Indore, India'
    }
  ]
};

// Modal component for displaying project details
type Project = {
  name: string;
  role: string;
  description: string;
  techStack: string[];
  details?: string;
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape: (e: KeyboardEvent) => void = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  interface BackdropClickEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const handleBackdropClick = (e: BackdropClickEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div ref={modalRef} className="modal-box">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <h3 className="modal-title">{project.name}</h3>
        <p className="modal-role">{project.role}</p>
        <p className="modal-description">{project.description}</p>
        {project.details && <div className="modal-details">
          <h4 className="modal-details-title">Detailed Overview:</h4>
          <p>{project.details}</p>
        </div>}
        <div className="modal-tags">
          <span className="modal-tech-label">Tech Stack:</span>
          {project.techStack.map((tech, i) => (
            <span key={i} className="modal-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  // Intersection observer for active nav section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
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
  }, []);

  interface ScrollToSectionFn {
    (id: string): void;
  }

  const scrollToSection: ScrollToSectionFn = (id) => {
    const el: HTMLElement | null = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Main Render
  return (
    <div>
      {/* Navbar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <button className="nav-logo-btn" onClick={() => scrollToSection('hero')}>
            {/* <span className="nav-logo-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="nav-logo-svg" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                <circle cx="12" cy="7" r="4" />
                <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
              </svg>
            </span> */}
            <span className="nav-logo-text">{portfolioData.name.split(' ')[0]} Portfolio</span>
          </button>
          <div className="nav-links-desktop">
            {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map(sectionId => (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`nav-link ${activeSection === sectionId ? 'nav-link-active' : ''}`}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </button>
            ))}
          </div>
          <button
            className="nav-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <svg className="nav-menu-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {isMenuOpen &&
          <div className="nav-links-mobile">
            {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map(sectionId => (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`nav-link-mobile ${activeSection === sectionId ? 'nav-link-mobile-active' : ''}`}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </button>
            ))}
          </div>
        }
      </nav>
      {/* HERO */}
      <main>
        <section id="hero" ref={sectionRefs.hero} className="hero-section">
          <div className="hero-bg-animation">
            <div className="hero-bg-circle hero-bg-1"></div>
            <div className="hero-bg-circle hero-bg-2"></div>
            <div className="hero-bg-circle hero-bg-3"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{portfolioData.name}</h1>
            <p className="hero-subtitle">{portfolioData.title}</p>
            <div className="hero-actions">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-filled"
              >
                LinkedIn
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
        {/* About */}
        <section id="about" ref={sectionRefs.about} className="section section-bg-white">
          <div className="section-container">
            <h2 className="section-title">About Me</h2>
            <div className="box">
              <p className="box-content">{portfolioData.summary}</p>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section id="skills" ref={sectionRefs.skills} className="section section-bg-light">
          <div className="section-container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category} className="skills-card">
                  <h3 className="skills-category">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="skills-tags">
                    {skills.map((skill, idx) => (
                      <span key={idx} className="skills-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Experience */}
        <section id="experience" ref={sectionRefs.experience} className="section section-bg-white">
          <div className="section-container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
              {portfolioData.experience.map((job, idx) => (
                <div key={idx} className="box">
                  <h3 className="experience-jobtitle">{job.title}</h3>
                  <p className="experience-company">{job.company} - {job.location}</p>
                  <p className="experience-dates">{job.dates}</p>
                  <ul className="experience-desc-list">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="experience-tags">
                    <span className="experience-tech-label">Tech Stack:</span>
                    {job.techStack.map((tech, i) => (
                      <span key={i} className="experience-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" ref={sectionRefs.projects} className="section section-bg-light">
          <div className="section-container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {portfolioData.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="project-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    <span className="project-tech-label">Tech Stack:</span>
                    {project.techStack.slice(0, 3).map((tech, i) =>
                      <span key={i} className="project-tag">{tech}</span>
                    )}
                    {project.techStack.length > 3 && (
                      <span className="project-tag-more">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="project-overlay">
                    <span>View Details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Education */}
        <section id="education" ref={sectionRefs.education} className="section section-bg-white">
          <div className="section-container">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="box education-item">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-year">{edu.year} | {edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" ref={sectionRefs.contact} className="section section-contact">
          <div className="section-container text-center">
            <h2 className="section-title section-title-light">Get In Touch</h2>
            <p className="contact-message">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="contact-actions">
              <a href={`mailto:${portfolioData.contact.email}`} className="contact-btn">
                <span className="contact-btn-icon">@</span>
                <span>{portfolioData.contact.email}</span>
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn">
                <span className="contact-btn-icon">in</span>
                <span>LinkedIn</span>
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-btn">
                <span className="contact-btn-icon">GH</span>
                <span>GitHub</span>
              </a>
            </div>
            <p className="contact-location">
              {portfolioData.contact.location} | {portfolioData.contact.phone}
            </p>
          </div>
        </section>
        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </footer>
      </main>
      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;
