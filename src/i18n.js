import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      // Navigation
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      testimonials: 'Témoignages',
      contact: 'Contact',
      // Hero
      hero_title: 'Aboubakry DIENG',
      hero_subtitle: 'Développeur Full Stack passionné',
      hero_description: 'Je crée des applications web modernes et intuitives avec les dernières technologies. Passionné par l\'innovation et l\'expérience utilisateur exceptionnelle.',
      hero_button_projects: 'Voir mes projets',
      hero_button_contact: 'Discuter sur WhatsApp',
      // About
      about_title: 'Développeur Full Stack Passionné',
      about_description_1: 'Mon expertise couvre l\'ensemble du cycle de développement, du concept à la production. Je suis spécialisé dans la création d\'applications web modernes, performantes et centrées sur l\'expérience utilisateur.',
      about_description_2: 'Passionné par l\'innovation technologique, je m\'efforce constamment d\'apprendre et de maîtriser les dernières technologies pour offrir des solutions de qualité supérieure à mes clients.',
      about_description_3: 'Chaque projet est une nouvelle aventure où je peux combiner créativité technique et résolution de problèmes complexes pour créer des expériences digitales exceptionnelles.',
      // Skills
      skills_title: 'Technologies & Outils',
      skills_description: 'Technologies et outils que je maîtrise pour créer des applications modernes et performantes',
      // Projects
      projects_title: 'Mes Projets',
      projects_description: 'Découvrez quelques-uns de mes projets les plus récents et les plus aboutis',
      projects_category_all: 'Tous',
      projects_category_fullstack: 'Full Stack',
      projects_category_mobile: 'Mobile',
      projects_category_game: 'Jeux',
      projects_featured: 'En vedette',
      projects_view_code: 'Code',
      projects_view_demo: 'Demo',
      // Testimonials
      testimonials_title: 'Ce que disent',
      testimonials_subtitle: 'mes clients',
      testimonials_description: 'Découvrez les retours d\'expérience de clients satisfaits et leurs témoignages sur nos collaborations',
      testimonials_button: 'Laisser un témoignage',
      testimonials_total: 'Témoignages',
      testimonials_average: 'Note moyenne',
      testimonials_satisfaction: 'Satisfaction',
      testimonials_support: 'Support',
      // Contact
      contact_title: 'Restons en',
      contact_subtitle: 'Contact',
      contact_description: 'N\'hésitez pas à me contacter pour vos projets ou collaborations. Je suis toujours ouvert aux nouvelles opportunités !',
      contact_info_email: 'Email',
      contact_info_phone: 'Téléphone',
      contact_info_location: 'Localisation',
      contact_form_name: 'Nom complet',
      contact_form_email: 'Email',
      contact_form_subject: 'Sujet',
      contact_form_message: 'Message',
      contact_form_button: 'Envoyer le message',
      contact_form_success: 'Message envoyé !',
      contact_form_success_message: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
      contact_social: 'Réseaux sociaux',
      contact_available: 'Disponible pour de nouveaux projets',
      contact_response_time: 'Réponse sous 24h',
      // Footer
      footer_download_cv: 'Télécharger CV',
      footer_services: 'Services',
      footer_service_web: 'Développement Web',
      footer_service_mobile: 'Applications Mobile',
      footer_service_api: 'API & Backend',
      footer_made_with: 'Fait avec',
      footer_and: 'et',
      footer_passion: 'passion',
      // Common
      loading: 'Chargement...',
      error: 'Erreur',
      submit: 'Soumettre',
      cancel: 'Annuler',
      close: 'Fermer',
      read_more: 'Lire la suite',
      view_less: 'Voir moins',
      featured: 'En vedette',
      new: 'Nouveau',
      popular: 'Populaire',
      all: 'Tous',
      // Stats
      stats_projects: 'Projets réalisés',
      stats_experience: 'Années d\'expérience',
      stats_technologies: 'Technologies maîtrisées',
      stats_support: 'Support disponible'
    }
  },
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
      // Hero
      hero_title: 'Aboubakry DIENG',
      hero_subtitle: 'Passionate Full Stack Developer',
      hero_description: 'I create modern and intuitive web applications with the latest technologies. Passionate about innovation and exceptional user experience.',
      hero_button_projects: 'View My Projects',
      hero_button_contact: 'Chat on WhatsApp',
      // About
      about_title: 'Passionate Full Stack Developer',
      about_description_1: 'My expertise covers the entire development cycle, from concept to production. I specialize in creating modern, performant, and user-centric web applications.',
      about_description_2: 'Passionate about technological innovation, I constantly strive to learn and master the latest technologies to deliver superior quality solutions to my clients.',
      about_description_3: 'Each project is a new adventure where I can combine technical creativity with complex problem-solving to create exceptional digital experiences.',
      // Skills
      skills_title: 'Technologies & Tools',
      skills_description: 'Technologies and tools I master to create modern and performant applications',
      // Projects
      projects_title: 'My Projects',
      projects_description: 'Discover some of my most recent and accomplished projects',
      projects_category_all: 'All',
      projects_category_fullstack: 'Full Stack',
      projects_category_mobile: 'Mobile',
      projects_category_game: 'Games',
      projects_featured: 'Featured',
      projects_view_code: 'Code',
      projects_view_demo: 'Live Demo',
      // Testimonials
      testimonials_title: 'What My',
      testimonials_subtitle: 'Clients Say',
      testimonials_description: 'Discover feedback from satisfied clients and their testimonials about our collaborations',
      testimonials_button: 'Leave a Testimonial',
      testimonials_total: 'Total Reviews',
      testimonials_average: 'Average Rating',
      testimonials_satisfaction: 'Satisfaction',
      testimonials_support: 'Support',
      // Contact
      contact_title: 'Let\'s',
      contact_subtitle: 'Connect',
      contact_description: 'Feel free to contact me for your projects or collaborations. I am always open to new opportunities!',
      contact_info_email: 'Email',
      contact_info_phone: 'Phone',
      contact_info_location: 'Location',
      contact_form_name: 'Full Name',
      contact_form_email: 'Email',
      contact_form_subject: 'Subject',
      contact_form_message: 'Message',
      contact_form_button: 'Send Message',
      contact_form_success: 'Message Sent!',
      contact_form_success_message: 'Thank you for your message. I will get back to you shortly.',
      contact_social: 'Social Networks',
      contact_available: 'Available for New Projects',
      contact_response_time: 'Response within 24h',
      // Footer
      footer_download_cv: 'Download CV',
      footer_services: 'Services',
      footer_service_web: 'Web Development',
      footer_service_mobile: 'Mobile Apps',
      footer_service_api: 'API & Backend',
      footer_made_with: 'Made with',
      footer_and: 'and',
      footer_passion: 'passion',
      // Common
      loading: 'Loading...',
      error: 'Error',
      submit: 'Submit',
      cancel: 'Cancel',
      close: 'Close',
      read_more: 'Read More',
      view_less: 'View Less',
      featured: 'Featured',
      new: 'New',
      popular: 'Popular',
      all: 'All',
      // Stats
      stats_projects: 'Projects Completed',
      stats_experience: 'Years of Experience',
      stats_technologies: 'Technologies Mastered',
      stats_support: 'Support Available'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;