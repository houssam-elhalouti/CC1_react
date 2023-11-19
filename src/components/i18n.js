// Fichier d'initialisation i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Fichiers de traduction pour chaque langue
import translationEN from './locales/en/translations.json';
import translationFR from './locales/fr/translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de secours
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
