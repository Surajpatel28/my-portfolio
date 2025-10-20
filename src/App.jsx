import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App = () => {

  return (
    <div className={
      'min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100'
    }>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
      </motion.main>

      <Footer />

      {/* As of now , not working because of undefined n8n workflow */}
      {/* AI Chatbot */}
      {/* <ChatBot /> */}
    </div>
  );
};

export default App;