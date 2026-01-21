import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useInView } from 'framer-motion';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { BsTwitterX } from 'react-icons/bs';
import { SOCIAL_LINKS, PERSONAL_INFO } from './constants/socialLinks';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { scrollYProgress } = useScroll();

  const projects = [
    {
      title: 'Car Price Predictor',
      description: 'Predictive system using Linear Regression to estimate vehicle prices based on features.',
      tech: ['Python', 'pandas', 'scikit-learn'],
      githubLink: `${SOCIAL_LINKS.github}/Car_Price_Prediction_Model`,
      demoLink: 'https://car-price-prediction-model-three.vercel.app/',
    },
    {
      title: 'Fake News Detector',
      description: 'NLP-powered binary classifier for detecting misinformation in articles.',
      tech: ['Python', 'scikit-learn', 'NLP'],
      githubLink: `${SOCIAL_LINKS.github}/Fake_News_Detector`,
      demoLink: `${SOCIAL_LINKS.github}/Fake_News_Detector#readme`,
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Logistic regression model to predict heart disease presence from patient data.',
      tech: ['Python', 'scikit-learn'],
      githubLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction`,
      demoLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction#readme`,
    },
    {
      title: 'Sentiment Analysis Financial News',
      description: 'Comparative NLP study implementing three architectures: TF-IDF + Logistic Regression baseline, custom Bi-LSTM, and fine-tuned BERT transformer for sentiment classification on financial news headlines.',
      tech: ['Python', 'PyTorch', 'BERT', 'TF-IDF', 'LSTM', 'Transformers', 'Streamlit'],
      githubLink: `${SOCIAL_LINKS.github}/Sentiment-Analysis-Financial-News`,
      demoLink: `https://sentiment-analysis-financial-news-by-suraj.streamlit.app/`,
    }
  ];

  // Navigation
  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-center items-center">
        {/* Navigation Links */}
        <div className="flex gap-12 relative">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-lg relative py-1 font-light tracking-wide"
          >
            <span className={currentPage === 'home' ? 'text-neutral-900' : 'text-neutral-500'}>
              Home
            </span>
            {currentPage === 'home' && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className="text-lg relative py-1 font-light tracking-wide"
          >
            <span className={currentPage === 'projects' ? 'text-neutral-900' : 'text-neutral-500'}>
              Projects
            </span>
            {currentPage === 'projects' && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => {
    const name = PERSONAL_INFO.name;

    return (
      <main className="min-h-screen flex items-center px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start lg:items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Name - Simple fade in */}
              <motion.h1 
                className="text-[5rem] sm:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-display font-light leading-[1.1] text-neutral-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                {name}
              </motion.h1>

              {/* Divider */}
              <motion.div 
                className="w-24 h-px bg-neutral-900"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
              
              {/* Description */}
              <motion.div
                className="space-y-6 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-xl lg:text-2xl text-neutral-700 leading-relaxed font-light">
                  Building intelligent systems with machine learning.
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Currently exploring{' '}
                  <span className="font-medium text-neutral-700">LLMs</span>,{' '}
                  <span className="font-medium text-neutral-700">RAG</span>, and{' '}
                  <span className="font-medium text-neutral-700">vector databases</span>
                  {' '}for practical AI applications.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-6 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <span className="text-xs uppercase tracking-widest text-neutral-400">Connect</span>
                <div className="flex gap-5">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110"
                  >
                    <LuGithub size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110"
                  >
                    <LuLinkedin size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110"
                  >
                    <BsTwitterX size={18} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="text-neutral-400 hover:text-neutral-900 transition-all duration-300 hover:scale-110"
                  >
                    <LuMail size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                className="relative w-80 h-80 lg:w-[26rem] lg:h-[26rem]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <img
                  src="/snow.jpeg"
                  alt="Portrait"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    );
  };

  // Project Card Component with scroll animation and tilt
  const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.2,
          ease: [0.25, 0.4, 0.25, 1]
        }}
        whileHover={{ scale: 1.02 }}
        className={`group relative bg-white border-2 border-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
          index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'
        }`}
      >
        <div className="absolute -top-4 -left-4 bg-neutral-900 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold">
          {String(index + 1).padStart(2, '0')}
        </div>
        
        <h2 className="text-3xl font-bold text-neutral-900 mb-4 mt-2">
          {project.title}
        </h2>
        
        <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-neutral-900 text-white text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-6 text-lg font-medium">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:underline underline-offset-4 decoration-2"
          >
            Code →
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:underline underline-offset-4 decoration-2"
          >
            Demo →
          </a>
        </div>
      </motion.article>
    );
  };

  // Projects Page
  // Projects Page
  const ProjectsPage = () => (
    <main className="min-h-screen pt-32 pb-16 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold text-neutral-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl font-bold text-neutral-900 border-2 border-neutral-900 px-8 py-4 hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            View More Projects →
          </a>
        </motion.div>
      </div>
    </main>
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === 'home' ? <HomePage /> : <ProjectsPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
