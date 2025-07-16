import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCpu, FiZap } from 'react-icons/fi';
import { SiPython, SiReact, SiJavascript, SiOpencv, SiFastapi, SiMongodb, SiDocker, SiScikitlearn } from 'react-icons/si';
import { SOCIAL_LINKS } from '../constants/socialLinks';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "House Price Predictor",
      description: "A machine learning application that predicts house prices using linear regression. Features data preprocessing, model training, and an intuitive interface for price estimation.",
      tech: ["Python", "scikit-learn", "pandas", "Linear Regression"],
      techIcons: [<SiPython />, <SiScikitlearn />],
      category: "Machine Learning",
      categoryIcon: <FiCpu />,
      githubLink: `${SOCIAL_LINKS.github}/Boston_House_Price_Prediction`,
      demoLink: `${SOCIAL_LINKS.github}/Boston_House_Price_Prediction#readme`,
      featured: true
    },
    {
      title: "Heart Disease Predictor",
      description: "Medical diagnosis system using classification algorithms to predict heart disease risk. Includes comprehensive data analysis and model evaluation metrics.",
      tech: ["Python", "pandas", "scikit-learn", "Classification"],
      techIcons: [<SiPython />, <SiScikitlearn />],
      category: "Healthcare AI",
      categoryIcon: <FiZap />,
      githubLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction`,
      demoLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction#readme`,
      featured: true
    },
    {
      title: "Fake News Detector",
      description: "NLP-powered binary classifier that detects fake news articles. Implements text preprocessing, feature extraction, and advanced classification techniques.",
      tech: ["Python", "scikit-learn", "NLP", "Text Processing"],
      techIcons: [<SiPython />, <SiScikitlearn />],
      category: "Natural Language Processing",
      categoryIcon: <FiCode />,
      githubLink: `${SOCIAL_LINKS.github}/Fake_News_Detector`,
      demoLink: `${SOCIAL_LINKS.github}/Fake_News_Detector#readme`,
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="projects" 
      className={`py-fluid-xl px-fluid-sm sm:px-fluid-md lg:px-fluid-lg ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      }`}
    >
      <div className="container mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-fluid-xl"
        >
          <h2 className={`text-fluid-4xl md:text-fluid-5xl font-bold mb-fluid-md ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-fluid-md text-fluid-base sm:text-fluid-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my technical projects spanning AI/ML and web development
          </p>
        </motion.div>

        {/* Desktop View - Full Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group overflow-hidden rounded-2xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              } ${project.featured ? 'lg:col-span-1 md:col-span-2' : ''}`}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-3 ${
                      darkMode ? 'bg-blue-600' : 'bg-blue-100'
                    }`}>
                      <div className={`text-xl ${
                        darkMode ? 'text-white' : 'text-blue-600'
                      }`}>
                        {project.categoryIcon}
                      </div>
                    </div>
                    <div>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {project.techIcons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className={`text-xl ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 relative z-10">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className="mr-2" size={16} />
                    Code
                  </motion.a>
                  
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="mr-2" size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-600/10 to-purple-600/10' 
                  : 'bg-gradient-to-br from-blue-50/50 to-purple-50/50'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Want to see more of my work?
          </p>
          <motion.a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="mr-2" size={20} />
            View All Projects
          </motion.a>
        </motion.div>

        {/* Mobile View - Featured Projects Only */}
        <div className="block md:hidden space-y-6">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Mobile Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <div className={`text-lg ${
                      darkMode ? 'text-white' : 'text-blue-600'
                    }`}>
                      {project.categoryIcon}
                    </div>
                  </div>
                  <div>
                    <span className={`text-xs font-medium ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {project.category}
                    </span>
                    <span className="ml-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>

              <p className={`text-sm mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description.length > 120 
                  ? `${project.description.substring(0, 120)}...` 
                  : project.description
                }
              </p>

              {/* Tech Stack - Mobile */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-2 py-1 rounded-md ${
                      darkMode 
                        ? 'bg-gray-700/50 text-gray-300' 
                        : 'bg-gray-100/50 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className={`text-xs px-2 py-1 rounded-md ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Action Buttons - Mobile Enhanced */}
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-4 px-6 text-center text-base font-semibold rounded-xl transition-all duration-200 min-h-14 flex items-center justify-center ${
                    darkMode
                      ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300/50'
                  }`}
                >
                  <FiGithub className="mr-2" size={18} />
                  View Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 px-6 text-center text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all duration-200 min-h-14 flex items-center justify-center"
                >
                  <FiExternalLink className="mr-2" size={18} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}

          {/* View All Projects Button - Mobile Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-6"
          >
            <button className={`w-full py-4 px-6 text-base font-semibold rounded-xl transition-all duration-200 min-h-14 flex items-center justify-center ${
              darkMode
                ? 'bg-gray-800/50 text-blue-400 border border-gray-700/50 hover:bg-gray-700/50'
                : 'bg-gray-100/50 text-blue-600 border border-gray-200/50 hover:bg-gray-200/50'
            }`}>
              <FiGithub className="mr-2" size={18} />
              View All {projects.length} Projects
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;