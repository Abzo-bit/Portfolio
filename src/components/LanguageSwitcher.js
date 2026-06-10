import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    // Force update when language changes
    const handleLanguageChange = () => {
      document.documentElement.lang = i18n.language;
      // Force re-render by updating a data attribute
      document.documentElement.setAttribute('data-lang', i18n.language);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const getCurrentLanguage = () => {
    return i18n.language === 'fr' ? 'FR' : 'EN';
  };

  const getOtherLanguage = () => {
    return i18n.language === 'fr' ? 'EN' : 'FR';
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-toggle"
        aria-label="Change language"
      >
        <span className="language-current">{getCurrentLanguage()}</span>
        <span className="language-divider">|</span>
        <span className="language-other">{getOtherLanguage()}</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <button
            onClick={() => changeLanguage('fr')}
            className={`language-option ${i18n.language === 'fr' ? 'active' : ''}`}
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;