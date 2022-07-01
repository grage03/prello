import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const getCurrentLanguage = () => {
  return localStorage.getItem('i18nextLng') || 'en'
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: getCurrentLanguage(),
    debug: true,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
