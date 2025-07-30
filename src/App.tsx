import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const joiningYear = 2020;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - joiningYear;

const experienceString = experienceYears > 1 ? `${experienceYears}+ Years` : `${experienceYears} Year`;

const portfolioData = {
  name: 'Lav Pranjale',
  title: `Full-Stack JavaScript Engineer | MERN Stack | ${experienceString} Experience`,
  summary: `An accomplished JavaScript Developer with ${experienceYears}+ years of hands-on experience in architecting and deploying scalable, high-performance web and mobile applications. Proficient in modern frontend frameworks like React and React Native, and adept with backend technologies including Node.js and the MERN stack (MongoDB, Express.js, React, Node.js). My expertise spans end-to-end development, from crafting clean, modular code and integrating complex RESTful APIs to optimizing application performance and ensuring robust security. I have a proven track record of successfully managing project execution, collaborating seamlessly with cross-functional teams, and maintaining exceptional client communication to consistently deliver high-quality, on-time solutions that directly address business objectives and user needs. I thrive in dynamic environments and am passionate about leveraging technology to solve real-world problems.`,
  contact: {
    email: 'lav13feb@gmail.com',
    phone: '+919669662926',
    location: 'Indore, India',
    linkedin: 'https://www.linkedin.com/in/lav-pranjale-628559147',
    github: 'https://github.com/lavpranjale'
  },
  skills: {
    frontend: ['React Native', 'React.js', 'HTML5', 'CSS3', 'TypeScript', 'Redux', 'Context API', 'Responsive Design', 'Webpack', 'Babel'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'Microservices (Basic)'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL (Basic)', 'Firebase Firestore'],
    cloudDevOps: ['AWS (EC2, S3, CloudFront)', 'Firebase', 'Git', 'GitHub', 'CI/CD (Basic Understanding)'],
    projectManagement: ['Agile Methodologies', 'Scrum', 'Sprint Planning', 'Task Delegation', 'Requirement Gathering', 'Client Communication', 'Cross-functional Team Collaboration'],
    otherSkills: ['Performance Optimization', 'Clean Architecture', 'API Integration', 'Mobile-First Design', 'Problem Solving', 'Debugging', 'Code Review']
  },
  experience: [
    {
      title: 'Frontend Developer (Freelancer)',
      company: 'Harbura',
      dates: '03/2025 - 05/2025',
      location: 'Remote',
      description: [
        'Architected and built intuitive user interfaces using React with TypeScript, delivering a health-focused application with enhanced user experience.',
        'Seamlessly integrated complex RESTful APIs, developed in Python with AWS services, ensuring secure and efficient data flow for health documents.',
        'Implemented robust functionalities allowing users to securely upload, manage, and view sensitive health documents, significantly improving data accessibility and control.',
        'Leveraged advanced GPT technologies to develop intelligent, personalized user experiences, including a chatbot for real-time health record queries, boosting user engagement.',
        'Managed end-to-end project execution, ensuring on-time delivery and adherence to high-quality standards within an agile remote development environment.'
      ],
      techStack: ['React', 'TypeScript', 'REST APIs', 'AWS', 'Python', 'GPT APIs']
    },
    {
      title: 'MERN | React Native Developer',
      company: 'Webcubator Technologies',
      dates: '01/2020 - 03/2025',
      location: 'Pune, India',
      description: [
        'Engineered and maintained highly scalable web and mobile applications using the MERN stack and React Native, successfully supporting over 10,000 active users with a consistent 99.9% uptime.',
        'Collaborated extensively with clients to meticulously gather and refine requirements, translating business needs into tailored technical solutions that boosted client satisfaction by 20% and achieved a 100% on-time project delivery rate.',
        'Spearheaded the development of critical features from conception to deployment, encompassing UI/UX design, robust API integration, and optimized database architecture.',
        'Managed multiple production releases with stringent quality control, achieving zero critical issues post-deployment and significantly reducing application downtime by 30% through proactive monitoring and optimization.',
        'Led and mentored junior developers, fostering a collaborative environment and ensuring adherence to best practices in coding, testing, and deployment.'
      ],
      techStack: ['MERN Stack', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Firebase', 'AWS (EC2, S3, CloudFront)', 'Agile Methodologies']
    }
  ],
  projects: [
    {
      name: 'Harbura Health Application',
      role: 'Frontend Developer (Freelancer)',
      description: 'Developed a secure, high-performance web application using React (TypeScript) for seamless health document management. Features include Smart Sorting, Effortless Uploads, and Auto-Sync with provider portals, enhancing user control over personal medical records.',
      techStack: ['React', 'TypeScript', 'AWS', 'GPT APIs', 'Python', 'REST API'],
      details: 'This project focused on creating a robust and intuitive health application from the ground up. I was responsible for building responsive user interfaces, integrating with Python-based RESTful APIs hosted on AWS, and implementing secure document handling. A key achievement was integrating a GPT-powered chatbot, enabling real-time health record queries and significantly improving user engagement and personalization. The application was designed with a strong emphasis on data security and user experience.'
    },
    {
      name: 'CGMPlus & Clova Health',
      role: 'React Native Developer at Webcubator Technologies',
      description: 'Built AI-driven mobile applications for weight loss and glucose control, integrating with real-time CGM devices and serving over 1,000 users. Implemented precise meal and exercise logging with 95% calorie tracking accuracy and designed intuitive graphs to improve glucose monitoring efficiency by 40%.',
      techStack: ['React Native', 'Firebase', 'AWS (S3)', 'Terra', 'Vital', 'SQL', 'Mobile App Development', 'Data Visualization', 'Health Tech'],
      details: 'These critical health applications aimed to provide users with comprehensive tools for managing their health. My role involved developing the core mobile functionalities, integrating with real-time continuous glucose monitoring (CGM) devices, and implementing advanced data visualization for glucose trends. I also developed a doctor dashboard allowing real-time monitoring of over 100 users, enhancing patient care. The focus was on improving user retention by 30% through enhanced UX and promoting long-term health goal adherence.'
    },
    {
      name: 'Rocco Finance',
      role: 'React Native Developer at Webcubator Technologies',
      description: 'Engineered a React Native mobile application providing personalized spending insights and enabling wage advances. Successfully helped over 50,000 users access earnings before payday, reducing debt reliance by 40% and increasing retention by 25%.',
      techStack: ['React Native', 'Node.js', 'AWS (S3)', 'SQL', 'Firebase', 'Plaid', 'Payliance', 'Zendesk', 'Fintech', 'Financial Wellness'],
      details: 'Rocco Finance was a pivotal project in the fintech domain, designed to empower users with greater financial flexibility. I developed key features such as personalized spending analytics, interest-free wage advances, and integration with third-party financial APIs like Plaid and Payliance. The application significantly reduced overdraft and payday loan usage, demonstrably improving users\' financial well-being and lowering debt-related stress by 30%.'
    },
    {
      name: 'EnLaCancha',
      role: 'Full Stack JavaScript Developer at Webcubator Technologies',
      description: 'Developed a scalable learning platform for the Latino community, facilitating access to courses for over 50,000 active users. Integrated Stripe for secure payment processing, which boosted course enrollments by 20%, and optimized data retrieval speeds by 40% using MongoDB.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AWS (S3)', 'EdTech', 'Scalable Architecture'],
      details: 'EnLaCancha was a comprehensive educational platform requiring robust full-stack development. I was responsible for both frontend (React JS) and backend (Node.js, Express.js) development, ensuring a fast and responsive UI. Key contributions included integrating secure payment gateways with Stripe, managing real-time data storage with MongoDB, and deploying a highly available infrastructure on AWS S3, ensuring 99.9% uptime for content delivery.'
    },
    {
      name: 'Planitnerd',
      role: 'Full Stack Developer at Webcubator Technologies',
      description: 'Built a cross-platform trip planning and travel hacking education app (iOS/Android) using Ionic Framework and Angular 9, achieving over 1,000 downloads. Enabled real-time collaboration, improving group planning efficiency by 50%, and hosted on AWS for 99.9% uptime.',
      techStack: ['Ionic Framework (5)', 'Angular 9', 'Node.js', 'Express.js', 'MongoDB', 'AWS (ECS, S3, CloudFront, Elastic IP)', 'Cross-Platform Development', 'Travel Tech'],
      details: 'Planitnerd was an innovative travel application aimed at simplifying trip planning and educating users on travel hacking. My role involved full-stack development, from building the cross-platform mobile application using Ionic and Angular to designing and implementing the backend with Node.js and Express.js. I integrated real-time collaboration features that significantly enhanced group planning. The application was hosted on a highly scalable AWS infrastructure, ensuring fast delivery speeds and exceptional uptime.'
    },
    {
      name: 'Palatable Restaurant',
      role: 'React Native Developer at Webcubator Technologies',
      description: 'Developed a cross-platform mobile application for restaurant owners (iOS/Android), currently used by over 10,000 active users to manage orders, deals, menus, and profiles. This led to a 40% reduction in order processing time and a 25% reduction in menu change errors.',
      techStack: ['React Native', 'Firebase', 'AWS (EC2, S3, CloudFront)', 'Real-time Sync', 'Mobile App Development', 'Restaurant Management'],
      details: 'Palatable Restaurant was designed to be a comprehensive tool for restaurant owners to streamline their operations. I was responsible for building the mobile application that provided efficient order management tools, real-time menu updates, and customer engagement features. Integration with Firebase enabled real-time data synchronization, ensuring accurate order tracking and improving overall operational efficiency for restaurant owners. The app significantly improved management workflows and customer satisfaction.'
    }
  ],
  education: [
    {
      degree: 'MCA',
      institution: 'International Institute of Professional Studies, DAVV',
      year: '2019',
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
  link?: string; // Optional link to the project
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
        {project.link && (
          <div className="modal-actions">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-button cta-filled">
              View Project
            </a>
          </div>
        )}
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
      // The section will be active when its top is within the top 20% of the viewport,
      // or its bottom is within the bottom 20% of the viewport.
      // This makes it more likely for the last section to be detected.
      rootMargin: '-20% 0px -20% 0px', // Adjusted rootMargin
      threshold: 0, // Trigger as soon as any part of the target enters the root
    };

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          // This logic can be more sophisticated for overlapping sections if needed.
          // For now, it sets the active section to the last one that intersects.
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
  }, [sectionRefs]); // Added sectionRefs to dependency array

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
            <div className="box about-box">
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
                <div key={idx} className="box experience-item">
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