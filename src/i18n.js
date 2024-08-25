
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
import HomeEn from './translations/en/home.json' 
import HomeEs from './translations/es/home.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: HomeEn,

      // Agrega más páginas aquí
    },
    es: {
      home: HomeEs,
      // Agrega más páginas aquí
    },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo
  ns: ['home', 'about'], // Nombres de espacio (namespaces) para cada página
  defaultNS: 'home', // Namespace por defecto
  interpolation: {
    escapeValue: false, // React ya hace escaping por nosotros
  }
});

export default i18n;