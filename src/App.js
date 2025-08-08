import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Sun, Moon, Mail, Linkedin, Github, FileText, Briefcase, Code, 
  BookOpen, User, MessageSquare, Menu, X, ArrowUpRight, Terminal,
  Zap, Cpu, Database, Globe, Shield, Rocket 
} from 'lucide-react';
import './tailwind.css';

// Matrix Rain Effect Component
const MatrixRain = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for(let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = isDarkMode ? '#00ff41' : '#0066cc';
      ctx.font = fontSize + 'px monospace';
      
      for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 35);
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
    />
  );
};

// Floating Particles Component
const FloatingParticles = ({ isDarkMode }) => {
  const particlesRef = useRef(null);
  
  useEffect(() => {
    const container = particlesRef.current;
    const particles = [];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = `absolute w-1 h-1 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-purple-400'}`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animation = `float ${15 + Math.random() * 10}s infinite linear`;
      container.appendChild(particle);
      particles.push(particle);
    }
    
    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, [isDarkMode]);
  
  return <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-1" />;
};

// Enhanced Typewriter Effect
const TypewriterText = ({ text, delay = 100, initialDelay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }
    }, index === 0 ? initialDelay : delay);
    
    return () => clearTimeout(timeout);
  }, [index, text, delay, initialDelay]);

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
};

