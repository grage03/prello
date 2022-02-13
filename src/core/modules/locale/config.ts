import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEn from './en/translations.json'
import translationRu from './ru/translations.json'

// const changeLocale = async (key: 'en' | 'ru') => {
//   if (i18n.language === key) return
//   await i18n.changeLanguage(key)
// }

// <UiSelect
//   selectItems={[ 'en', 'ru' ]}
// onClickItem={changeLocale}
// />

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
    lng: 'en',
    resources,
    debug: true,

    ns: [ 'translation' ],
    defaultNS: 'translation',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
