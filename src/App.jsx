import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { LuSparkles } from 'react-icons/lu';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { BsTwitterX } from 'react-icons/bs';
import { SOCIAL_LINKS, PERSONAL_INFO } from './constants/socialLinks';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  const projects = [
    {
      title: 'LegalQuery',
      year: '2026',
      description:
        "AI legal assistant with semantic retrieval and grounded answers for India's Bharatiya Nyaya Sanhita (BNS).",
      tech: ['Python', 'LangChain', 'Groq API', 'Qdrant Cloud', 'Streamlit'],
      githubLink: `${SOCIAL_LINKS.github}/Legal-Query`,
      demoLink: null,
    },
    {
      title: 'Fake News Detector',
      year: '2025',
      description:
        'NLP pipeline that classifies misinformation in articles with robust preprocessing and model evaluation.',
      tech: ['Python', 'scikit-learn', 'NLP'],
      githubLink: `${SOCIAL_LINKS.github}/Fake_News_Detector`,
      demoLink: `${SOCIAL_LINKS.github}/Fake_News_Detector#readme`,
    },
    {
      title: 'Heart Disease Prediction',
      year: '2025',
      description:
        'Healthcare ML workflow that estimates heart disease risk from patient records and validated metrics.',
      tech: ['Python', 'scikit-learn'],
      githubLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction`,
      demoLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction#readme`,
    },
    {
      title: 'Sentiment Analysis Financial News',
      year: '2024',
      description:
        'Comparative sentiment analysis using TF-IDF + Logistic Regression, Bi-LSTM, and fine-tuned BERT.',
      tech: ['Python', 'PyTorch', 'BERT', 'LSTM', 'Transformers', 'Streamlit'],
      githubLink: `${SOCIAL_LINKS.github}/Sentiment-Analysis-Financial-News`,
      demoLink: 'https://sentiment-analysis-financial-news-by-suraj.streamlit.app/',
    },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  };

  const Nav = () => (
    <nav className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-8 2xl:top-6 2xl:px-12">
      <div className="mx-auto w-full max-w-4xl 2xl:max-w-6xl">
        <motion.div className="nav-crazy-shell" whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[4px] origin-left rounded-full bg-[var(--accent)]/70"
            style={{ scaleX: smoothProgress }}
          />

          <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 text-[var(--accent)]/70 sm:block">
            <LuSparkles size={18} />
          </div>
          <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[var(--accent)]/70 sm:block">
            <LuSparkles size={18} />
          </div>

          <div className="relative flex items-center justify-center gap-4 p-3 sm:gap-6 sm:p-4 2xl:gap-9 2xl:p-5">
            <button
              onClick={() => setCurrentPage('home')}
              className={`nav-crazy-item ${currentPage === 'home' ? 'active' : ''}`}
            >
              {currentPage === 'home' && <motion.span layoutId="navActive" className="nav-active-bg" />}
              <span className="relative z-10 inline-flex items-center gap-2">Home</span>
            </button>

            <button
              onClick={() => setCurrentPage('projects')}
              className={`nav-crazy-item ${currentPage === 'projects' ? 'active' : ''}`}
            >
              {currentPage === 'projects' && <motion.span layoutId="navActive" className="nav-active-bg" />}
              <span className="relative z-10 inline-flex items-center gap-2">Projects</span>
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );

  const HomePage = () => {
    const [firstName, ...rest] = PERSONAL_INFO.name.split(' ');
    const lastName = rest.join(' ');
    const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
    const waveformBars = useMemo(() => Array.from({ length: 56 }, (_, i) => i), []);

    const handleHeroMouseMove = (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      setCursorOffset({
        x: Math.max(-1, Math.min(1, x * 2)),
        y: Math.max(-1, Math.min(1, y * 2)),
      });
    };

    const handleHeroMouseLeave = () => {
      setCursorOffset({ x: 0, y: 0 });
    };

    const waveBoost = Math.abs(cursorOffset.x) * 0.55 + Math.abs(cursorOffset.y) * 0.45;

    return (
      <main className="px-4 pb-16 pt-28 sm:px-8 sm:pt-32 2xl:pb-24 2xl:pt-40">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-[92rem]">
          <motion.section
            className="hero-dual mx-auto max-w-5xl space-y-6 text-center 2xl:max-w-6xl 2xl:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
          >
            <div className="hero-headline-stack">
              <motion.div
                className="hero-ghost"
                animate={{ x: cursorOffset.x * 16, y: cursorOffset.y * 12 }}
                transition={{ type: 'spring', stiffness: 110, damping: 22 }}
              >
                {PERSONAL_INFO.name.toUpperCase()}
              </motion.div>

              <motion.h1
                className="hero-title font-display text-5xl leading-[0.95] text-[var(--text-main)] sm:text-6xl lg:text-7xl 2xl:text-[6.25rem]"
                animate={{ x: cursorOffset.x * -8, y: cursorOffset.y * -6 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              >
                {firstName}
                <span className="text-[var(--text-soft)]"> {lastName}</span>
              </motion.h1>
            </div>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--text-soft)] 2xl:max-w-3xl 2xl:text-xl">
              I build practical AI and ML products with clean interfaces and reliable backend systems, turning complex model workflows into experiences people can actually use. Current focus: building LLM features with retrieval, evaluation, and product-ready UX that prioritize clarity and speed.
            </p>

            <div className="waveform-wrap" aria-hidden="true">
              {waveformBars.map((bar) => {
                const base = 9 + ((bar * 7) % 20);
                const duration = 1.1 + (bar % 8) * 0.08;
                const extra = waveBoost * (6 + (bar % 5));

                return (
                  <motion.span
                    key={bar}
                    className="wave-bar"
                    animate={{
                      height: [base, base + extra, base + 2, base + extra * 0.7, base],
                      opacity: [0.35, 0.85, 0.5, 0.8, 0.35],
                    }}
                    transition={{
                      duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: (bar % 9) * 0.06,
                    }}
                  />
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setCurrentPage('projects')}
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 2xl:px-8 2xl:py-4 2xl:text-base"
              >
                View Projects
              </button>
              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm text-[var(--text-main)] transition hover:border-[var(--accent)] 2xl:px-8 2xl:py-4 2xl:text-base"
              >
                Resume
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm text-[var(--text-main)] transition hover:border-[var(--accent)] 2xl:px-8 2xl:py-4 2xl:text-base"
              >
                GitHub
              </a>
            </div>

            <div className="flex justify-center gap-3 pt-2 2xl:gap-4 2xl:pt-3">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-link 2xl:h-12 2xl:w-12" aria-label="GitHub">
                <LuGithub size={19} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-link 2xl:h-12 2xl:w-12" aria-label="LinkedIn">
                <LuLinkedin size={19} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="social-link 2xl:h-12 2xl:w-12" aria-label="X">
                <BsTwitterX size={16} />
              </a>
              <a href={SOCIAL_LINKS.email} className="social-link 2xl:h-12 2xl:w-12" aria-label="Email">
                <LuMail size={19} />
              </a>
            </div>
          </motion.section>
        </div>
      </main>
    );
  };

  const ProjectCard = ({ project }) => {
    return (
      <article className="card">
        <p className="text-sm text-[var(--text-soft)] 2xl:text-base">{project.year}</p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--text-main)] 2xl:mt-3 2xl:text-3xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-[var(--text-soft)] 2xl:mt-4 2xl:text-lg">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 2xl:mt-7 2xl:gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--text-main)] transition hover:border-[var(--accent)] 2xl:px-5 2xl:py-3 2xl:text-base"
          >
            Source
          </a>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm text-white transition hover:opacity-90 2xl:px-5 2xl:py-3 2xl:text-base"
            >
              Demo
            </a>
          )}
        </div>
      </article>
    );
  };

  const ProjectsPage = () => (
    <main className="px-4 pb-16 pt-28 sm:px-8 sm:pt-32 2xl:pb-24 2xl:pt-40">
      <div className="mx-auto max-w-6xl 2xl:max-w-[92rem]">
        <motion.h1
          className="font-display text-4xl text-[var(--text-main)] sm:text-5xl 2xl:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Projects
        </motion.h1>

        <motion.p
          className="mt-4 max-w-3xl text-[var(--text-soft)] 2xl:mt-5 2xl:max-w-4xl 2xl:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          Selected work in legal AI, NLP, and healthcare prediction.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:mt-12 2xl:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );

  return (
    <div className="min-h-screen antialiased">
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {currentPage === 'home' ? <HomePage /> : <ProjectsPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
