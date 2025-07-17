import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../constants/socialLinks';

const Contact = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: SOCIAL_LINKS.email.replace('mailto:', ''),
      href: SOCIAL_LINKS.email
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
          ? 'bg-gray-900/50' 
          : 'bg-white/50'
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
          <h2 className={`text-fluid-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-fluid-base max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? Let's connect and discuss how we can work together 
            to create something amazing.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards - Centered Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-lg text-center ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200 hover:shadow-xl'
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <info.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-xl font-semibold hover:text-blue-500 transition-colors duration-200 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`text-xl font-semibold ${
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

          {/* Single Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="mr-3" size={20} />
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
