import React, { useEffect } from 'react';

const CV = () => {
  useEffect(() => {
    const file = '/ABOUBAKRY_DIENG_CV.pdf';
    const a = document.createElement('a');
    a.href = file;
    a.download = 'ABOUBAKRY_DIENG_CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300">Téléchargement du CV en cours...</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Si le téléchargement ne démarre pas, <a href="/ABOUBAKRY_DIENG_CV.pdf" className="text-blue-600 underline">cliquez ici</a>.
        </p>
      </div>
    </div>
  );
};

export default CV;
