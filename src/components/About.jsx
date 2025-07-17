import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiZap, FiTrendingUp } from 'react-icons/fi';

const About = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingIcon = ({ icon: Icon, delay, size = 20, color }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.7, 0.3],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={`absolute ${color}`}
      style={{
        left: `${20 + Math.sin(delay) * 60}%`,
        top: `${30 + Math.cos(delay) * 40}%`,
      }}
    >
      <Icon size={size} />
    </motion.div>
  );

  const ParticleEffect = ({ index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "easeOut"
      }}
      className={`absolute w-2 h-2 rounded-full ${
        darkMode ? 'bg-blue-400' : 'bg-purple-600'
      }`}
      style={{
        left: `${50 + Math.sin(index) * 30}%`,
        top: `${50 + Math.cos(index) * 30}%`,
      }}
    />
  );

  return (
    <section 
      id="about" 
      className={`py-fluid-2xl px-fluid-sm sm:px-fluid-md lg:px-fluid-lg relative overflow-hidden min-h-screen flex items-center ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      }`}
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient that follows mouse */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              ${darkMode ? 'rgba(96, 165, 250, 0.15)' : 'rgba(139, 92, 246, 0.15)'}, 
              transparent 40%)`
          }}
        />
        
        {/* Floating ML-related icons */}
        <FloatingIcon icon={FiCpu} delay={0} size={24} color={darkMode ? 'text-blue-400' : 'text-blue-600'} />
        <FloatingIcon icon={FiZap} delay={2} size={20} color={darkMode ? 'text-purple-400' : 'text-purple-600'} />
        <FloatingIcon icon={FiCode} delay={4} size={22} color={darkMode ? 'text-cyan-400' : 'text-cyan-600'} />
        <FloatingIcon icon={FiTrendingUp} delay={1.5} size={18} color={darkMode ? 'text-blue-300' : 'text-blue-500'} />
        
        {/* Particle effects */}
        {[...Array(8)].map((_, i) => (
          <ParticleEffect key={i} index={i} />
        ))}
        
        {/* Animated neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 8}%`}
              y1="20%"
              x2={`${30 + i * 7}%`}
              y2="80%"
              stroke={darkMode ? '#60A5FA' : '#8B5CF6'}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Animated Title */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-fluid-lg"
          >
            <h2 className={`text-fluid-4xl md:text-fluid-6xl font-bold mb-fluid-md ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <motion.div 
              className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Main Message with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto mb-fluid-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <motion.p 
              className="text-fluid-xl md:text-fluid-2xl font-medium leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              I'm a{' '}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                  Machine Learning Enthusiast
                </span>
              </motion.span>
              {' '}passionate about building intelligent solutions that bridge the gap between human creativity and artificial intelligence.
            </motion.p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-fluid-xl"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode 
                  ? "0 20px 40px rgba(96, 165, 250, 0.3)" 
                  : "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Build Something Amazing</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;