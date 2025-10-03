import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaUser, FaCalendar, FaPaperPlane } from 'react-icons/fa';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Marie Dupont',
      role: 'Chef de Projet',
      company: 'TechCorp',
      rating: 5,
      comment: 'Excellent travail ! ABZO a su comprendre nos besoins et livrer un produit de qualité dans les délais. Son expertise technique et sa réactivité sont remarquables.',
      date: '2024-01-15',
      avatar: '/assets/images/AD1.png'
    },
    {
      id: 2,
      name: 'Jean Martin',
      role: 'CTO',
      company: 'StartupFlow',
      rating: 5,
      comment: 'Travail professionnel et créatif. ABZO maîtrise parfaitement les technologies modernes et propose des solutions innovantes. Je recommande vivement !',
      date: '2024-01-10',
      avatar: '/assets/images/AD2.png'
    },
    {
      id: 3,
      name: 'Sophie Bernard',
      role: 'Product Manager',
      company: 'DigitalPlus',
      rating: 4,
      comment: 'Très satisfait du résultat final. La communication était fluide et le projet a été livré selon nos attentes. Quelques ajustements mineurs ont été nécessaires mais rapidement corrigés.',
      date: '2024-01-05',
      avatar: '/assets/images/AD1.png'
    }
  ]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.comment) {
      const testimonial = {
        id: testimonials.length + 1,
        ...newTestimonial,
        date: new Date().toISOString().split('T')[0],
        avatar: '/assets/images/AD1.png'
      };
      setTestimonials([testimonial, ...testimonials]);
      setNewTestimonial({ name: '', role: '', company: '', rating: 5, comment: '' });
      setShowForm(false);
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
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
                    <FaPaperPlane className="w-5 h-5" />
                    Publier le témoignage
                  </button>
                </div>
              </form>
            </div>
          )}

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
                Témoignages
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {Math.round(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length)}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Note moyenne
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Satisfaction
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                24h
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
