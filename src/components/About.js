import React from 'react';

const About = () => {
  const stats = [
    { number: 50, label: 'Projets réalisés', suffix: '+' },
    { number: 5, label: 'Années d\'expérience', suffix: '+' },
    { number: 100, label: 'Clients satisfaits', suffix: '%' },
    { number: 24, label: 'Support disponible', suffix: '/7' }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              À propos de moi
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Passionné par le{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Développement
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Avec une solide expérience dans le développement web, je maîtrise
              les technologies modernes pour créer des applications performantes
              et intuitives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>

                {/* Main Image Container */}
                <div className="relative w-96 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-3">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-2xl">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/images/abzo.png"}
                      alt="ABZO - Développeur Full Stack"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        console.log("Image failed to load:", e.target.src);
                        // Fallback to gradient with initials if image fails to load
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-8xl font-bold">AB</div>';
                      }}
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                  Full Stack Dev
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg opacity-80">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Développeur Full Stack Passionné
                </h3>

                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Mon expertise couvre l'ensemble du cycle de développement,
                    du concept à la production. Je suis spécialisé dans la
                    création d'applications web modernes, performantes et
                    centrées sur l'expérience utilisateur.
                  </p>

                  <p>
                    Passionné par l'innovation technologique, je m'efforce
                    constamment d'apprendre et de maîtriser les dernières
                    technologies pour offrir des solutions de qualité supérieure
                    à mes clients.
                  </p>

                  <p>
                    Chaque projet est une nouvelle aventure où je peux combiner
                    créativité technique et résolution de problèmes complexes
                    pour créer des expériences digitales exceptionnelles.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Preview */}
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "AWS",
                  "Docker",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-800/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
