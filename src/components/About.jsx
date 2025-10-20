import React from 'react';
import {
  SiPython, SiJavascript, SiCplusplus,
  SiReact, SiHtml5, SiCss3, SiMongodb, SiNodedotjs, SiExpress,
  SiPandas, SiNumpy, SiFlask, SiScikitlearn, SiTailwindcss,
  SiFastapi, SiTensorflow, SiOpencv, SiJupyter, SiGit
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { FiDatabase, FiCpu, FiCode, FiLayers } from 'react-icons/fi';
import { useFastScrollAnimation } from '../hooks/useFastAnimations';

// Self-contained SVG icon components for a professional look.
const DataStructuresIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const FullStackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12l-8-8-8 8 8 8 8-8z"></path>
    <path d="M12 2v20"></path>
  </svg>
);

const MachineLearningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"></path>
    <rect x="2" y="10" width="12" height="12" rx="2"></rect>
    <path d="M12 10v12"></path>
    <path d="M18 10V4h-4"></path>
  </svg>
);

const ApiDevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);

const About = () => {
  const [headerRef, headerVisible] = useFastScrollAnimation();
  const [contentRef, contentVisible] = useFastScrollAnimation();

  const services = [
    {
      title: "Data Structures",
      icon: <DataStructuresIcon />,
    },
    {
      title: "Full Stack Dev",
      icon: <FullStackIcon />,
    },
    {
      title: "Machine Learning",
      icon: <MachineLearningIcon />,
    },
    {
      title: "API Development",
      icon: <ApiDevIcon />,
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <FiCode size={16} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ]
    },
    {
      title: "Web Dev",
      icon: <FiLayers size={16} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "ML & AI",
      icon: <FiCpu size={16} />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Numpy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> }
      ]
    },
    {
      title: "Tools",
      icon: <FiDatabase size={16} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Git", icon: <SiGit /> }
      ]
    }
  ];

  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-6 sm:mb-8 md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-900">
            About Me & Skills
          </h2>
        </div>

        {/* Two Column Layout */}
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {/* Left: About Me */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Who I Am</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Hello, my name is <span className="font-semibold text-gray-900">Suraj Patel</span>. I am passionate about the fields of Machine Learning and Artificial Intelligence, and I thrive on a cycle of continuous learning and building.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  My journey into technology began with full-stack development using the MERN stack. However, my curiosity led me to explore a machine learning tutorial one day, and I was immediately captivated.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  The idea that a machine could learn and make predictions from data using mathematical functions was fascinating. From that moment, I dove deep into the world of AI and have been dedicated to honing my skills ever since.
                </p>
              </div>
            </div>

            {/* Specializations */}
            <div className="pt-2 sm:pt-4">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-gray-900">What I Do</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center group cursor-pointer"
                  >
                    <div className="text-gray-400 group-hover:text-indigo-600 transition-colors duration-300 mr-4">
                      {service.icon}
                    </div>
                    <h5 className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Skills */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 shadow-sm"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`p-2 rounded-lg mr-2 sm:mr-3 bg-gradient-to-r ${category.color}`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center p-1.5 sm:p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-lg sm:text-xl mr-2 sm:mr-3 text-blue-600">
                          {skill.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;