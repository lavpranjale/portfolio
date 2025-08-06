// This file centralizes all your portfolio data.

const joiningYear = 2020;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - joiningYear;
const experienceString = experienceYears > 1 ? `${experienceYears}+ Years` : `${experienceYears} Year`;

export const portfolioData = {
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
  blogs: [
    {
      title: 'React Native Performance Optimization: What Actually Made a Difference',
      platform: 'Medium',
      url: 'https://medium.com/@lav13feb/react-native-performance-optimization-what-actually-made-a-difference-af548af37a08',
      description: `Optimizing performance isn’t about using 100 different tools. It’s about small, intentional improvements that compound over time. In this post, I’ll skip the theory and share real techniques that made a visible difference in performance across React Native apps I’ve built or maintained.`,
    },
    {
      title: 'Lessons from Scaling a React Native App to 1M+ Users',
      platform: 'Hashnode',
      url: 'https://scaling-mobile-react-native-insights.hashnode.dev/lessons-from-scaling-a-react-native-app-to-1m-users',
      description: `When you’re building for a few hundred users, development feels straightforward: add a feature, test it, release it, repeat. But when your app crosses 1 million users, that simplicity disappears — fast. Suddenly, every decision has scale implications, and tiny cracks in your architecture become glaring system faults.`,
    },
    {
      title: 'Build a Native Module in React Native (Battery Level Example for Android & iOS)',
      platform: 'dev.to',
      url: 'https://dev.to/lav_pranjale_4cdd421d464d/build-a-native-module-in-react-native-battery-level-example-for-android-ios-46i4',
      description: `In this guide, you’ll learn how to create your own native module in React Native — using Kotlin for Android and Swift for iOS — to fetch the battery level of the device.
You'll understand how the React Native bridge works and how JavaScript can talk directly to platform-native code.`,
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