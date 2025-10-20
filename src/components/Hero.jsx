import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import { HiLocationMarker } from 'react-icons/hi';
import { SOCIAL_LINKS } from '../constants/socialLinks';
import { useFastScrollAnimation, useStaggeredAnimation, useMicroInteraction } from '../hooks/useFastAnimations';
// import TextType from '../reactbits/TextType';
import DecryptedText from '../reactbits/DecryptedText';
import SplitText from './split-text';

const Hero = () => {
  const [showNotification, setShowNotification] = useState(false);

  // Ultra-fast scroll animations
  const [heroRef, heroVisible] = useFastScrollAnimation();
  const [contentRef, contentVisible] = useStaggeredAnimation(3, 200);
  const [isPressed, microHandlers] = useMicroInteraction();

  const scrollToContact = () => {
    const element = document.querySelector('#footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Trigger highlight after scroll completes
      setTimeout(() => {
        const event = new CustomEvent('highlightConnect');
        window.dispatchEvent(event);
      }, 800); // Delay to allow smooth scroll to complete
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-fluid-md lg:px-fluid-lg pt-16 sm:pt-20 pb-6 sm:pb-8"
      ref={heroRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={
          'absolute top-1/4 -left-20 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full opacity-20 animate-spin-slow bg-blue-500'
        } />
        <div className={
          'absolute bottom-1/4 -right-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full opacity-20 animate-spin-reverse bg-purple-500'
        } />
      </div>

      <div className="container mx-auto max-w-8xl grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-10">
        {/* Text Content */}
        <div
          ref={contentRef}
          className={`text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6 md:space-y-fluid-sm transition-all duration-700 ease-out ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
        >
          {/* Greeting */}
          <p
            className={`text-fluid-lg sm:text-fluid-2xl transition-all duration-500 ease-out delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} text-gray-800`}
          >
            Hello, I'm
          </p>

          {/* Name */}
          {/* Desktop / Large screen (>= 1024px) */}
          <div className="my-6 sm:my-8 md:my-10 w-full">
            {/* Desktop: left aligned SplitText */}
            <div className="hidden lg:block w-full">
              <SplitText text="SURAJ" align="left" />
            </div>

            {/* Mobile: centered fallback */}
            <div className="block lg:hidden text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-wide">
                SURAJ
              </h1>
            </div>
          </div>



          {/* Title */}
          <h2
            className={`transition-all duration-600 ease-out delay-600 text-fluid-xl sm:text-fluid-xl md:text-fluid-2xl lg:text-fluid-3xl font-semibold ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} text-gray-800`}
          >
            <div style={{ marginTop: '0.5rem' }}>
              <DecryptedText
                text="AI-ML Enthusiast!"
                animateOn="view"
                revealDirection="center"
              />
            </div>
          </h2>

          {/* Location */}
          <div
            className={`flex items-center justify-center lg:justify-start gap-2 transition-all duration-600 ease-out delay-800 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} text-gray-800`}
          >
            <HiLocationMarker className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-fluid-base sm:text-fluid-lg">India</span>
          </div>

          {/* Description - Responsive content */}
          <p
            className={`text-fluid-sm sm:text-fluid-base md:text-fluid-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 duration-100 ease-out delay-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} text-gray-800`}
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
          </p>

          {/* CTA Buttons */}

          <div
            className={`flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-fluid-md justify-center lg:justify-start pt-3 sm:pt-4 md:pt-fluid-sm transition-all duration-600 ease-out delay-1200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-fluid-sm sm:text-fluid-base min-h-12 touch:min-h-14 hover-lift"
              {...microHandlers}
            >
              <FiDownload className="mr-2 w-5 h-5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={scrollToContact}
              className={
                'inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-4 border-2 font-semibold rounded-full transition-all duration-300 text-fluid-sm sm:text-fluid-base min-h-12 touch:min-h-14 hover-lift border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }
              {...microHandlers}
            >
              <FiMail className="mr-2 w-5 h-5" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex gap-4 sm:gap-6 justify-center lg:justify-start pt-3 sm:pt-4 md:pt-fluid-sm transition-all duration-600 ease-out delay-1400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'p-4 rounded-full transition-all duration-300 min-w-14 min-h-14 flex items-center justify-center hover-scale bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
              }
              {...microHandlers}
            >
              <FiGithub className="w-6 h-6" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'p-4 rounded-full transition-all duration-300 min-w-14 min-h-14 flex items-center justify-center hover-scale bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
              }
              {...microHandlers}
            >
              <FiLinkedin className="w-6 h-6" />
            </a>

            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'p-4 rounded-full transition-all duration-300 min-w-14 min-h-14 flex items-center justify-center hover-scale bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
              }
              {...microHandlers}
            >
              <BsTwitterX className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Avatar/Image Section - Progressive display */}
        <div
          className={`hidden sm:flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-800 ease-out delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
        >
          <div className="relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden animate-float">
              <img
                src="snow.jpeg"
                alt="Jon Snow"
                className="w-full h-full object-cover object-center rounded-full"
                draggable={false}
              />
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full opacity-80 animate-spin-slow"
            />
            <div
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full opacity-80 animate-spin-reverse"
            />
          </div>
        </div>

      </div>

      {/* Work in Progress Notification */}
      {showNotification && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 max-w-xs sm:max-w-sm transition-all duration-300 ease-out ${showNotification ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
        >
          <div className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-white to-gray-50 border border-gray-200`}>
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>

            {/* Content */}
            <div className="relative p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4">
              {/* Animated icon */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 animate-spin-slow"
              >
                <div
                  className="text-white text-lg sm:text-xl animate-pulse"
                >
                  🚧
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-sm sm:text-lg text-gray-900`}>
                  Work in Progress
                </h4>
                <p className={`text-xs sm:text-sm truncate text-gray-800`}>
                  CV will be available soon! 🚀
                </p>
              </div>

              {/* Progress bar animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 animate-progress"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;