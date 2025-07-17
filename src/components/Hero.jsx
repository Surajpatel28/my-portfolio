import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { SOCIAL_LINKS } from '../constants/socialLinks';

const Hero = ({ darkMode }) => {
  const [showNotification, setShowNotification] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-fluid-sm sm:px-fluid-md lg:px-fluid-lg pt-16 sm:pt-20 pb-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-1/4 -left-20 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full opacity-20 ${
            darkMode ? 'bg-purple-500' : 'bg-blue-500'
          }`}
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute bottom-1/4 -right-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full opacity-20 ${
            darkMode ? 'bg-blue-500' : 'bg-purple-500'
          }`}
        />
      </div>

      <div className="container mx-auto max-w-8xl grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1 space-y-fluid-sm"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-fluid-lg sm:text-fluid-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl lg:text-fluid-7xl xl:text-fluid-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Suraj Patel
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl lg:text-fluid-4xl font-semibold ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}
          >
            AI/ML & Full-Stack Developer
          </motion.h2>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`flex items-center justify-center lg:justify-start gap-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <HiLocationMarker className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-fluid-base sm:text-fluid-lg">India</span>
          </motion.div>

          {/* Description - Responsive content */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className={`text-fluid-sm sm:text-fluid-base md:text-fluid-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <span className="block xs:hidden">
              Building AI systems & web apps. ML, computer vision & scalable tech.
            </span>
            <span className="hidden xs:block sm:hidden">
              Building intelligent ML systems & modern web apps. Exploring AI agents & computer vision.
            </span>
            <span className="hidden sm:block">
              Passionate about building intelligent systems and modern web applications. 
              Specializing in AI agents, computer vision, and scalable backend architectures.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col xs:flex-row gap-fluid-sm sm:gap-fluid-md justify-center lg:justify-start pt-fluid-sm"
          >
            <motion.button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-fluid-sm sm:text-fluid-base min-h-12 touch:min-h-14"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="mr-2 w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className={`inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-4 border-2 font-semibold rounded-full transition-all duration-300 text-fluid-sm sm:text-fluid-base min-h-12 touch:min-h-14 ${
                darkMode
                  ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="mr-2 w-5 h-5" />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex gap-6 justify-center lg:justify-start pt-fluid-sm"
          >
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all duration-300 min-w-14 min-h-14 flex items-center justify-center ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all duration-300 min-w-14 min-h-14 flex items-center justify-center ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Avatar/Image Section - Progressive display */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="hidden sm:flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 xl:w-96 xl:h-96 rounded-full relative overflow-hidden ${
                darkMode 
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600' 
                  : 'bg-gradient-to-br from-blue-500 to-purple-500'
              }`}
            >
              {/* Placeholder for profile image */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-white/10 flex items-center justify-center">
                <div className={`${
                  darkMode ? 'text-white/90' : 'text-white'
                }`}>
                  <img 
                    className='rounded-full w-full h-full object-cover' 
                    src="myPhoto2.jpg" 
                    alt="Suraj Patel" 
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full opacity-80"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full opacity-80"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? 'border-gray-400' : 'border-gray-600'
          }`}
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`w-1 h-3 rounded-full mt-2 ${
              darkMode ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          />
        </motion.div>
      </motion.div>

      {/* Work in Progress Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 max-w-xs sm:max-w-sm"
        >
          <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700' 
              : 'bg-gradient-to-r from-white to-gray-50 border border-gray-200'
          }`}>
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            
            {/* Content */}
            <div className="relative p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4">
              {/* Animated icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-white text-lg sm:text-xl"
                >
                  🚧
                </motion.div>
              </motion.div>
              
              {/* Message */}
              <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-sm sm:text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Work in Progress
                </h4>
                <p className={`text-xs sm:text-sm truncate ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  CV will be available soon! 🚀
                </p>
              </div>
              
              {/* Progress bar animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;