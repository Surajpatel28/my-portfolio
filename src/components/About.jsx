import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className={`text-center ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              I'm a <span className="text-blue-500 font-semibold">Machine Learning Enthusiast</span> passionate about 
              building intelligent solutions that bridge the gap between human creativity and artificial intelligence.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;