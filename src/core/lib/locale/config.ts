import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEn from './en/translations.json'
import translationRu from './ru/translations.json'

const getCurrentLanguage = () => {
  return localStorage.getItem('i18nextLng') || 'en'
}

export const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: getCurrentLanguage(),
    resources,
    debug: true,

    ns: ['translation'],
    defaultNS: 'translation',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
