import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhoneCall, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { socialLinks } from '../constants/socialLinks';

const Contact = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'surajsingh.work@gmail.com',
      href: 'mailto:surajsingh.work@gmail.com'
    },
    {
      icon: FiPhoneCall,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'India',
      href: null
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-20 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? Let's connect and discuss how we can work together 
            to create something amazing.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750'
                    : 'bg-white border border-gray-200 hover:shadow-xl'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-lg font-semibold hover:text-blue-600 transition-colors duration-200 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`text-lg font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Connect
            </h3>
            
            <div className={`p-8 rounded-2xl ${
              darkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in machine learning and web development.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:surajsingh.work@gmail.com"
                  className="flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMail className="mr-2" size={18} />
                  Send Email
                </motion.a>
                
                <motion.a
                  href="tel:+919876543210"
                  className={`flex items-center justify-center w-full py-4 px-6 border-2 border-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ${
                    darkMode 
                      ? 'text-blue-400 hover:text-white' 
                      : 'text-blue-600'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiPhoneCall className="mr-2" size={18} />
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className={`text-xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Follow Me
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full transition-all duration-300 hover:shadow-lg ${
                    darkMode
                      ? 'bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:shadow-xl'
                  }`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