// 3D Skill Card Component
const SkillCard = ({ skill, index, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative p-3 sm:p-4 rounded-xl cursor-pointer overflow-hidden ${
        isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
      } border backdrop-blur-sm`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 15, 
        z: 50,
        boxShadow: isDarkMode 
          ? "0 25px 50px rgba(59, 130, 246, 0.25)" 
          : "0 25px 50px rgba(147, 51, 234, 0.25)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10 flex items-center space-x-2 sm:space-x-3">
        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-purple-500'}`} />
        <span className="font-medium text-sm sm:text-base">{skill}</span>
      </div>
    </motion.div>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ project, onClick, isDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative p-4 sm:p-6 rounded-2xl cursor-pointer overflow-hidden group ${
        isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
      } backdrop-blur-sm border ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      } h-full flex flex-col`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(project)}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />
      
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isDarkMode ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20' : 'bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20'
      } blur-sm`} />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} leading-tight`}>
            {project.name}
          </h3>
          <motion.div
            className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-green-400' : 'bg-green-500'} flex-shrink-0 ml-2`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        <p className={`text-xs sm:text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.company}
        </p>
        
        <p className={`text-xs sm:text-sm mb-4 flex-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} line-clamp-3`}>
          {project.description.split('.')[0]}.
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <motion.button
            className={`text-xs sm:text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} flex items-center group`}
            whileHover={{ x: 5 }}
          >
            View Details 
            <ArrowUpRight size={14} className="ml-1 group-hover:rotate-45 transition-transform duration-200" />
          </motion.button>
          
          {project.link && (
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`text-xs ${isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'} flex items-center`}
            >
              <Globe size={12} className="mr-1" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Project Modal Component
const ProjectModal = ({ project, onClose, isDarkMode }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      
      <motion.div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl ${
          isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
        } backdrop-blur-xl border ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        } shadow-2xl mx-4`}
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 sm:p-3 rounded-full ${
            isDarkMode ? 'bg-gray-700/80 text-gray-300 hover:bg-gray-600' : 'bg-gray-200/80 text-gray-700 hover:bg-gray-300'
          } backdrop-blur-sm transition-colors duration-200 z-10`}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={20} />
        </motion.button>
        
        <div className="pr-12 sm:pr-16">
          <motion.h3 
            className={`text-2xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${
              isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.name}
          </motion.h3>
          
          <motion.p 
            className={`text-base sm:text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.company}
          </motion.p>
          
          <motion.p 
            className={`text-base sm:text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className={`text-base sm:text-lg font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              <Cpu className="inline mr-2" size={20} />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.techStack.split(', ').map((tech, index) => (
                <motion.span
                  key={index}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.trim()}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {project.link && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                } shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base`}
              >
                <Rocket className="mr-2" size={18} />
                Launch Project
                <ArrowUpRight className="ml-2" size={18} />
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Blog Modal Component
const BlogModal = ({ onClose, isDarkMode }) => {
  const blogProfiles = [
    {
      name: "Medium",
      url: "https://medium.com/@lav13feb",
      icon: "📝",
      description: "In-depth technical articles"
    },
    {
      name: "Hashnode",
      url: "https://hashnode.com/@lavpranjale",
      icon: "🚀",
      description: "Development insights & tutorials"
    },
    {
      name: "Dev Community",
      url: "https://dev.to/lav_pranjale_4cdd421d464d",
      icon: "💻",
      description: "Community discussions & tips"
    }
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      
      <motion.div
        className={`relative w-full max-w-lg p-6 sm:p-8 rounded-3xl ${
          isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
        } backdrop-blur-xl border ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        } shadow-2xl mx-4`}
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isDarkMode ? 'bg-gray-700/80 text-gray-300 hover:bg-gray-600' : 'bg-gray-200/80 text-gray-700 hover:bg-gray-300'
          } z-10`}
        >
          <X size={20} />
        </button>
        
        <h3 className={`text-2xl sm:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r ${
          isDarkMode ? 'from-indigo-400 to-purple-400' : 'from-indigo-600 to-purple-600'
        } pr-8`}>
          <BookOpen className="inline mr-2" size={28} />
          My Blog Platforms
        </h3>
        
        <div className="space-y-4">
          {blogProfiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-100/50 hover:bg-gray-200/50'
              } group border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="flex items-center">
                <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">{profile.icon}</div>
                <div className="flex-1">
                  <h4 className={`text-base sm:text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {profile.name}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {profile.description}
                  </p>
                </div>
                <ArrowUpRight 
                  size={18} 
                  className={`transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`} 
                />
              </div>
            </motion.a>
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
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Mouse tracking for cursor effects (disabled on mobile)
  useEffect(() => {
    if (window.innerWidth > 768) {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced Intersection Observer for proper navigation highlighting
  useEffect(() => {
    const sections = [
      { ref: heroRef, id: 'hero' },
      { ref: experienceRef, id: 'experience' },
      { ref: projectsRef, id: 'projects' },
      { ref: skillsRef, id: 'skills' },
      { ref: blogsRef, id: 'blogs' },
      { ref: contactRef, id: 'contact' }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px', // Adjusted for better detection
      threshold: [0.1, 0.3, 0.5, 0.7]
    };
    
    const observerCallback = (entries) => {
      // Sort entries by intersection ratio to get the most visible section
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
      if (visibleSections.length > 0) {
        const mostVisible = visibleSections[0];
        setActiveSection(mostVisible.target.id);
      }
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Enhanced scroll handler for better navigation detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, id: 'hero' },
        { ref: experienceRef, id: 'experience' },
        { ref: projectsRef, id: 'projects' },
        { ref: skillsRef, id: 'skills' },
        { ref: blogsRef, id: 'blogs' },
        { ref: contactRef, id: 'contact' }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Escape key handler
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

  const resumeData = {
    name: "Lav Pranjale",
    summary: "JavaScript Developer with 5+ years of experience in building scalable, high-performance web and mobile applications using React, React Native, Node.js, and the MERN stack. Skilled in both frontend and backend development, with a strong focus on clean architecture, API integration, and performance optimization.",
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
          "Collaborated with clients to gather requirements and deliver tailored solutions, boosting client satisfaction by 20%",
          "Managed production releases, achieving zero critical issues and reducing downtime by 30%",
        ],
      },
    ],
    projects: [
      {
        name: "Harbura Health Application",
        company: "Harbura",
        description: "Built a secure health app for uploading and managing personal medical records. Implemented Smart Sorting, Effortless Uploads, and Auto-Sync with provider portals. Designed a Unified Family Hub to manage multiple users' records from one dashboard. Integrated a GPT-powered chatbot for real-time health record queries.",
        techStack: "React, TypeScript, Python, AWS, GPT APIs",
      },
      {
        name: "CGMPlus",
        company: "Webcubator Technologies",
        link: "play.google.com/store/apps/details?id=com.iwelhealth.cgmpal",
        description: "Developed a mobile app for weight loss and glucose control, integrated with real-time CGM devices, serving 1,000+ users. Enabled meal and exercise logging with 95% accuracy in calorie tracking. Designed intuitive graphs, improving glucose monitoring efficiency by 40%.",
        techStack: "React Native, Python, AWS S3, Firebase, Terra, Vital, SQL",
      },
      {
        name: "Clova Health",
        company: "Webcubator Technologies",
        link: "play.google.com/store/apps/details?id=com.iwell",
        description: "Built an AI-driven app for weight loss and glucose control, integrated with real-time CGM devices, supporting 1,000+ users. Enhanced UX, boosting user retention by 30% and supporting long-term health goals.",
        techStack: "React Native, Python, AWS S3, Firebase, Terra, Vital, SQL",
      },
      {
        name: "Rocco Finance",
        company: "Webcubator Technologies",
        description: "Built a mobile app providing personalized spending insights to reduce debt reliance by 40%. Enabled $100 wage advances, helping 50,000+ users access earnings before payday.",
        techStack: "React Native, Node.js, AWS S3, SQL, Firebase, Plaid, Payliance",
      },
      {
        name: "EnLaCancha",
        company: "Webcubator Technologies",
        link: "enlacancha.us/",
        description: "Built a learning platform for the Latino community, with 50,000+ active users accessing courses. Integrated Stripe for secure payments, increasing course enrollments by 20%.",
        techStack: "React JS, Node.js, AWS S3, Express.js, MongoDB, Stripe",
      },
      {
        name: "Planitnerd",
        company: "Webcubator Technologies",
        description: "Built a cross-platform app for trip planning, sharing, and travel hacking education, available on iOS and Android. Developed using Ionic Framework and Angular, achieving 1,000+ downloads.",
        techStack: "Ionic Framework, Angular 9, Node.js, Express.js, MongoDB, AWS",
      }
    ],
    skills: {
      frontend: ["React Native", "React.js", "HTML", "CSS", "TypeScript"],
      backend: ["Node.js", "Express.js"],
      databases: ["MySQL", "MongoDB"],
      cloudDevOpsSkills: ["Firebase", "AWS EC2", "AWS S3", "AWS CloudFront", "Git", "GitHub"],
      projectManagement: ["Agile methodologies", "Sprint planning", "Task delegation", "Requirement Gathering"],
      additionalSkills: ["RESTful API Integration", "Responsive Design", "Cross-functional Team Collaboration"],
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
        description: "Learn to build a native module in React Native using Kotlin and Swift to fetch battery level.",
      },
      {
        title: "Scaling React Native to 1M+ Users",
        platform: "Hashnode",
        link: "https://scaling-mobile-react-native-insights.hashnode.dev/lessons-from-scaling-a-react-native-app-to-1m-users",
        description: "Hard-earned lessons from scaling a React Native app beyond 1 million users.",
      },
    ],
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80;
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className={`min-h-screen font-inter relative overflow-x-hidden ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    } transition-colors duration-500`}>
      
      {/* Custom Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: ${isDarkMode ? '#1f2937' : '#f3f4f6'};
          }
          
          ::-webkit-scrollbar-thumb {
            background: ${isDarkMode ? '#4f46e5' : '#6366f1'};
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: ${isDarkMode ? '#6366f1' : '#4f46e5'};
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }
          
          .nav-link-active {
            position: relative;
            color: #6366f1 !important;
          }
          
          .nav-link-active::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            background: #6366f1;
            border-radius: 50%;
            animation: pulse-glow 2s infinite;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      {/* Background Effects - Hidden on small screens for performance */}
      <div className="hidden sm:block">
        <MatrixRain isDarkMode={isDarkMode} />
        <FloatingParticles isDarkMode={isDarkMode} />
      </div>
      
      {/* Custom Cursor - Only on desktop */}
      <div
        className={`hidden lg:block fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference ${
          isDarkMode ? 'bg-white' : 'bg-black'
        } transition-transform duration-150 ease-out`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      {/* Enhanced Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 py-3 sm:py-4 transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gray-900/90 border-gray-700/50' 
            : 'bg-white/90 border-gray-200/50'
        } backdrop-blur-xl border-b h-16 sm:h-20`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-full">
          {/* Logo */}
          <motion.div
            className="text-xl sm:text-2xl font-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              &lt;Lav
            </span>
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              .Dev/&gt;
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { id: 'hero', icon: User, label: 'About' },
              { id: 'experience', icon: Briefcase, label: 'Experience' },
              { id: 'projects', icon: Code, label: 'Projects' },
              { id: 'skills', icon: Zap, label: 'Skills' },
              { id: 'blogs', icon: BookOpen, label: 'Blogs' },
              { id: 'contact', icon: MessageSquare, label: 'Contact' }
            ].map(({ id, icon: Icon, label }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? 'nav-link-active'
                    : isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                } hover:bg-blue-500/10`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={14} />
                <span className="text-sm font-medium">{label}</span>
              </motion.button>
            ))}
            
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2.5 xl:p-3 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 text-yellow-400' 
                  : 'bg-gray-200/50 hover:bg-gray-300/50 text-indigo-600'
              } backdrop-blur-sm border ${
                isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <motion.div
              className="relative w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.button
                onClick={toggleDarkMode}
                className={`absolute inset-0 p-2 rounded-full ${
                  isDarkMode ? 'text-yellow-400' : 'text-indigo-600'
                }`}
                animate={{
                  opacity: 1,
                  rotate: isDarkMode ? 0 : 180,
                }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </motion.div>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`lg:hidden px-4 sm:px-6 py-4 border-t ${
                isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {[
                  { id: 'hero', icon: User, label: 'About' },
                  { id: 'experience', icon: Briefcase, label: 'Experience' },
                  { id: 'projects', icon: Code, label: 'Projects' },
                  { id: 'skills', icon: Zap, label: 'Skills' },
                  { id: 'blogs', icon: BookOpen, label: 'Blogs' },
                  { id: 'contact', icon: MessageSquare, label: 'Contact' }
                ].map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 text-left ${
                      activeSection === id
                        ? 'text-blue-400 bg-blue-500/10'
                        : isDarkMode 
                          ? 'text-gray-300 hover:bg-gray-800/50' 
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content with consistent spacing */}
      <main className="relative z-10 pt-16 sm:pt-20">
        {/* Hero Section */}
        <motion.section
          id="hero"
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
          style={{ y: y1 }}
        >
          <div className="container mx-auto text-center relative z-10 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 leading-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse block">
                  <TypewriterText text="Lav" delay={200} />
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 block">
                  <TypewriterText text="Pranjale" delay={200} initialDelay={800} />
                </span>
              </motion.h1>

              <motion.div
                className="mb-6 sm:mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <TypewriterText 
                    text="Full Stack JavaScript Developer" 
                    delay={100} 
                    initialDelay={2000}
                    className="block"
                  />
                </div>
                
                <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-lg ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  {['React Native', 'React.js', 'Node.js', 'MERN Stack'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full border ${
                        isDarkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-white/50'
                      } backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.p
                className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                {resumeData.summary}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.8 }}
              >
                <motion.a
                  href={`mailto:${resumeData.contact.email}`}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-2">
                    <Mail size={18} />
                    <span>Get In Touch</span>
                  </div>
                </motion.a>

                <motion.a
                  href={`https://${resumeData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-2xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 text-gray-100 border border-gray-700 hover:bg-gray-700/50' 
                      : 'bg-white/50 text-gray-900 border border-gray-300 hover:bg-gray-100/50'
                  } backdrop-blur-sm shadow-xl`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Github size={18} />
                    <span>View Work</span>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              <motion.div
                className={`w-6 h-10 border-2 rounded-full ${
                  isDarkMode ? 'border-gray-600' : 'border-gray-400'
                } relative cursor-pointer`}
                onClick={() => scrollToSection('experience')}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 rounded-full ${
                    isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                  }`}
                  animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section - Standard spacing */}
        <motion.section
          id="experience"
          ref={experienceRef}
          className="py-24 px-4 sm:px-6 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-500"
                whileInView={{ scale: [0.8, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Experience
              </motion.h2>
              <motion.div 
                className={`w-16 sm:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-green-400 to-blue-500`}
                initial={{ width: 0 }}
                whileInView={{ width: window.innerWidth > 640 ? 96 : 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <div className="space-y-12">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative p-6 sm:p-8 md:p-12 rounded-3xl transition-all duration-500 group ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50' 
                      : 'bg-white/50 border border-gray-200/50 hover:border-blue-400/50'
                  } backdrop-blur-sm shadow-xl hover:shadow-2xl`}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-2 leading-tight">
                          {exp.title}
                        </h3>
                        <p className={`text-base sm:text-lg font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {exp.company}
                        </p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-200/50 text-gray-700'
                      } backdrop-blur-sm border ${
                        isDarkMode ? 'border-gray-600/50' : 'border-gray-300/50'
                      } flex-shrink-0`}>
                        {exp.duration.split(' | ')[0]}
                      </span>
                    </div>
                    
                    <div className="grid gap-4">
                      {exp.description.map((desc, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`} />
                          <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section - Standard spacing */}
        <motion.section
          id="projects"
          ref={projectsRef}
          className="py-24 px-4 sm:px-6 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ y: y2 }}
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-orange-500"
                whileInView={{ scale: [0.8, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Projects
              </motion.h2>
              <motion.div 
                className={`w-16 sm:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-orange-500`}
                initial={{ width: 0 }}
                whileInView={{ width: window.innerWidth > 640 ? 96 : 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p 
                className={`text-base sm:text-lg mt-6 max-w-2xl mx-auto px-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                A showcase of innovative solutions I've built, from healthcare platforms to fintech applications
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {resumeData.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={setModalProject}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Section - Standard spacing */}
        <motion.section
          id="skills"
          ref={skillsRef}
          className="py-24 px-4 sm:px-6 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                whileInView={{ scale: [0.8, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Skills
              </motion.h2>
              <motion.div 
                className={`w-16 sm:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-red-500`}
                initial={{ width: 0 }}
                whileInView={{ width: window.innerWidth > 640 ? 96 : 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <div className="grid gap-8">
              {Object.entries(resumeData.skills).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  className={`p-6 sm:p-8 rounded-3xl transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border border-gray-700/50' 
                      : 'bg-white/50 border border-gray-200/50'
                  } backdrop-blur-sm shadow-xl`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, y: -3 }}
                >
                  <motion.h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                      {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                  </motion.h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, skillIndex) => (
                      <SkillCard
                        key={skillIndex}
                        skill={skill}
                        index={skillIndex}
                        isDarkMode={isDarkMode}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Blogs Section - Fixed title cutting and standard spacing */}
        <motion.section
          id="blogs"
          ref={blogsRef}
          className="py-24 px-4 sm:px-6 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 leading-none overflow-visible"
                whileInView={{ scale: [0.8, 1.05, 1] }}
                transition={{ duration: 0.6 }}
                style={{ 
                  lineHeight: '0.9',
                  paddingBottom: '0.1em'
                }}
              >
                Blogs
              </motion.h2>
              <motion.div 
                className={`w-16 sm:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-400 to-pink-500`}
                initial={{ width: 0 }}
                whileInView={{ width: window.innerWidth > 640 ? 96 : 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p 
                className={`text-base sm:text-lg mt-6 max-w-2xl mx-auto px-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                Sharing insights, tutorials, and experiences from my development journey
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {resumeData.blogs.map((blog, index) => (
                <motion.article
                  key={index}
                  className={`group p-8 rounded-3xl transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50' 
                      : 'bg-white/50 border border-gray-200/50 hover:border-indigo-400/50'
                  } backdrop-blur-sm shadow-xl hover:shadow-2xl cursor-pointer h-full flex flex-col`}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => window.open(blog.link, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{index === 0 ? '📝' : index === 1 ? '⚛️' : '🚀'}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                      isDarkMode ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {blog.platform}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-200 leading-tight flex-shrink-0">
                    {blog.title}
                  </h3>
                  
                  <p className={`text-base leading-relaxed mb-6 flex-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      Read Article
                    </span>
                    <ArrowUpRight 
                      size={18} 
                      className="text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" 
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setIsBlogModalOpen(true)}
                className={`inline-flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600'
                } text-white shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="mr-2" size={18} />
                Explore All Platforms
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section - Standard spacing */}
        <motion.section
          id="contact"
          ref={contactRef}
          className="py-24 px-4 sm:px-6 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-purple-600"
                whileInView={{ scale: [0.8, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Let's Connect
              </motion.h2>
              <motion.div 
                className={`w-16 sm:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-red-400 to-purple-600`}
                initial={{ width: 0 }}
                whileInView={{ width: window.innerWidth > 640 ? 96 : 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <motion.div
              className={`p-12 rounded-3xl text-center transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-gray-800/50 border border-gray-700/50' 
                  : 'bg-white/50 border border-gray-200/50'
              } backdrop-blur-sm shadow-2xl`}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <motion.p 
                className={`text-xl md:text-2xl mb-12 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                variants={itemVariants}
              >
                Ready to build something amazing together? Let's turn your ideas into reality.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.a
                  href={`mailto:${resumeData.contact.email}`}
                  className={`group flex items-center justify-center space-x-4 p-6 rounded-2xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30' 
                      : 'bg-blue-50 hover:bg-blue-100 border border-blue-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  variants={itemVariants}
                >
                  <Mail size={24} className="text-blue-400 flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className={`font-semibold text-base truncate ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {resumeData.contact.email}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${resumeData.contact.phone}`}
                  className={`group flex items-center justify-center space-x-4 p-6 rounded-2xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-green-500/10 hover:bg-green-500/20 border border-green-500/30' 
                      : 'bg-green-50 hover:bg-green-100 border border-green-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  variants={itemVariants}
                >
                  <div className="text-green-400 text-2xl flex-shrink-0">📱</div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className={`font-semibold text-base ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {resumeData.contact.phone}
                    </div>
                  </div>
                </motion.a>
              </div>

              <motion.div 
                className="flex justify-center space-x-8"
                variants={itemVariants}
              >
                {[
                  { 
                    href: `https://${resumeData.contact.linkedin}`, 
                    icon: Linkedin, 
                    label: 'LinkedIn',
                    color: 'text-blue-400'
                  },
                  { 
                    href: `https://${resumeData.contact.github}`, 
                    icon: Github, 
                    label: 'GitHub',
                    color: isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }
                ].map(({ href, icon: Icon, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-2xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                        : 'bg-gray-200/50 hover:bg-gray-300/50'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={32} className={`${color} group-hover:scale-110 transition-transform duration-200`} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className={`text-center py-12 border-t ${
            isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
          } backdrop-blur-sm`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className={`text-lg ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} Lav Pranjale. Crafted with 
            <span className="text-red-500 mx-2">❤️</span>
            and lots of ☕
          </p>
        </motion.footer>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {modalProject && (
          <ProjectModal
            project={modalProject}
            onClose={() => setModalProject(null)}
            isDarkMode={isDarkMode}
          />
        )}
        {isBlogModalOpen && (
          <BlogModal
            onClose={() => setIsBlogModalOpen(false)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
