import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(true); // Default to dark mode
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Force update all text elements when theme changes
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');

    // Re-initialize i18n to force text re-render
    if (i18n && i18n.language) {
      const currentLang = i18n.language;
      i18n.changeLanguage(currentLang);
    }
  }, [darkMode, i18n]);

  return (
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div role="navigation" aria-label="Sélecteur de langue" className="fixed top-4 right-4 z-50 md:top-4 md:right-4 flex items-center">
        <LanguageSwitcher />
      </div>

      <div role="none">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
