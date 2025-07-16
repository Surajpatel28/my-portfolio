import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTarget, FiTrendingUp, FiHeart } from 'react-icons/fi';

const About = ({ darkMode }) => {

  return (
    <section 
      id="about" 
      className={`py-fluid-xl px-fluid-sm sm:px-fluid-md lg:px-fluid-lg relative overflow-hidden ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-8xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-fluid-xl lg:mb-fluid-2xl"
        >
          <h2 className={`text-fluid-4xl md:text-fluid-5xl font-bold mb-fluid-md ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-fluid-xl xl:gap-fluid-2xl items-start">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className={`p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm border transition-all duration-300 hover:shadow-xl touch-action-manipulation ${
              darkMode 
                ? 'bg-gray-800/40 border-gray-700' 
                : 'bg-white/60 border-gray-200'
            }`}>
              <h3 className={`text-2xl sm:text-3xl lg:text-fluid-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                From MERN to Machine Learning: A Journey of Discovery
              </h3>
              
              <div className={`space-y-6 text-base sm:text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  My coding adventure began with a simple curiosity: <em>How do websites actually work?</em> 
                  That question led me down the rabbit hole of full-stack development, where I discovered 
                  the magic of the <span className="font-semibold text-blue-600">MERN stack</span>.
                </p>
                
                <p>
                  Building my first React application felt like wielding a superpower. Suddenly, I could 
                  create interactive interfaces, connect them to powerful Node.js backends, and store 
                  data in MongoDB. Each project taught me something new about crafting seamless user experiences.
                </p>
                
                <p>
                  But as I dove deeper into development, I started noticing patterns in data that sparked 
                  a new fascination. <em>What if applications could learn and adapt?</em> This curiosity 
                  is now driving my exploration into <span className="font-semibold text-purple-600">machine learning</span>, 
                  where I'm discovering how to make applications truly intelligent.
                </p>
                
                <p>
                  Today, I'm passionate about bridging these two worlds—combining the user-centric approach 
                  of web development with the predictive power of machine learning to create applications 
                  that don't just respond to users, but anticipate their needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Current Focus */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border touch-action-manipulation min-h-[120px] ${
                darkMode 
                  ? 'bg-gray-800/60 border-gray-600' 
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-4">
                  <FiCode size={24} />
                </div>
                <h4 className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Current Focus
                </h4>
              </div>
              <p className={`text-sm sm:text-base ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Mastering machine learning fundamentals while strengthening my full-stack foundation
              </p>
            </motion.div>

            {/* What Drives Me */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border touch-action-manipulation min-h-[120px] ${
                darkMode 
                  ? 'bg-gray-800/60 border-gray-600' 
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mr-4">
                  <FiHeart size={24} />
                </div>
                <h4 className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  What Drives Me
                </h4>
              </div>
              <p className={`text-sm sm:text-base ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                The thrill of solving complex problems and creating technology that makes a real impact
              </p>
            </motion.div>

            {/* Looking Ahead */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border touch-action-manipulation min-h-[120px] ${
                darkMode 
                  ? 'bg-gray-800/60 border-gray-600' 
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mr-4">
                  <FiTrendingUp size={24} />
                </div>
                <h4 className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Looking Ahead
                </h4>
              </div>
              <p className={`text-sm sm:text-base ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Building intelligent web applications that seamlessly blend user experience with AI capabilities
              </p>
            </motion.div>

            {/* Let's Connect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border touch-action-manipulation min-h-[140px] ${
                darkMode 
                  ? 'bg-gray-800/60 border-gray-600' 
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white mr-4">
                  <FiTarget size={24} />
                </div>
                <h4 className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Let's Connect
                </h4>
              </div>
              <p className={`text-sm sm:text-base mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Always excited to collaborate on innovative projects and learn from fellow developers
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-4 min-h-[48px] bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 touch-action-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;