import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiZap } from 'react-icons/fi';
import { SiPython, SiScikitlearn } from 'react-icons/si';
import { SOCIAL_LINKS } from '../constants/socialLinks';

const Projects = () => {
  const projects = [
    {
      title: 'Car Price Predictor',
      description:
        'Car Price Prediction using predictive system. Utilized the Linear Regression from the Scikit-learn library',
      tech: ['Python', 'pandas', 'scikit-learn', 'Regression'],
      techIcons: [<SiPython />, <SiScikitlearn />],
      category: 'Supervised Learning',
      categoryIcon: <FiZap />,
      githubLink: `${SOCIAL_LINKS.github}/Car_Price_Prediction_Model`,
      demoLink: `https://car-price-prediction-model-three.vercel.app/`,
      featured: true,
    },
    {
      title: 'Fake News Detector',
      description:
        'NLP-powered binary classifier that detects fake news articles. Implements text preprocessing, feature extraction, and advanced classification techniques.',
      tech: ['Python', 'scikit-learn', 'NLP', 'Text Processing'],
      techIcons: [<SiPython />, <SiScikitlearn />],
      category: 'Classification',
      categoryIcon: <FiCode />,
      githubLink: `${SOCIAL_LINKS.github}/Fake_News_Detector`,
      demoLink: `${SOCIAL_LINKS.github}/Fake_News_Detector#readme`,
      featured: false,
    },
    {
      title: 'Heart Disease Prediction',
      description:
        'Predict the presence or absence of heart disease using logistic regression.',
      tech: ['Python', 'scikit-learn'],
      techIcons: [<SiPython />, <SiScikitlearn />],
      category: 'Supervised Learning',
      categoryIcon: <FiCode />,
      githubLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction`,
      demoLink: `${SOCIAL_LINKS.github}/Heart_Disease_Prediction#readme`,
      featured: false,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-16 lg:py-fluid-xl px-4 sm:px-6 md:px-fluid-md lg:px-fluid-lg"
    >
      <div className="container mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-fluid-xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-fluid-4xl xl:text-fluid-5xl font-bold mb-3 sm:mb-4 md:mb-fluid-md text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-fluid-md text-sm sm:text-base md:text-fluid-lg max-w-2xl mx-auto text-gray-600">
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
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-2xl bg-white border border-gray-200`}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-3 bg-gray-100`}>
                      <div className={`text-xl text-gray-600`}>{project.categoryIcon}</div>
                    </div>
                    <div>
                      <span className={`text-sm font-medium text-gray-600`}>{project.category}</span>
                    </div>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 text-gray-900`}>{project.title}</h3>

                <p className={`text-sm leading-relaxed mb-6 text-gray-600`}>{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    {project.techIcons.map((icon, iconIndex) => (
                      <div key={iconIndex} className={`text-xl text-gray-600`}>
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
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer bg-gray-100 text-gray-700 hover: hover:text-gray-900`}
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
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="mr-2" size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 opacity-0 pointer-events-none bg-gradient-to-br from-blue-50/50 to-purple-50/50`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:block text-center mt-16"
        >
          <p className={`text-lg mb-6 text-gray-600`}>Want to see more of my work?</p>
          <motion.a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="mr-2" size={20} />
            View All Projects
          </motion.a>
        </motion.div>

        {/* Mobile View - Featured Projects Only */}
        <div className="block md:hidden mt-8 sm:mt-12 md:mt-16 space-y-5 sm:space-y-6">
          {projects.filter((project) => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200"
            >
              {/* Mobile Project Header */}
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 rounded-lg mr-2 sm:mr-3 bg-gray-100">
                  <div className="text-base sm:text-lg text-gray-600">{project.categoryIcon}</div>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-600">{project.category}</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{project.title}</h3>

              <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed text-gray-600">
                {project.description.length > 100
                  ? `${project.description.substring(0, 100).split(' ').slice(0, -1).join(' ')}...`
                  : project.description}
              </p>

              {/* Tech Stack - Mobile */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons - Mobile Enhanced */}
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 sm:py-4 px-4 sm:px-6 text-center text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 min-h-12 sm:min-h-14 flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300"
                  whileTap={{ scale: 0.98 }}
                >
                  <FiGithub className="mr-2" size={18} />
                  Code
                </motion.a>
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 sm:py-4 px-4 sm:px-6 text-center text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all duration-200 min-h-12 sm:min-h-14 flex items-center justify-center"
                  whileTap={{ scale: 0.98 }}
                >
                  <FiExternalLink className="mr-2" size={18} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}

          {/* View All Projects Button - Mobile Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-4 sm:pt-6"
          >
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 min-h-12 sm:min-h-14 flex items-center justify-center bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200"
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub className="mr-2" size={18} />
              View All {projects.length} Projects
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;