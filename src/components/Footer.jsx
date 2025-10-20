import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants/socialLinks';

const Footer = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true);
      setTimeout(() => {
        setIsHighlighted(false);
      }, 3000); // Highlight for 3 seconds
    };

    window.addEventListener('highlightConnect', handleHighlight);
    return () => window.removeEventListener('highlightConnect', handleHighlight);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#about' },
    { name: 'Projects', href: '#projects' }
  ];

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: SOCIAL_LINKS.github,
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin size={20} />,
      href: SOCIAL_LINKS.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <FaXTwitter size={20} />,
      href: SOCIAL_LINKS.twitter,
      label: 'X (Twitter)'
    },
    {
      icon: <FiMail size={20} />,
      href: SOCIAL_LINKS.email,
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className={`relative bg-gray-50 border-t border-gray-200`}>
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 right-4 sm:right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FiArrowUp size={20} />
      </motion.button>

      {/* Mobile-First Footer Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">

        {/* Mobile Layout - Single Column */}
        <div className="block md:hidden space-y-6">
          {/* Brand Section - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-2 sm:space-y-4"
          >
            <div className="text-xl sm:text-2xl font-bold text-gray-800">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
              {PERSONAL_INFO.description}
            </p>
          </motion.div>

          {/* Social Links - Mobile Priority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-2xl ${isHighlighted
              ? 'border-2 border-yellow-400'
              : ''
              }`}
            animate={
              isHighlighted
                ? {
                  borderColor: ['#facc15', '#fbbf24', '#facc15'],
                  scale: [1, 1.02, 1],
                }
                : { borderColor: 'transparent', scale: 1 }
            }
            transition={
              isHighlighted
                ? {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
                : { duration: 0.3 }
            }
          >
            <h3 className={`text-center text-base sm:text-lg font-semibold transition-colors duration-500 ${isHighlighted ? 'text-gray-900' : 'text-gray-900'
              }`}>
              Let's Connect
            </h3>
            <div className="flex justify-center space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 rounded-full transition-all duration-300 touch:min-w-12 touch:min-h-12 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                  animate={isHighlighted ? { scale: [1, 1.1, 1] } : {}}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold text-gray-800">
              {PERSONAL_INFO.name}
            </div>
            <p className={`text-sm leading-relaxed max-w-xs text-gray-600`}>
              {PERSONAL_INFO.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className={`text-lg font-semibold text-gray-900`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-sm transition-colors duration-200 hover:text-blue-500 text-gray-600`}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`space-y-4 p-6 rounded-2xl ${isHighlighted
              ? 'border-2 border-yellow-400'
              : ''
              }`}
            animate={
              isHighlighted
                ? {
                  borderColor: ['#facc15', '#fbbf24', '#facc15'],
                  scale: [1, 1.02, 1],
                }
                : { borderColor: 'transparent', scale: 1 }
            }
            transition={
              isHighlighted
                ? {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
                : { duration: 0.3 }
            }
          >
            <h3 className={`text-lg font-semibold transition-colors duration-500 ${isHighlighted ? 'text-gray-900' : 'text-gray-900'
              }`}>
              Let's Connect
            </h3>
            <p className={`text-sm text-gray-600`}>
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;