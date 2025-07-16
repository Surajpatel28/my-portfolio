// Mobile-optimized components that can be used conditionally
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const MobileAboutSection = ({ darkMode, fullContent, summary }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="block md:hidden">
      <motion.p
        className={`text-base leading-relaxed mb-4 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        {summary}
      </motion.p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {fullContent}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center mt-4 text-sm font-semibold ${
          darkMode 
            ? 'text-blue-400 hover:text-blue-300' 
            : 'text-blue-600 hover:text-blue-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
        {isExpanded ? (
          <FiChevronUp className="ml-1" size={16} />
        ) : (
          <FiChevronDown className="ml-1" size={16} />
        )}
      </motion.button>
    </div>
  );
};

export const MobileSkillsGrid = ({ skills, darkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <div className="block md:hidden">
      <div className="grid grid-cols-2 gap-3">
        {displayedSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-3 rounded-lg ${
              darkMode 
                ? 'bg-gray-800/50 border border-gray-700/50' 
                : 'bg-white/50 border border-gray-200/50'
            }`}
          >
            <div className="flex items-center mb-2">
              <div className="text-lg mr-2">{skill.icon}</div>
              <span className={`font-medium text-sm ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.name}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {skills.length > 4 && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold text-sm ${
            darkMode
              ? 'bg-gray-800/50 text-blue-400 hover:bg-gray-700/50'
              : 'bg-gray-100/50 text-blue-600 hover:bg-gray-200/50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {showAll ? 'Show Less' : `Show All ${skills.length} Skills`}
        </motion.button>
      )}
    </div>
  );
};

export const MobileProjectsGrid = ({ projects, darkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter(p => p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <div className="block md:hidden space-y-4">
      {displayedProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`p-4 rounded-xl backdrop-blur-sm ${
            darkMode 
              ? 'bg-gray-800/30 border border-gray-700/30' 
              : 'bg-white/30 border border-gray-200/30'
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className={`font-bold text-lg ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            {project.featured && (
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <p className={`text-sm mb-3 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {project.description.length > 100 
              ? `${project.description.substring(0, 100)}...` 
              : project.description
            }
          </p>
          
          <div className="flex flex-wrap gap-1 mb-3">
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
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <a
              href={project.githubLink}
              className={`flex-1 py-2 px-3 text-center text-xs font-semibold rounded-lg ${
                darkMode
                  ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50'
                  : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300/50'
              }`}
            >
              Code
            </a>
            <a
              href={project.demoLink}
              className="flex-1 py-2 px-3 text-center text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            >
              Demo
            </a>
          </div>
        </motion.div>
      ))}
      
      {!showAll && projects.length > featuredProjects.length && (
        <motion.button
          onClick={() => setShowAll(true)}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-sm ${
            darkMode
              ? 'bg-gray-800/50 text-blue-400 hover:bg-gray-700/50'
              : 'bg-gray-100/50 text-blue-600 hover:bg-gray-200/50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View All {projects.length} Projects
        </motion.button>
      )}
    </div>
  );
};
