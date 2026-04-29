import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  Zap
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import './tailwind.css';

const navItems = [
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' }
];

const impactStats = [
  { value: '6+', label: 'Years building production systems' },
  { value: '50K+', label: 'Users served across shipped products' },
  { value: '99.9%', label: 'Uptime across production platforms' },
  { value: '40%', label: 'Backend latency reduced through tuning' }
];

const specialties = [
  { icon: Layers3, title: 'Full-Stack Product Ownership', text: 'React, React Native, Node.js, APIs, dashboards, and post-launch iteration.' },
  { icon: Cloud, title: 'AWS Architecture', text: 'ECS, Lambda, S3, CloudFront, Docker, CI/CD, and practical scaling patterns.' },
  { icon: ShieldCheck, title: 'Reliable Systems', text: 'RBAC, auth, idempotency, encrypted records, uptime, and operational review loops.' }
];

const normalizeUrl = (url) => {
  if (!url) return '';
  return url.startsWith('http') ? url : `https://${url}`;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const SectionHeader = ({ eyebrow, title, description, inverted = false }) => (
  <motion.div
    className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.55 }}
  >
    <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.24em] ${inverted ? 'text-teal-300' : 'text-teal-600'}`}>
      {eyebrow}
    </p>
    <h2 className={`text-3xl font-bold tracking-tight sm:text-5xl ${inverted ? 'text-white' : 'text-slate-950'}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-5 text-base leading-8 sm:text-lg ${inverted ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>
    )}
  </motion.div>
);

