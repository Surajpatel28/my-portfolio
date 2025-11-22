import React, { useState, useEffect } from 'react';
import {
  LuGithub, LuLinkedin, LuMail, LuTwitter,
  LuExternalLink, LuDownload, LuTerminal
} from 'react-icons/lu';
import {
  SiPython, SiJavascript, SiCplusplus,
  SiReact, SiHtml5, SiCss3, SiMongodb, SiNodedotjs, SiExpress,
  SiPandas, SiNumpy, SiFlask, SiScikitlearn, SiTailwindcss,
  SiFastapi, SiTensorflow, SiOpencv, SiJupyter, SiGit
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { FiDatabase, FiCpu, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import { SOCIAL_LINKS, PERSONAL_INFO } from './constants/socialLinks';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    // Also handle hash changes when clicking anchor links
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'projects', 'contact'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    // Check hash on mount
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  const services = [
    { title: "Full Stack Dev", icon: <FiLayers size={24} /> },
    { title: "Machine Learning", icon: <FiCpu size={24} /> },
    { title: "API Development", icon: <FiCode size={24} /> }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <FiCode size={16} />,
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ]
    },
    {
      title: "Web Dev",
      icon: <FiLayers size={16} />,
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "ML & AI",
      icon: <FiCpu size={16} />,
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Numpy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> }
      ]
    },
    {
      title: "Tools",
      icon: <FiDatabase size={16} />,
      skills: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Git", icon: <SiGit /> }
      ]
    }
  ];

  const projects = [
    {
      title: 'Car Price Predictor',
      description: 'Car Price Prediction using predictive system. Utilized the Linear Regression from the Scikit-learn library',
      tech: ['Python', 'pandas', 'scikit-learn', 'Regression'],
      techIcons: [<SiPython />, <SiPandas />, <SiScikitlearn />, <FiZap />],
      category: 'Supervised Learning',
      categoryIcon: <FiZap />,
      githubLink: `${SOCIAL_LINKS.github}/Car_Price_Prediction_Model`,
      link: `https://car-price-prediction-model-three.vercel.app/`,
    },
    {
      title: 'Fake News Detector',
      description: 'NLP-powered binary classifier that detects fake news articles. Implements text preprocessing, feature extraction, and advanced classification techniques.',
      tech: ['Python', 'scikit-learn', 'NLP', 'Text Processing'],
      techIcons: [<SiPython />, <SiScikitlearn />, <FiCode />, <FiLayers />],
      category: 'Classification',
      categoryIcon: <FiCode />,
      githubLink: `${SOCIAL_LINKS.github}/Fake_News_Detector`,
      link: `${SOCIAL_LINKS.github}/Fake_News_Detector#readme`,
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Predict the presence or absence of heart disease using logistic regression.',
      tech: ['Python', 'scikit-learn'],
      techIcons: [<SiPython />, <SiScikitlearn />],
      category: 'Supervised Learning',
      categoryIcon: <FiCode />,
      githubLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction`,
      link: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction#readme`,
    }
  ];

  return (
    <div className="min-h-screen bg-background bg-grid-pattern text-primary font-sans selection:bg-primary selection:text-background">
      <div className="scanlines"></div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:w-1/4 lg:h-screen lg:sticky lg:top-0 p-6 flex-col border-r-2 border-primary/20 bg-background/95 backdrop-blur-sm z-40">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto lg:mx-0 mb-4 border-2 border-primary p-1 retro-shadow">
              <img
                src="/snow.jpeg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <h1 className="text-2xl font-bold font-heading mb-2 text-white">Suraj Patel</h1>
            <p className="text-sm text-secondary mb-4 uppercase tracking-wider">
              &gt; {PERSONAL_INFO.title}
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors"><LuGithub size={20} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors"><LuLinkedin size={20} /></a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors"><LuTwitter size={20} /></a>
              <a href={SOCIAL_LINKS.email} className="text-primary hover:text-white transition-colors"><LuMail size={20} /></a>
            </div>
          </div>

          <nav className="flex-grow hidden lg:block">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block text-lg hover:text-white transition-colors ${activeSection === link.id ? 'text-white font-bold' : 'text-gray-500'}`}
                  >
                    <span className="mr-2 text-primary">
                      {activeSection === link.id ? '[x]' : '[ ]'}
                    </span>
                    {link.name.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-8 border-t-2 border-primary/20 hidden lg:block">
            <p className="text-xs text-gray-500">
              SYSTEM STATUS: ONLINE<br />
              V2.0.25
            </p>
          </div>
        </aside>

        {/* Mobile Nav (Sticky Top) */}
        <div className="lg:hidden sticky top-0 z-50 bg-background border-b-2 border-primary/20 p-3 flex justify-center items-center">
          <div className="flex gap-2 text-[10px] font-bold">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'text-primary' : 'text-gray-500'}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-4 sm:p-6 lg:p-12 space-y-12 lg:space-y-24 overflow-x-hidden">

          {/* Hero Section */}
          <section id="home" className="min-h-[80vh] flex flex-col justify-center">
            {/* Mobile Profile Header */}
            <div className="lg:hidden mb-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 border-2 border-primary p-1 retro-shadow mb-3">
                <img
                  src="/snow.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h1 className="text-base font-bold font-heading text-white mb-1">Suraj Patel</h1>
              <p className="text-[10px] text-secondary mb-3 uppercase tracking-wider">
                &gt; {PERSONAL_INFO.title}
              </p>
              <div className="flex gap-3">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors"><LuGithub size={16} /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors"><LuLinkedin size={16} /></a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors"><LuTwitter size={16} /></a>
                <a href={SOCIAL_LINKS.email} className="text-primary hover:text-white transition-colors"><LuMail size={16} /></a>
              </div>
            </div>

            <div className="border-2 border-primary p-4 sm:p-6 lg:p-8 retro-shadow bg-background relative group">
              <div className="absolute top-0 left-0 bg-primary text-background px-2 py-1 text-[10px] sm:text-xs font-bold">
                TERMINAL_SESSION_01
              </div>
              <div className="mt-6 space-y-3 sm:space-y-4 lg:space-y-6">
                <p className="text-secondary font-mono text-xs sm:text-sm lg:text-lg">
                  &gt; INITIALIZING PORTFOLIO...<br />
                  &gt; LOADING ASSETS...<br />
                  &gt; WELCOME, USER.
                </p>
                <h2 className="text-xl sm:text-3xl lg:text-6xl font-heading leading-tight text-white break-words">
                  BUILDING THE <span className="text-primary">FUTURE</span><br />
                  WITH INTELLIGENCE
                </h2>
                <p className="text-xs sm:text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
                  {PERSONAL_INFO.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
                  <button
                    onClick={() => alert('Downloading CV...')}
                    className="px-4 py-2 sm:py-3 bg-primary text-background font-bold hover:bg-white transition-colors border-2 border-transparent hover:border-primary uppercase flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <LuDownload /> Download CV
                  </button>
                  <a
                    href="#contact"
                    className="px-4 py-2 sm:py-3 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-colors font-bold uppercase text-center text-xs sm:text-sm"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12">
              <LuTerminal className="text-secondary" size={20} />
              <h2 className="text-base sm:text-xl lg:text-3xl font-heading text-white">ABOUT_ME</h2>
              <div className="h-1 flex-grow bg-primary/20"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="border-2 border-white/10 p-4 sm:p-6 bg-white/5">
                  <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                    Hello, my name is <span className="text-primary font-bold">Suraj Patel</span>. I am passionate about the fields of Machine Learning and Artificial Intelligence.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                    My journey began with full-stack development (MERN), but a machine learning tutorial sparked a curiosity that turned into a dedicated career path.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                    I thrive on the cycle of continuous learning and building intelligent systems that solve real-world problems.
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center p-2 sm:p-3 border-2 border-white/10 hover:border-primary transition-colors group">
                        <span className="text-primary mr-2 sm:mr-3 group-hover:text-white transition-colors">{service.icon}</span>
                        <span className="font-bold text-gray-300 group-hover:text-primary transition-colors uppercase text-xs sm:text-sm lg:text-base">{service.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-heading text-secondary mb-4 sm:mb-6">&gt; TECH_STACK_DATABASE</h3>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="border-2 border-white/10 p-3 sm:p-4 hover:border-secondary transition-colors relative">
                      <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                        {category.icon} {category.title.toUpperCase()}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] sm:text-xs lg:text-sm text-gray-300 flex items-center gap-1 sm:gap-2 hover:bg-white/10 hover:text-primary transition-colors cursor-default">
                            {skill.icon} {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12">
              <FiCode className="text-secondary" size={20} />
              <h2 className="text-base sm:text-xl lg:text-3xl font-heading text-white">PROJECT_LOGS</h2>
              <div className="h-1 flex-grow bg-primary/20"></div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative bg-background border-2 border-white/10 hover:border-primary transition-colors">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <div className="p-4 sm:p-5 lg:p-6 relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <div className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] sm:text-[10px] lg:text-xs text-secondary uppercase">
                        {project.category}
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                            <LuGithub size={16} />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                            <LuExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg lg:text-2xl font-bold font-heading text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs lg:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[9px] sm:text-[10px] lg:text-xs font-mono text-gray-500 border-b border-gray-800 pb-0.5">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Hard Shadow on Hover */}
                  <div className="absolute inset-0 border-2 border-primary translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="pb-12 sm:pb-16 lg:pb-20">
            <div className="border-2 border-secondary p-6 sm:p-8 lg:p-12 retro-shadow-pink bg-background text-center">
              <h2 className="text-base sm:text-2xl lg:text-4xl font-heading text-white mb-4 sm:mb-6 break-words px-2">
                REACH ME
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base">
                I'm currently available for freelance work and open to new opportunities.
                If you have a project that needs some AI magic, execute the contact protocol below.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6">
                <a
                  href={SOCIAL_LINKS.email}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-secondary text-background font-bold hover:bg-white transition-colors uppercase flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base cursor-pointer"
                >
                  <LuMail /> Send Email
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-background transition-colors font-bold uppercase flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base cursor-pointer"
                >
                  <LuLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default App;
