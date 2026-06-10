import React, { useState } from 'react';
import { FaCode, FaDatabase, FaServer, FaMobile, FaCloud, FaShieldAlt, FaJava } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Mobile'];

  const skills = [
    // Frontend
    { name: 'JavaScript', icon: <FaCode />, category: 'Frontend', level: 95 },
    { name: 'TypeScript', icon: <FaCode />, category: 'Frontend', level: 90 },
    { name: 'Next.js', icon: <FaCode />, category: 'Frontend', level: 85 },
    { name: 'Vue.js', icon: <FaCode />, category: 'Frontend', level: 80 },
    { name: 'Angular', icon: <FaCode />, category: 'Frontend', level: 75 },
    { name: 'HTML5/CSS3', icon: <FaCode />, category: 'Frontend', level: 95 },
    { name: 'Tailwind CSS', icon: <FaCode />, category: 'Frontend', level: 90 },
    { name: 'Sass/Scss', icon: <FaCode />, category: 'Frontend', level: 85 },
    { name: 'Redux', icon: <FaCode />, category: 'Frontend', level: 85 },
    { name: 'Context API', icon: <FaCode />, category: 'Frontend', level: 90 },

    // Backend
    { name: 'Node.js', icon: <FaServer />, category: 'Backend', level: 95 },
    { name: 'Express.js', icon: <FaServer />, category: 'Backend', level: 90 },
    { name: 'Python', icon: <FaCode />, category: 'Backend', level: 85 },
    { name: 'FastAPI', icon: <FaCode />, category: 'Backend', level: 80 },
    { name: 'Java', icon: <FaCode />, category: 'Backend', level: 80 },
    { name: 'Spring Boot', icon: <FaCode />, category: 'Backend', level: 75 },
    { name: 'C#/.NET', icon: <FaCode />, category: 'Backend', level: 75 },
    { name: 'PHP/Laravel', icon: <FaCode />, category: 'Backend', level: 90 },
    { name: 'REST API', icon: <FaServer />, category: 'Backend', level: 95 },
    { name: 'GraphQL', icon: <FaServer />, category: 'Backend', level: 85 },
    { name: 'WebSocket/Socket.io', icon: <FaServer />, category: 'Backend', level: 90 },

    // Database
    { name: 'MongoDB', icon: <FaDatabase />, category: 'Database', level: 95 },
    { name: 'PostgreSQL', icon: <FaDatabase />, category: 'Database', level: 90 },
    { name: 'MySQL/MariaDB', icon: <FaDatabase />, category: 'Database', level: 90 },
    { name: 'Redis', icon: <FaDatabase />, category: 'Database', level: 85 },
    { name: 'Prisma ORM', icon: <FaDatabase />, category: 'Database', level: 85 },
    { name: 'TypeORM', icon: <FaDatabase />, category: 'Database', level: 80 },
    { name: 'Firestore', icon: <FaDatabase />, category: 'Database', level: 85 },

    // DevOps
    { name: 'Docker', icon: <FaCloud />, category: 'DevOps', level: 90 },
    { name: 'Kubernetes', icon: <FaCloud />, category: 'DevOps', level: 85 },
    { name: 'AWS', icon: <FaCloud />, category: 'DevOps', level: 85 },
    { name: 'Firebase', icon: <FaCloud />, category: 'DevOps', level: 90 },
    { name: 'Vercel/Netlify', icon: <FaCloud />, category: 'DevOps', level: 90 },
    { name: 'Linux/CI-CD', icon: <FaShieldAlt />, category: 'DevOps', level: 85 },

    // Mobile
    { name: 'React Native', icon: <FaMobile />, category: 'Mobile', level: 85 },
    { name: 'Flutter', icon: <FaMobile />, category: 'Mobile', level: 90 },
    { name: 'Dart', icon: <FaCode />, category: 'Mobile', level: 85 },
    { name: 'Capacitor', icon: <FaMobile />, category: 'Mobile', level: 80 },
    { name: 'PWA', icon: <FaMobile />, category: 'Mobile', level: 85 },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              Compétences
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies & Outils
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies et outils que je maîtrise pour créer des applications modernes et performantes
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 bg-gray-100 dark:bg-gray-800/50 p-2 rounded-2xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-right">
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