const Chip = ({ children, tone = 'default' }) => {
  const tones = {
    default: 'border-slate-200 bg-white text-slate-700',
    dark: 'border-slate-700 bg-slate-900 text-slate-200',
    accent: 'border-teal-200 bg-teal-50 text-teal-800'
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredSkills = useMemo(
    () => [
      'React Native',
      'React',
      'Node.js',
      'AWS ECS',
      'Lambda',
      'MongoDB',
      'MySQL',
      'Docker'
    ],
    []
  );

  useEffect(() => {
    const sectionIds = ['home', ...navItems.map((item) => item.id)];

    const updateActiveSection = () => {
      const headerOffset = 96;
      const scrollMarker = window.scrollY + headerOffset + window.innerHeight * 0.28;
      let currentSection = 'home';

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && scrollMarker >= element.offsetTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f8f4] text-slate-900 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.16),transparent_28%),linear-gradient(180deg,#f7f8f4_0%,#eef2f1_100%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-[#f7f8f4]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            className="flex items-center gap-3 text-left"
            onClick={() => scrollToSection('home')}
            aria-label="Go to home section"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm">
              LP
            </span>
            <span>
              <span className="block text-sm font-bold leading-5 text-slate-950">Lav Pranjale</span>
              <span className="block text-xs font-medium text-slate-500">Senior Full-Stack Engineer</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white hover:text-slate-950'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
            >
              <Mail size={16} />
              Hire Lav
            </a>
          </div>

          <button
            className="rounded-full border border-slate-200 bg-white p-2 text-slate-800 lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-[#f7f8f4] px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-white"
                >
                  {item.label}
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
                <Sparkles size={16} />
                Available for senior React Native, React and Node.js roles
              </div>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Lav Pranjale, Senior Software Engineer for React Native, React, Node.js and AWS.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                {portfolioData.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-base font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <Mail size={19} />
                  Contact Me
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  <Linkedin size={19} />
                  View LinkedIn
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredSkills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.65 }}
            >
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10">
                <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-teal-300">Engineering Profile</p>
                      <h2 className="mt-1 text-2xl font-bold">{portfolioData.name}</h2>
                    </div>
                    <Rocket className="text-amber-300" size={32} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {impactStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <p className="text-3xl font-black text-white">{stat.value}</p>
                        <p className="mt-2 text-sm leading-5 text-slate-300">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-teal-300/25 bg-teal-300/10 p-4">
                    <p className="text-sm font-semibold text-teal-200">Core Competencies</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Scalable systems, distributed architecture, API design, performance optimization,
                      cloud architecture, and production mobile app development.
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm font-semibold text-amber-200">Search Focus</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Senior React Native Developer, Senior React Developer, Node.js Developer,
                      AWS Full-Stack Engineer, Indore India.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="impact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Why recruiters notice"
              title="Business impact, not just shipped screens"
              description="A portfolio tuned around production ownership, measurable outcomes, and the kind of engineering judgment companies need in senior hires."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {specialties.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Experience"
              title="Senior engineering across startup and product teams"
              description="From founding engineer ownership to leading delivery across production products in fintech, healthcare, e-learning, SaaS, and restaurants."
              inverted
            />

            <div className="grid gap-6">
              {portfolioData.experience.map((job, index) => (
                <motion.article
                  key={`${job.company}-${job.title}`}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 sm:p-8"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3 text-teal-300">
                        <BriefcaseBusiness size={20} />
                        <span className="text-sm font-bold uppercase tracking-[0.2em]">{job.company}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">{job.title}</h3>
                      <p className="mt-2 text-slate-300">{job.location}</p>
                    </div>
                    <Chip tone="dark">{job.dates}</Chip>
                  </div>

                  <ul className="mt-7 grid gap-4 md:grid-cols-2">
                    {job.description.map((point) => (
                      <li key={point} className="flex gap-3 text-slate-200">
                        <CheckCircle2 className="mt-1 flex-none text-teal-300" size={18} />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {job.techStack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm font-medium text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Selected Projects"
              title="Production products with clear engineering stakes"
              description="Each project highlights ownership in reliability, scale, integrations, performance, and user-facing business results."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {portfolioData.projects.map((project, index) => (
                <motion.article
                  key={project.name}
                  className="group flex min-h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 sm:p-7"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.04, duration: 0.5 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">{project.company}</p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950">{project.name}</h3>
                    </div>
                    {project.link && (
                      <a
                        href={normalizeUrl(project.link)}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                        aria-label={`Open ${project.name}`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  <p className="mt-5 flex-1 leading-8 text-slate-600">{project.description}</p>

                  {project.highlights && (
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {project.highlights.slice(0, 4).map((highlight) => (
                        <div key={highlight} className="flex gap-2 rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                          <Zap className="mt-0.5 flex-none text-amber-500" size={16} />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.split(', ').slice(0, 7).map((tech) => (
                      <Chip key={tech} tone="accent">{tech}</Chip>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Technical Skills"
              title="A practical stack for modern product engineering"
              description="Tools are grouped the way engineering teams evaluate them: frontend, backend, data, cloud, delivery, architecture, and collaboration."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => {
                const Icon = index % 3 === 0 ? Code2 : index % 3 === 1 ? Database : Cloud;
                return (
                  <motion.article
                    key={category}
                    className="rounded-3xl border border-slate-200 bg-[#f7f8f4] p-6 shadow-sm"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.04, duration: 0.5 }}
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon size={20} />
                      </span>
                      <h3 className="text-lg font-bold text-slate-950">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Chip key={skill}>{skill}</Chip>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="writing" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Writing"
              title="Technical thinking beyond the codebase"
              description="Articles that show how Lav thinks about React Native performance, scaling, and native integrations in real projects."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {portfolioData.blogs.map((blog, index) => (
                <motion.a
                  key={blog.title}
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <Chip tone="accent">{blog.platform}</Chip>
                    <ArrowUpRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-700" size={20} />
                  </div>
                  <h3 className="text-xl font-bold leading-7 text-slate-950">{blog.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{blog.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-900/20">
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-teal-300">Contact</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                  Let's build reliable products that users can trust.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Open to senior software engineering opportunities focused on React Native, React,
                  Node.js, AWS, architecture, and production ownership.
                </p>
              </div>

              <div className="grid gap-3">
                <a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 transition hover:bg-white/[0.1]" href={`mailto:${portfolioData.contact.email}`}>
                  <Mail className="text-teal-300" size={22} />
                  <span className="font-semibold">{portfolioData.contact.email}</span>
                </a>
                <a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 transition hover:bg-white/[0.1]" href={`tel:${portfolioData.contact.phone}`}>
                  <Phone className="text-teal-300" size={22} />
                  <span className="font-semibold">{portfolioData.contact.phone}</span>
                </a>
                <a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 transition hover:bg-white/[0.1]" href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="text-teal-300" size={22} />
                  <span className="font-semibold">LinkedIn Profile</span>
                </a>
                <a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 transition hover:bg-white/[0.1]" href={portfolioData.contact.github} target="_blank" rel="noreferrer">
                  <Github className="text-teal-300" size={22} />
                  <span className="font-semibold">GitHub Profile</span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100">
                  <MapPin className="text-teal-300" size={22} />
                  <span className="font-semibold">{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-8 text-center text-sm font-medium text-slate-500 sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} {portfolioData.name}. Senior Software Engineer - React, React Native, Node.js and AWS.
      </footer>
    </div>
  );
};

export default App;
