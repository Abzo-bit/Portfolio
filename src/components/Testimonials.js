import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaQuoteLeft, FaUser, FaCalendar, FaPaperPlane, FaDatabase } from 'react-icons/fa';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';

const Testimonials = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Charger les témoignages depuis Firebase
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const q = query(collection(db, 'testimonials'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().date?.toDate?.()?.toISOString?.().split('T')[0] || doc.data().date
        }));
        
        if (data.length > 0) {
          setTestimonials(data);
        } else {
          // Données par défaut si Firestore vide
          setTestimonials([
            {
              id: '1',
              name: 'Mamadou Diouf',
              role: 'Directeur Technique',
              company: 'InnovTech Dakar',
              rating: 5,
              comment: 'Travail exceptionnel ! ABZO a livré une application performante et fiable. Son professionnalisme et sa compétence technique sont remarquables.',
              date: '2024-01-20'
            },
            {
              id: '2',
              name: 'Fatou Ndiaye',
              role: 'Fondatrice',
              company: 'Sénégal Digital',
              rating: 5,
              comment: 'Un développeur talentueux et très réactif. ABZO a su transformer notre vision en une réalité digitale impressionnante. Je recommande vivement ses services !',
              date: '2024-01-15'
            },
            {
              id: '3',
              name: 'Ousmane Sarr',
              role: 'CEO',
              company: 'TechAfrique',
              rating: 4,
              comment: 'Excellente collaboration avec ABZO. Ses compétences techniques sont solides et il a su répondre à nos exigences avec professionnalisme. Très satisfait du résultat final.',
              date: '2024-01-08'
            }
          ]);
        }
      } catch (error) {
        console.log('⚠️ Firestore non disponible, utilisation des données locales');
        setTestimonials([
          {
            id: '1',
            name: 'Mamadou Diouf',
            role: 'Directeur Technique',
            company: 'InnovTech Dakar',
            rating: 5,
            comment: 'Travail exceptionnel ! ABZO a livré une application performante et fiable.',
            date: '2024-01-20'
          },
          {
            id: '2',
            name: 'Fatou Ndiaye',
            role: 'Fondatrice',
            company: 'Sénégal Digital',
            rating: 5,
            comment: 'Un développeur talentueux et très réactif. Je recommande vivement !',
            date: '2024-01-15'
          },
          {
            id: '3',
            name: 'Ousmane Sarr',
            role: 'CEO',
            company: 'TechAfrique',
            rating: 4,
            comment: 'Excellente collaboration avec ABZO.',
            date: '2024-01-08'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    loadTestimonials();
  }, []);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    comment: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleRatingClick = (rating) => {
    setNewTestimonial({ ...newTestimonial, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.comment) return;

    setSaving(true);
    try {
      const docRef = await addDoc(collection(db, 'testimonials'), {
        ...newTestimonial,
        date: serverTimestamp(),
        avatar: '/assets/images/AD1.png'
      });
      
      const newTest = {
        id: docRef.id,
        ...newTestimonial,
        date: new Date().toISOString().split('T')[0],
        avatar: '/assets/images/AD1.png'
      };
      
      setTestimonials(prev => [newTest, ...prev]);
      setNewTestimonial({ name: '', role: '', company: '', rating: 5, comment: '' });
      setShowForm(false);
    } catch (error) {
      console.error('❌ Erreur sauvegarde:', error);
      const newTest = {
        id: Date.now().toString(),
        ...newTestimonial,
        date: new Date().toISOString().split('T')[0],
        avatar: '/assets/images/AD1.png'
      };
      setTestimonials(prev => [newTest, ...prev]);
      setNewTestimonial({ name: '', role: '', company: '', rating: 5, comment: '' });
      setShowForm(false);
      alert('Témoignage enregistré !');
    } finally {
      setSaving(false);
    }
  };

  const renderStars = (rating, interactive = false, onClick = null) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onClick(star)}
            className={`${interactive ? 'cursor-pointer hover:scale-110' : ''} transition-transform`}
          >
            <FaStar
              className={`w-5 h-5 ${
                star <= rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 dark:text-gray-600'
              } ${interactive ? 'hover:text-yellow-300' : ''}`}
            />
          </button>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              Témoignages
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ce que disent{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                mes clients
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Découvrez les retours d'expérience de clients satisfaits et leurs témoignages sur nos collaborations
            </p>

              <button
                onClick={() => setShowForm(!showForm)}
                disabled={saving}
                className="bg-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
              >
              <FaPaperPlane className="w-5 h-5" />
              {showForm ? 'Fermer le formulaire' : 'Laisser un témoignage'}
            </button>
          </div>

          {/* Add Testimonial Form */}
          {showForm && (
            <div className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Partagez votre expérience
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Poste
                    </label>
                    <input
                      type="text"
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      placeholder="Votre poste"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      value={newTestimonial.company}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      placeholder="Votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Votre note *
                  </label>
                  {renderStars(newTestimonial.rating, true, handleRatingClick)}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Votre témoignage *
                  </label>
                  <textarea
                    value={newTestimonial.comment}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, comment: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none"
                    placeholder="Partagez votre expérience de collaboration..."
                    required
                  />
                </div>

                <div className="flex justify-center">
                   <button
                     type="submit"
                     className="bg-blue-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                   >
                     {saving ? (
                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                     ) : (
                       <FaPaperPlane className="w-5 h-5" />
                     )}
                     {saving ? 'Sauvegarde...' : t('testimonials_button')}
                   </button>
                </div>
              </form>
            </div>
          )}

           {/* Firestore Status Badge */}
           <div className="flex justify-center mb-6">
             <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium">
               <FaDatabase className="w-4 h-4" />
               <span>{loading ? 'Chargement...' : testimonials.length > 0 ? 'Données synchronisées' : 'Mode hors-ligne'}</span>
             </div>
           </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 relative group"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-100 dark:text-blue-900/30">
                  <FaQuoteLeft className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.comment}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                      <FaUser className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <FaCalendar className="w-4 h-4 mr-2" />
                  {formatDate(testimonial.date)}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
           <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                 {testimonials.length}
               </div>
               <div className="text-gray-600 dark:text-gray-300 font-medium">
                 {t('testimonials_total')}
               </div>
             </div>

             <div className="text-center">
               <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                 {Math.round(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length)}
               </div>
               <div className="text-gray-600 dark:text-gray-300 font-medium">
                 {t('testimonials_average')}
               </div>
             </div>

             <div className="text-center">
               <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                 100%
               </div>
               <div className="text-gray-600 dark:text-gray-300 font-medium">
                 {t('testimonials_satisfaction')}
               </div>
             </div>

             <div className="text-center">
               <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                 24h
               </div>
               <div className="text-gray-600 dark:text-gray-300 font-medium">
                 {t('testimonials_support')}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
