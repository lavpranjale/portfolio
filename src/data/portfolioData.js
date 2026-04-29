export const portfolioData = {
  name: 'Lav Pranjale',
  title: 'Senior Software Engineer – React, React Native & Node.js (AWS)',
  summary: 'Senior Full-Stack Engineer with 6+ years building production-grade mobile and web systems across fintech, healthcare, e-learning, and SaaS. Specialized in React Native and Node.js on AWS, with a consistent record of shipping scalable products to 50,000+ users at 99.9% uptime. Led cross-functional teams of 4–6 engineers, improved user retention by 25%, and reduced backend latency by 40% through architectural decisions and performance optimization.',
  contact: {
    email: 'lav13feb@gmail.com',
    phone: '+919669662926',
    location: 'Indore, India',
    linkedin: 'https://www.linkedin.com/in/lav-pranjale-628559147',
    github: 'https://github.com/lavpranjale',
    portfolio: 'https://lavpranjale.github.io/portfolio/'
  },
  skills: {
    'Languages & Frontend': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    'Frameworks & Libraries': ['React', 'React Native', 'Next.js', 'Redux', 'Redux Toolkit'],
    'Backend & APIs': ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'OAuth', 'WebSocket', 'Server-Side Rendering'],
    'Databases': ['MongoDB', 'Mongoose', 'MySQL', 'Query Optimization', 'Data Modeling'],
    'Cloud & DevOps': ['AWS EC2', 'AWS ECS', 'AWS Lambda', 'AWS S3', 'CloudFront', 'Docker', 'Firebase', 'CI/CD (GitHub Actions)'],
    'Architecture': ['Microservices', 'Serverless', 'Event-Driven Architecture', 'Distributed Systems', 'RBAC'],
    'Tools & Methods': ['Agile', 'Scrum', 'Jira', 'Git', 'Trello', 'System Design', 'Performance Optimization']
  },
  experience: [
    {
      title: 'Founding Engineer (Contract)',
      company: 'TrueAuraTech',
      dates: '12/2025 – 03/2026',
      location: 'Remote',
      description: [
        'Sole engineer in an early-stage startup; owned full-stack architecture and collaborated directly with founders on roadmap and feature prioritization.',
        'Designed a multi-tenant SaaS backend (Node.js, MongoDB, AWS) with RBAC, JWT/OAuth authentication, and event-driven real-time workflows using WebSocket.',
        'Built an admin dashboard in React, accelerating internal operations review cycles by eliminating manual reporting.',
        'Established modular codebase conventions and CI/CD pipelines (GitHub Actions) to enable smooth onboarding as the team scales.',
        'Optimized API response times through query indexing and middleware caching, reducing average latency by ~35% under concurrent load.'
      ],
      techStack: ['Node.js', 'MongoDB', 'AWS', 'React', 'WebSocket', 'JWT', 'OAuth', 'GitHub Actions', 'RBAC']
    },
    {
      title: 'Senior Software Engineer',
      company: 'Webcubator Technologies',
      dates: '01/2020 – 03/2025',
      location: 'Pune, India',
      description: [
        'Architected microservices and serverless infrastructure on AWS (ECS, Lambda, S3, CloudFront), powering 50,000+ active users at 99.9% uptime across 6 production products.',
        'Designed and implemented CI/CD pipelines with Docker and GitHub Actions, cutting deployment failures by 30% and shortening release cycles from bi-weekly to weekly.',
        'Led and mentored a team of 4–6 engineers through structured code reviews, architecture documentation, and sprint planning, lifting on-time delivery by 20%.',
        'Shipped React Native and React applications across healthcare, fintech, e-learning, and restaurant verticals — all meeting or exceeding SLA targets post-launch.',
        'Reduced backend query response times by 40% across multiple products through index tuning, query refactoring, and connection-pool optimisation in MongoDB and MySQL.'
      ],
      techStack: ['React Native', 'React', 'Node.js', 'AWS ECS', 'Lambda', 'S3', 'CloudFront', 'Docker', 'MongoDB', 'MySQL', 'GitHub Actions']
    }
  ],
  projects: [
    {
      name: 'Workforce & Attendance SaaS',
      company: 'TrueAuraTech',
      description: 'Built a multi-tenant workforce management platform with real-time attendance tracking via WebSockets, role-based access control, and horizontal scalability on AWS ECS. Designed Node.js + MongoDB backend with event-driven task queues handling concurrent write bursts without data inconsistency.',
      techStack: 'Node.js, MongoDB, AWS ECS, WebSocket, RBAC, React, GitHub Actions',
      highlights: ['Real-time WebSocket attendance tracking', 'Multi-tenant RBAC architecture', 'Event-driven task queues', 'Horizontal scalability on AWS ECS']
    },
    {
      name: 'Harbura Health – Medical Records',
      company: 'Webcubator Technologies',
      description: 'Delivered a HIPAA-aligned medical records platform (React, Node.js, AWS) managing 5,000+ AES-encrypted files with 40% faster retrieval via CloudFront CDN caching. Integrated GPT-powered chatbot for record summarisation, cutting manual data entry by 60% and reducing support tickets by 50%.',
      techStack: 'React, TypeScript, Node.js, AWS, CloudFront, GPT APIs, AES Encryption',
      highlights: ['5,000+ AES-encrypted files', '40% faster retrieval via CDN', 'GPT chatbot reduced data entry by 60%', 'HIPAA-aligned architecture']
    },
    {
      name: 'CGMPlus & Clova Health',
      company: 'Webcubator Technologies',
      link: 'play.google.com/store/apps/details?id=com.iwelhealth.cgmpal',
      description: 'Developed React Native apps with CGM device integration, achieving 95% calorie-tracking accuracy through BLE data parsing and calibration logic. Built a React + Node.js physician dashboard enabling real-time patient monitoring for 100+ patients, improving clinical trend analysis efficiency by 40%.',
      techStack: 'React Native, Node.js, Firebase, AWS S3, Terra, Vital, SQL, BLE',
      highlights: ['95% calorie-tracking accuracy via BLE', 'Real-time monitoring for 100+ patients', '40% improvement in clinical trend analysis', '30% user retention uplift']
    },
    {
      name: 'Rocco Finance',
      company: 'Webcubator Technologies',
      description: 'Shipped a React Native + Node.js fintech app to 50,000+ users; AI-powered cash-flow analytics on AWS drove a 40% reduction in user debt and 25% retention uplift. Designed the wage-advance disbursement API with idempotency and rollback support to ensure zero double-disbursements in high-traffic periods.',
      techStack: 'React Native, Node.js, AWS S3, SQL, Firebase, Plaid, Payliance',
      highlights: ['50,000+ active users', '40% reduction in user debt', '25% retention uplift', 'Zero double-disbursements via idempotent API']
    },
    {
      name: 'EnLaCancha – E-Learning Platform',
      company: 'Webcubator Technologies',
      link: 'enlacancha.us/',
      description: 'Scaled e-learning platform (React, Node.js, MongoDB) to 50,000+ learners at 99.9% uptime; Stripe integration increased course enrollments by 20%. Reduced content-delivery latency by 40% using AWS S3 + CloudFront CDN with edge caching strategies tailored to video-heavy course material.',
      techStack: 'React.js, Node.js, Express.js, MongoDB, Stripe, AWS S3, CloudFront',
      highlights: ['50,000+ active learners', '99.9% uptime', '20% enrollment increase via Stripe', '40% latency reduction with CDN']
    },
    {
      name: 'Palatable Restaurant Platform',
      company: 'Webcubator Technologies',
      description: 'Delivered a Firebase + React + Node.js live order management system for 10,000+ active users, improving kitchen workflow efficiency by 40%. Deployed on AWS with auto-scaling groups to handle weekend peak traffic without service degradation.',
      techStack: 'React, React Native, Firebase, Node.js, AWS EC2, S3, CloudFront',
      highlights: ['10,000+ active users', '40% kitchen workflow improvement', 'Auto-scaling for peak traffic', 'Real-time order sync via Firebase']
    }
  ],
  blogs: [
    {
      title: 'React Native Performance Optimization: What Actually Made a Difference',
      platform: 'Medium',
      link: 'https://medium.com/@lav13feb/react-native-performance-optimization-what-actually-made-a-difference-af548af37a08',
      description: 'Practical techniques that made a visible difference in performance across real-world React Native apps — skipping the theory, straight to what works.'
    },
    {
      title: 'Lessons from Scaling a React Native App to 1M+ Users',
      platform: 'Hashnode',
      link: 'https://scaling-mobile-react-native-insights.hashnode.dev/lessons-from-scaling-a-react-native-app-to-1m-users',
      description: 'Hard-earned lessons from scaling a React Native app beyond 1 million users — where architecture decisions become system-critical.'
    },
    {
      title: 'Build a Native Module in React Native (Battery Level Example)',
      platform: 'Dev.to',
      link: 'https://dev.to/lav_pranjale_4cdd421d464d/build-a-native-module-in-react-native-battery-level-example-for-android-ios-46i4',
      description: 'Step-by-step guide to building a native module using Kotlin (Android) and Swift (iOS) — and how JS talks directly to platform-native code.'
    }
  ],
  education: [
    {
      degree: 'MCA',
      institution: 'International Institute of Professional Studies (DAVV)',
      year: '2019',
      location: 'Indore, India'
    }
  ]
};
