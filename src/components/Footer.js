import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: 'home' },
    { name: 'À propos', href: 'about' },
    { name: 'Compétences', href: 'skills' },
    { name: 'Projets', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/feed/",
      color: "hover:text-blue-500",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      url: "https://wa.me/+221785474553",
      color: "hover:text-green-500",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ABZO
                  </h3>
                  <p className="text-gray-400 text-sm">Développeur Full Stack</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Développeur Full Stack passionné par la création d'expériences web exceptionnelles.
                Spécialisé dans les technologies modernes pour des solutions innovantes et performantes.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 abzodieng@gmail.com</p>
                <p>📱 +221 785464553</p>
                <p>📍 Dakar, Sénégal</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Développement Web
                </li>
                <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Applications Mobile
                </li>
                <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  API & Backend
                </li>
                <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Consulting Technique
                </li>
                <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Maintenance & Support
                </li>
                <li>
                  <a
                    href="/Aboubakry_Dieng.pdf"
                    download="Aboubakry_Dieng_CV.pdf"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Télécharger CV
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} ABZO. Tous droits réservés.</span>
              <span className="flex items-center">
                Fait avec <FaHeart className="w-4 h-4 text-red-500 mx-1" /> et passion
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-700/50 border border-gray-700/50 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Retour en haut"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
