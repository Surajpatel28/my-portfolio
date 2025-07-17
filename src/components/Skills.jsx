import React from 'react';
import { 
  SiPython, SiJavascript, SiCplusplus,
  SiReact, SiHtml5, SiCss3, SiMongodb, SiNodedotjs, SiExpress,
  SiPandas, SiNumpy, SiFlask, SiScikitlearn, SiTailwindcss,
  SiFastapi, SiTensorflow, SiOpencv, SiJupyter, SiGit
} from 'react-icons/si';
import { FiDatabase, FiCpu, FiCode, FiLayers } from 'react-icons/fi';
import { useFastScrollAnimation, useStaggeredAnimation } from '../hooks/useFastAnimations';

const Skills = ({ darkMode }) => {
  // Ultra-fast scroll animations
  const [headerRef, headerVisible] = useFastScrollAnimation();
  const [specializationsRef, specializationsVisible] = useStaggeredAnimation(4, 100);
  const [skillsRef, skillsVisible] = useFastScrollAnimation();
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode size={24} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", icon: <SiPython />, description: "Advanced scripting & ML" },
        { name: "Java", icon: <FiCode />, description: "Object-oriented programming" },
        { name: "C/C++", icon: <SiCplusplus />, description: "System programming" },
        { name: "JavaScript", icon: <SiJavascript />, description: "Web development" }
      ]
    },
    {
      title: "Web Development",
      icon: <FiLayers size={24} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, description: "Semantic markup" },
        { name: "CSS3", icon: <SiCss3 />, description: "Modern styling" },
        { name: "React.js", icon: <SiReact />, description: "Component-based UI" },
        { name: "Node.js", icon: <SiNodedotjs />, description: "Server-side JS" },
        { name: "Express.js", icon: <SiExpress />, description: "Web framework" },
        { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database" }
      ]
    },
    {
      title: "Machine Learning",
      icon: <FiCpu size={24} />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, description: "Deep learning framework" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, description: "ML algorithms" },
        { name: "OpenCV", icon: <SiOpencv />, description: "Computer vision" },
        { name: "Jupyter", icon: <SiJupyter />, description: "Interactive notebooks" }
      ]
    },
    {
      title: "Libraries & Tools",
      icon: <FiDatabase size={24} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "NumPy", icon: <SiNumpy />, description: "Numerical computing" },
        { name: "Pandas", icon: <SiPandas />, description: "Data manipulation" },
        { name: "Flask", icon: <SiFlask />, description: "Web framework" },
        { name: "FastAPI", icon: <SiFastapi />, description: "Modern API framework" },
        { name: "Git", icon: <SiGit />, description: "Version control" },
        { name: "Tailwind", icon: <SiTailwindcss />, description: "Utility CSS" }
      ]
    }
  ];

  const specializations = [
    { name: "Data Structures", icon: "🏗️", description: "Algorithms & Problem Solving" },
    { name: "Full Stack Development", icon: "🌐", description: "End-to-end web solutions" },
    { name: "Machine Learning", icon: "🤖", description: "Predictive modeling & AI" },
    { name: "API Development", icon: "🔗", description: "RESTful services & integration" }
  ];

  return (
    <section 
      id="skills" 
      className={`py-fluid-xl px-fluid-sm sm:px-fluid-md lg:px-fluid-lg ${
        darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto max-w-8xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'fade-in' : 'opacity-0'}`}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My expertise spans across multiple domains including programming languages, web development, 
            machine learning, and modern development frameworks
          </p>
        </div>

        {/* Specializations Overview - Ultra Fast */}
        <div
          ref={specializationsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {specializations.map((spec, index) => (
            <div
              key={spec.name}
              className={`p-6 rounded-2xl text-center hover-lift min-h-32 transition-all duration-150 ${
                specializationsVisible.has(index) ? `fade-in-fast stagger-${index + 1}` : 'opacity-0'
              } ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-700 hover:border-gray-600' 
                  : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="text-3xl mb-3">{spec.icon}</div>
              <h3 className={`font-semibold mb-2 text-base ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {spec.name}
              </h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Categories - Ultra Fast */}
        <div ref={skillsRef} className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-8 rounded-2xl relative overflow-hidden hover-lift transition-all duration-200 ${
                skillsVisible ? `fade-in stagger-${categoryIndex + 1}` : 'opacity-0'
              } ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-lg mr-4 bg-gradient-to-r ${category.color}`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Grid - Mobile: Icons only, Desktop: Full cards */}
              
              {/* Mobile View - Enhanced Touch Experience */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 sm:hidden">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-xl hover-scale text-center min-h-20 flex flex-col items-center justify-center transition-all duration-150 ${
                      darkMode 
                        ? 'bg-gray-800/50 hover:bg-gray-700 border border-gray-700/30' 
                        : 'bg-white/50 hover:bg-white border border-gray-200/30'
                    }`}
                    title={skill.name}
                  >
                    <div className={`text-2xl mb-2 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {skill.icon}
                    </div>
                    <span className={`text-xs font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Desktop View - Full cards */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-lg hover-lift transition-all duration-150 ${
                      darkMode 
                        ? 'bg-gray-800/50 hover:bg-gray-700' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`text-2xl mr-3 flex-shrink-0 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {skill.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className={`font-semibold mb-1 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} opacity-5 rounded-full -translate-y-16 translate-x-16`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Ultra Fast */}
        <div className="text-center mt-16 fade-in">
          <div className={`inline-flex items-center px-6 py-3 rounded-full hover-scale transition-all duration-150 ${
            darkMode 
              ? 'bg-gray-800 border border-gray-700 text-gray-300' 
              : 'bg-white border border-gray-200 text-gray-600 shadow-sm'
          }`}>
            <span className="text-sm font-medium">
              🚀 Always learning and growing my technical expertise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;