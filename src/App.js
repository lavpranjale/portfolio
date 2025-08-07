import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Mail, Linkedin, Github, FileText, Briefcase, Code, BookOpen, User, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import './tailwind.css'; // Importing a locally generated, optimized CSS file

// Helper function to simulate text typing
const TypewriterText = ({ text, delay = 100, initialDelay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }
    }, delay);
    return () => clearTimeout(timeout1);
  }, [index, text, delay, initialDelay]);

  return <span className="font-mono">{displayedText}</span>;
};

// New Project Card Component
const ProjectCard = ({ project, onClick, isDarkMode }) => {
  return (
    <motion.div
      className={`p-6 md:p-8 rounded-xl shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-pink-500' : 'bg-white border-gray-200 hover:shadow-lg hover:border-pink-400'} border flex flex-col justify-between`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-pink-400 mb-2">
          {project.name}
        </h3>
        <p className={`mb-4 text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{project.company}</p>
        <p className={`mb-4 text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          {project.description.split('. ')[0]}.
        </p>
      </div>
      <div className="mt-4 flex flex-col items-start space-y-2">
        <button
          onClick={() => onClick(project)}
          className={`text-pink-400 hover:text-pink-600 transition-colors duration-200 flex items-center group`}
        >
          Read more
          <ArrowUpRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
        {project.link && (
          <a
            href={`https://${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center group`}
          >
            View Live
            <ArrowUpRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// New Project Modal Component
const ProjectModal = ({ project, onClose, isDarkMode }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-10 rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-200`}
        >
          <X size={24} />
        </button>
        <h3 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4">{project.name}</h3>
        <p className={`mb-4 text-base md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{project.company}</p>
        <p className={`mb-6 text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{project.description}</p>
        <p className={`text-sm font-mono ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
          <span className="font-semibold">Tech Stack:</span> {project.techStack}
        </p>
        {project.link && (
          <div className="mt-6">
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              View Live Project
              <ArrowUpRight size={20} className="ml-2" />
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// New Blog Modal Component
const BlogModal = ({ onClose, isDarkMode }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

const blogProfiles = [
  {
    name: "Medium",
    url: "https://medium.com/@lav13feb",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg"
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@lavpranjale",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hashnode.svg"
  },
  {
    name: "Dev Community",
    url: "https://dev.to/lav_pranjale_4cdd421d464d",
    icon: "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
  }
];


  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`relative w-full max-w-md p-6 md:p-8 rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-200`}
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-6 text-center">Explore My Blogs</h3>
        <p className={`mb-6 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Check out my articles and posts on these platforms.
        </p>
        <div className="space-y-4">
          {blogProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} group`}
            >
              <img src={profile.icon} alt={`${profile.name} logo`} className="w-8 h-8 mr-4 rounded-full" />
              <span className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{profile.name}</span>
              <ArrowUpRight size={20} className={`ml-auto transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};


// Main App Component
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false); // New state for the blog modal

  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close modals when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (modalProject) setModalProject(null);
        if (isBlogModalOpen) setIsBlogModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [modalProject, isBlogModalOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--scrollbar-track', '#2d3748');
      root.style.setProperty('--scrollbar-thumb', '#4a5568');
      root.style.setProperty('--scrollbar-thumb-hover', '#6b7280');
      root.style.setProperty('--bg-pattern-color', 'rgba(255, 255, 255, 0.05)');
    } else {
      root.style.setProperty('--scrollbar-track', '#e2e8f0');
      root.style.setProperty('--scrollbar-thumb', '#a0aec0');
      root.style.setProperty('--scrollbar-thumb-hover', '#718096');
      root.style.setProperty('--bg-pattern-color', 'rgba(0, 0, 0, 0.05)');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (heroRef.current) observer.observe(heroRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (blogsRef.current) observer.observe(blogsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (blogsRef.current) observer.unobserve(blogsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  const resumeData = {
    name: "Lav Pranjale",
    summary: "JavaScript Developer with 5+ years of experience in building scalable, high-performance web and mobile applications using React, React Native, Node.js, and the MERN stack. Skilled in both frontend and backend development, with a strong focus on clean architecture, API integration, and performance optimization. Proven track record of managing end-to-end project execution, collaborating with cross-functional teams, and maintaining effective client communication to deliver on-time, high-quality solutions tailored to business needs.",
    contact: {
      email: "lav13feb@gmail.com",
      phone: "9669662926",
      linkedin: "linkedin.com/in/lav-pranjale-628559147",
      github: "github.com/lavpranjale",
    },
    experience: [
      {
        title: "React Developer (Freelancer)",
        company: "Harbura",
        duration: "03/2025 - 05/2025 | Remote",
        description: [
          "Built user interfaces using React with TypeScript for a health-focused application",
          "Integrated RESTful APIs developed in Python with AWS services",
          "Enabled users to upload, manage, and view health documents securely",
          "Leveraged GPT technologies to deliver intelligent, personalized user experiences",
        ],
      },
      {
        title: "Full Stack JavaScript Developer (React Native | MERN Stack)",
        company: "Webcubator Technologies",
        duration: "01/2020 - 03/2025 | Pune, India",
        description: [
          "Engineered scalable applications using MERN stack and React Native, supporting 10,000+ users with 99.9% uptime",
          "Collaborated with clients to gather requirements and deliver tailored solutions, boosting client satisfaction by 20% and meeting 100% of deadlines",
          "Managed production releases, achieving zero critical issues and reducing downtime by 30%",
        ],
      },
    ],
    projects: [
      {
        name: "Harbura Health Application",
        company: "Harbura",
        description: "Built a secure health app for uploading and managing personal medical records. Implemented Smart Sorting, Effortless Uploads, and Auto-Sync with provider portals. Designed a Unified Family Hub to manage multiple users' records from one dashboard. Integrated a GPT-powered chatbot for real-time health record queries.",
        techStack: "React (TypeScript), Python, AWS, GPT APIs",
      },
      {
        name: "CGMPlus",
        company: "Webcubator Technologies",
        link: "play.google.com/store/apps/details?id=com.iwelhealth.cgmpal",
        description: "Developed a mobile app for weight loss and glucose control, integrated with real-time CGM devices, serving 1,000+ users. Enabled meal and exercise logging with 95% accuracy in calorie tracking. Designed intuitive graphs, improving glucose monitoring efficiency by 40%. Built a doctor dashboard to monitor 100+ users in real-time. Improved UX, resulting in a 30% boost in retention and goal adherence.",
        techStack: "React Native, Python | Services: AWS (S3), Firebase, Terra, Vital, SQL",
      },
      {
        name: "Clova Health",
        company: "Webcubator Technologies",
        link: "play.google.com/store/apps/details?id=com.iwell",
        description: "Built an AI-driven app for weight loss and glucose control, integrated with real-time CGM devices, supporting 1,000+ users. Enabled meal/exercise logging with 95% calorie tracking accuracy. Designed intuitive graphs, improving glucose monitoring efficiency by 40%. Developed a doctor dashboard to monitor 100+ users in real time. Enhanced UX, boosting user retention by 30% and supporting long-term health goals.",
        techStack: "React Native, Python | Services: AWS (S3), Firebase, Terra, Vital, SQL",
      },
      {
        name: "Rocco Finance",
        company: "Webcubator Technologies",
        description: "Built a mobile app providing personalized spending insights to reduce debt reliance by 40%. Enabled $100 wage advances, helping 50,000+ users access earnings before payday. Reduced overdraft/payday loan usage with interest-free advances, increasing retention by 25%. Delivered cash flow insights, lowering debt-related stress by 30% and improving financial wellness.",
        techStack: "React Native, Node.js | Services: AWS (S3), SQL, Firebase, Plaid, Payliance, Zendesk",
      },
      {
        name: "EnLaCancha",
        company: "Webcubator Technologies",
        link: "enlacancha.us/",
        description: "Built a learning platform for the Latino community, with 50,000+ active users accessing courses. Integrated Stripe for secure payments, increasing course enrollments by 20%. Used MongoDB for real-time data storage, improving retrieval speeds by 40%. Hosted content on AWS (S3) with 99.9% uptime and scalable infrastructure. Delivered a fast, responsive UI using React JS and Node.js, reducing load times by 30%.",
        techStack: "React JS, Node.js | Services: AWS (S3), Express.js, MongoDB, Stripe",
      },
      {
        name: "Planitnerd",
        company: "Webcubator Technologies",
        description: "Built a cross-platform app for trip planning, sharing, and travel hacking education, available on iOS and Android. Developed using Ionic Framework (5) and Angular 9, achieving 1,000+ downloads. Added real-time collaboration, improving group planning efficiency by 50%. Implemented in-app travel hacking tips, boosting user engagement by 30%. Hosted on AWS (ECS, S3, CloudFront), improving delivery speed by 40% and ensuring 99.9% uptime.",
        techStack: "Ionic Framework (5), Angular 9, Node.js, Express.js, MongoDB | Services: AWS (ECS, S3, CloudFront, Elastic IP)",
      },
      {
        name: "Palatable Restaurant",
        company: "Webcubator Technologies",
        description: "Built a cross-platform app for restaurant owners to manage orders, deals, menus, and profiles, used by 10,000+ active users on iOS and Android. Reduced order processing time by 40% by providing efficient order management tools. Implemented real-time menu management, reducing menu change errors by 25%. Integrated Firebase for real-time sync, improving order tracking and customer engagement.",
        techStack: "React Native, Firebase | Services: AWS (EC2, S3, CloudFront)",
      },
    ],
    skills: {
      frontend: ["React Native", "React.js", "HTML", "CSS","TypeScript"],
      backend: ["Node.js", "Express.js"],
      databases: ["MySQL", "MongoDB"],
      cloudDevOpsSkills:[
  "Firebase",
  "AWS EC2",
  "AWS S3",
  "AWS CloudFront",
  "Git",
  "GitHub"
],
      projectManagement: ["Agile methodologies", "Sprint planning", "Task delegation","Requirement Gathering","Client Communication"],
      AdditionalSkills: [
  "RESTful API Integration",
  "Responsive Design",
  "Cross-functional Team Collaboration"
],
    },
    blogs: [
      {
        title: "Real React Native Performance Wins",
        platform: "Medium",
        link: "https://medium.com/@lav13feb/react-native-performance-optimization-what-actually-made-a-difference-af548af37a08",
        description: "Practical ways I boosted performance in real-world React Native apps across fintech, healthcare, and e-commerce.",
      },
      {
        title: "Create a React Native Module",
        platform: "Dev.to",
        link: "https://dev.to/lav_pranjale_4cdd421d464d/build-a-native-module-in-react-native-battery-level-example-for-android-ios-46i4",
        description: "Learn to build a native module in React Native using Kotlin and Swift to fetch battery level — and understand how JS bridges to native code.",
      },
      {
        title: "Scaling React Native to 1M+ Users",
        platform: "Hashnode",
        link: "https://scaling-mobile-react-native-insights.hashnode.dev/lessons-from-scaling-a-react-native-app-to-1m-users",
        description: "Hard-earned lessons from scaling a React Native app beyond 1 million users — beyond theory, into real-world challenges and solutions.",
      },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen font-inter ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-500 relative`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: var(--scrollbar-track);
          }
          ::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: var(--scrollbar-thumb-hover);
          }
          .bg-pattern {
            background-image: radial-gradient(var(--bg-pattern-color) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          .nav-link-active {
            position: relative;
            color: #6366f1;
          }
          .nav-link-active::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #6366f1;
            animation: underline-grow 0.3s ease-out forwards;
          }
          @keyframes underline-grow {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}
      </style>

      {/* Sticky Navigation Bar */}
      <motion.nav
        className={`sticky top-0 z-40 w-full py-4 shadow-lg ${isDarkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} transition-colors duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {resumeData.name.split(' ')[0]}<span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>.Dev</span>
          </motion.a>
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li><button onClick={() => scrollToSection('hero')} className={`font-medium ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 ${activeSection === 'hero' ? 'nav-link-active' : ''}`}><User className="inline-block mr-1" size={18} /> About</button></li>
              <li><button onClick={() => scrollToSection('experience')} className={`font-medium ${isDarkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} transition-colors duration-300 ${activeSection === 'experience' ? 'nav-link-active' : ''}`}><Briefcase className="inline-block mr-1" size={18} /> Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')} className={`font-medium ${isDarkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors duration-300 ${activeSection === 'projects' ? 'nav-link-active' : ''}`}><Code className="inline-block mr-1" size={18} /> Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')} className={`font-medium ${isDarkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'} transition-colors duration-300 ${activeSection === 'skills' ? 'nav-link-active' : ''}`}><FileText className="inline-block mr-1" size={18} /> Skills</button></li>
              <li><button onClick={() => scrollToSection('blogs')} className={`font-medium ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300 ${activeSection === 'blogs' ? 'nav-link-active' : ''}`}><BookOpen className="inline-block mr-1" size={18} /> Blogs</button></li>
              <li><button onClick={() => scrollToSection('contact')} className={`font-medium ${isDarkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-600'} transition-colors duration-300 ${activeSection === 'contact' ? 'nav-link-active' : ''}`}><MessageSquare className="inline-block mr-1" size={18} /> Contact</button></li>
            </ul>
            <motion.button onClick={toggleDarkMode} className={`p-2 rounded-full shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'}`} aria-label="Toggle dark/light mode" whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }} animate={{ y: [0, -5, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}>{isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</motion.button>
          </div>
          <div className="flex items-center lg:hidden">
            <motion.button onClick={toggleDarkMode} className={`p-2 rounded-full shadow-lg transition-all duration-300 mr-4 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-indigo-700'}`} aria-label="Toggle dark/light mode" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>{isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</motion.button>
            <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className={`lg:hidden px-4 py-2 mt-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <ul className="flex flex-col space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className={`w-full text-left py-2 px-4 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300 ${activeSection === 'hero' ? 'text-blue-400' : ''}`}><User className="inline-block mr-2" size={18} /> About</button></li>
                <li><button onClick={() => scrollToSection('experience')} className={`w-full text-left py-2 px-4 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300 ${activeSection === 'experience' ? 'text-green-400' : ''}`}><Briefcase className="inline-block mr-2" size={18} /> Experience</button></li>
                <li><button onClick={() => scrollToSection('projects')} className={`w-full text-left py-2 px-4 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300 ${activeSection === 'projects' ? 'text-pink-400' : ''}`}><Code className="inline-block mr-2" size={18} /> Projects</button></li>
                <li><button onClick={() => scrollToSection('skills')} className={`w-full text-left py-2 px-4 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300 ${activeSection === 'skills' ? 'text-yellow-400' : ''}`}><FileText className="inline-block mr-2" size={18} /> Skills</button></li>
                <li><button onClick={() => scrollToSection('blogs')} className={`w-full text-left py-2 px-4 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300 ${activeSection === 'blogs' ? 'text-indigo-400' : ''}`}><BookOpen className="inline-block mr-2" size={18} /> Blogs</button></li>
                <li><button onClick={() => scrollToSection('contact')} className={`w-full text-left py-2 px-4 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300 ${activeSection === 'contact' ? 'text-red-400' : ''}`}><MessageSquare className="inline-block mr-2" size={18} /> Contact</button></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="container mx-auto px-4 md:px-8 py-8 max-w-4xl bg-pattern">
        {/* Hero Section */}
        <motion.section id="hero" ref={heroRef} className="text-center py-16 md:py-24" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.5 }}>
            <TypewriterText text={resumeData.name} />
          </motion.h1>
          <motion.p className={`text-xl md:text-3xl font-light mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
            <TypewriterText text="Senior JavaScript Developer | 5+ Years Experience in React Native, React.js, MERN Stack | Scalable Mobile & Web App
Development Expert" delay={50} initialDelay={1.5} />
          </motion.p>
          <motion.p className={`text-base md:text-lg leading-relaxed max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 2.5 }}>
            {resumeData.summary}
          </motion.p>
          <motion.div className="mt-10 flex flex-wrap justify-center gap-4 md:space-x-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 0.8 }}>
            <motion.a href={`mailto:${resumeData.contact.email}`} className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 text-sm md:text-base" whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}>
              <Mail size={20} /> <span>Email Me</span>
            </motion.a>
            <motion.a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 text-sm md:text-base" whileHover={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)" }}>
              <Linkedin size={20} /> <span>LinkedIn</span>
            </motion.a>
            <motion.a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 text-sm md:text-base ${isDarkMode ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`} whileHover={{ boxShadow: `0 0 20px ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}` }}>
              <Github size={20} /> <span>GitHub</span>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section id="experience" ref={experienceRef} className={`py-16 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">Experience</h2>
          <div className="space-y-8 md:space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div key={index} className={`p-6 md:p-8 rounded-xl shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-blue-500' : 'bg-white border-gray-200 hover:shadow-lg hover:border-blue-400'} border`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.2 }} whileHover={{ y: -5 }}>
                <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
                <p className={`text-base md:text-lg mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>{exp.company} | {exp.duration}</p>
                <ul className={`list-disc list-inside space-y-2 text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  {exp.description.map((desc, i) => (<li key={i}>{desc}</li>))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" ref={projectsRef} className={`py-16 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={setModalProject} isDarkMode={isDarkMode} />
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" ref={skillsRef} className={`py-16 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(resumeData.skills).map(([category, skills], index) => (
              <motion.div key={index} className={`p-6 md:p-8 rounded-xl shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-yellow-500' : 'bg-white border-gray-200 hover:shadow-lg hover:border-yellow-400'} border`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
                <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skills.map((skill, i) => (<motion.span key={i} className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`} whileHover={{ scale: 1.1, rotate: 5, boxShadow: isDarkMode ? "0 0 10px rgba(252, 211, 77, 0.4)" : "0 0 10px rgba(245, 158, 11, 0.4)" }} whileTap={{ scale: 0.9 }}>{skill}</motion.span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section id="blogs" ref={blogsRef} className={`py-16 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-600">Blogs</h2>
          <p className={`text-center mb-8 text-base md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Here are some of my thoughts and insights published on various platforms.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.blogs.map((blog, index) => (
              <motion.div key={index} className={`p-6 md:p-8 rounded-xl shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-indigo-500' : 'bg-white border-gray-200 hover:shadow-lg hover:border-indigo-400'} border`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
                <h3 className="text-xl md:text-2xl font-semibold text-indigo-400 mb-2">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{blog.title}</a>
                </h3>
                <p className={`mb-2 text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Platform: {blog.platform}</p>
                <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{blog.description}</p>
              </motion.div>
            ))}
            <motion.div className={`p-6 md:p-8 rounded-xl shadow-xl text-center flex flex-col justify-center items-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: resumeData.blogs.length * 0.1 }} whileHover={{ y: -5 }}>
              <p className={`text-base md:text-lg mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Want to see more of my insights?</p>
              <button onClick={() => setIsBlogModalOpen(true)} className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">Explore More Blogs</button>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" ref={contactRef} className={`py-16 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-600">Get In Touch</h2>
          <div className={`p-6 md:p-8 rounded-xl shadow-xl text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border max-w-2xl mx-auto`}>
            <p className={`text-base md:text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="flex flex-col space-y-4 items-center">
              <a href={`mailto:${resumeData.contact.email}`} className={`flex items-center space-x-3 text-lg md:text-xl ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors duration-300`}>
                <Mail size={24} /> <span>{resumeData.contact.email}</span>
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className={`flex items-center space-x-3 text-lg md:text-xl ${isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'} transition-colors duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.75-3.75A19.79 19.79 0 0 1 2.92 2.18 2 2 0 0 1 4.9 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-2.17 2.17 12.5 12.5 0 0 0-1.85 1.85 12.5 12.5 0 0 0 1.85 1.85 2 2 0 0 1 2.17 2.17 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <span>{resumeData.contact.phone}</span>
              </a>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <motion.a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} transition-colors duration-300`} whileHover={{ scale: 1.2, rotate: 10, boxShadow: isDarkMode ? "0 0 15px rgba(168, 85, 247, 0.6)" : "0 0 15px rgba(139, 92, 246, 0.4)" }} whileTap={{ scale: 0.9 }}>
                <Linkedin size={28} />
              </motion.a>
              <motion.a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} transition-colors duration-300`} whileHover={{ scale: 1.2, rotate: -10, boxShadow: isDarkMode ? "0 0 15px rgba(255, 255, 255, 0.3)" : "0 0 15px rgba(0, 0, 0, 0.2)" }} whileTap={{ scale: 0.9 }}>
                <Github size={28} />
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer className={`text-center py-8 mt-16 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </motion.footer>
      </main>

      <AnimatePresence>
        {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} isDarkMode={isDarkMode} />}
        {isBlogModalOpen && <BlogModal onClose={() => setIsBlogModalOpen(false)} isDarkMode={isDarkMode} />}
      </AnimatePresence>
    </div>
  );
};

export default App;