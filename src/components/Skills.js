import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaTrello,
  FaSitemap
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const getProgressColor = (level) => {
    if (level <= 30) return 'bg-red-500';
    if (level <= 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const skills = [
    {
      name: 'HTML5',
      level: 95,
      category: 'Frontend',
      icon: <FaHtml5 className="text-orange-500" />
    },
    {
      name: 'CSS3',
      level: 90,
      category: 'Frontend',
      icon: <FaCss3Alt className="text-blue-500" />
    },
    {
      name: 'JavaScript',
      level: 88,
      category: 'Frontend',
      icon: <FaJs className="text-yellow-500" />
    },
    {
      name: 'React',
      level: 85,
      category: 'Frontend',
      icon: <FaReact className="text-blue-400" />
    },
    {
      name: 'Tailwind CSS',
      level: 88,
      category: 'Frontend',
      icon: <SiTailwindcss className="text-teal-500" />
    },
    {
      name: 'Bootstrap',
      level: 85,
      category: 'Frontend',
      icon: <FaBootstrap className="text-purple-600" />
    },
    {
      name: 'Node.js',
      level: 82,
      category: 'Backend',
      icon: <FaNodeJs className="text-green-500" />
    },
    {
      name: 'Express.js',
      level: 80,
      category: 'Backend',
      icon: <SiExpress className="text-gray-600" />
    },
    {
      name: 'PHP',
      level: 78,
      category: 'Backend',
      icon: <FaPhp className="text-purple-500" />
    },
    {
      name: 'Laravel',
      level: 75,
      category: 'Backend',
      icon: <FaLaravel className="text-red-500" />
    },
    {
      name: 'MongoDB',
      level: 80,
      category: 'Database',
      icon: <SiMongodb className="text-green-600" />
    },
    {
      name: 'PostgreSQL',
      level: 75,
      category: 'Database',
      icon: <SiPostgresql className="text-blue-600" />
    },
    {
      name: 'Git',
      level: 90,
      category: 'Tools',
      icon: <FaGitAlt className="text-orange-600" />
    },
    {
      name: 'Docker',
      level: 75,
      category: 'Tools',
      icon: <FaDocker className="text-blue-600" />
    },
    {
      name: 'Figma',
      level: 80,
      category: 'Design',
      icon: <FaFigma className="text-purple-500" />
    },
    {
      name: 'Trello',
      level: 85,
      category: 'Tools',
      icon: <FaTrello className="text-blue-500" />
    },
    {
      name: 'StarUML',
      level: 78,
      category: 'Design',
      icon: <FaSitemap className="text-indigo-600" />
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Design'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              Mes Compétences
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies &{' '}
              <span className="text-blue-600">
                Outils
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies et outils que je maîtrise pour créer des applications modernes et performantes
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600  text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-200 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${getProgressColor(skill.level)} rounded-full relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-2 h-2 rounded-full ${
                          star <= Math.ceil(skill.level / 20)
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Avancé' : 'Intermédiaire'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Découvrir mes projets →
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
