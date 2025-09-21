import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'WhatsApp Clone',
      description: 'Application de messagerie instantanée avec interface moderne et fonctionnalités avancées. Communication en temps réel, notifications push et interface responsive.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: process.env.PUBLIC_URL + '/assets/images/whatsapp.png',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Full Stack',
      featured: true,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 2,
      title: 'Maxit Game',
      description: 'Jeu de stratégie en ligne avec intelligence artificielle et multijoueur. Interface interactive avec animations fluides et scoring en temps réel.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'WebSockets'],
      image: process.env.PUBLIC_URL + '/assets/images/Maxit.png',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Game',
      featured: false,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Trello Clone',
      description: 'Outil de gestion de projet avec interface drag-and-drop et collaboration en temps réel. Fonctionnalités avancées de gestion d\'équipe.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
      image: process.env.PUBLIC_URL + '/assets/images/trello.png',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Full Stack',
      featured: true,
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: 4,
      title: 'Jeu Ludo',
      description: 'Version numérique du jeu de société classique avec animations fluides et multijoueur local. Design moderne et interface intuitive.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas'],
      image: process.env.PUBLIC_URL + '/assets/images/ludo.png',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Game',
      featured: false,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      title: 'Snake Game',
      description: 'Le jeu du serpent classique revisité avec plusieurs niveaux, power-ups et scoring global. Animations fluides et contrôles responsives.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Local Storage'],
      image: process.env.PUBLIC_URL + '/assets/images/snike.jpeg',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Game',
      featured: false,
      gradient: 'from-green-400 to-teal-500'
    },
    {
      id: 6,
      title: 'Pacman Clone',
      description: 'Recréation fidèle du jeu d\'arcade avec niveaux personnalisés, scoring et effets sonores. Intelligence artificielle pour les fantômes.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Web Audio API'],
      image: process.env.PUBLIC_URL + '/assets/images/pacman.png',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Game',
      featured: true,
      gradient: 'from-red-400 to-pink-500'
    }
  ];

  const categories = ['All', 'Full Stack', 'Game'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              Mes Projets
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Portfolio &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Réalisations
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez quelques-uns de mes projets les plus récents et les plus aboutis
            </p>
          </div>

          {/* Featured Projects */}
          {activeFilter === 'All' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Projets en Vedette
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <FaRocket className="w-3 h-3" />
                        Featured
                      </span>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          console.log('Project image failed to load:', e.target.src);
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center">
                              <div class="text-white text-6xl font-bold">${project.title.charAt(0)}</div>
                            </div>
                          `;
                        }}
                        onLoad={(e) => {
                          console.log('Project image loaded successfully:', e.target.src);
                        }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                      {/* Action Buttons */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors shadow-lg"
                          >
                            <FaGithub className="w-5 h-5" />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg"
                          >
                            <FaExternalLinkAlt className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-900 dark:bg-gray-800 text-white text-center py-2 px-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                        >
                          <FaCode className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium shadow-lg"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-2xl">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.log('Project image failed to load:', e.target.src);
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center">
                          <div class="text-white text-4xl font-bold">${project.title.charAt(0)}</div>
                        </div>
                      `;
                    }}
                    onLoad={(e) => {
                      console.log('Project image loaded successfully:', e.target.src);
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <FaCode className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
