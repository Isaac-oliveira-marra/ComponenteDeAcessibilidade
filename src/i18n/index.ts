/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { initReactI18next } from 'react-i18next'

import { formatDistanceToNow } from 'date-fns'
import { ptBR as datePtBR, enUS as dateEnUS } from 'date-fns/locale'
import i18n, { TFunction, TOptions } from 'i18next'
import LanguageDetection from 'i18next-browser-languagedetector'

import enUs from './locales/en-us.json'
import ptBr from './locales/pt-br.json'

export type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? // @ts-ignore
      `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]

export type translationKeys = RecursiveKeyOf<typeof ptBr>

export let translate: TFunction
export default i18n
  .use(LanguageDetection)
  .use(initReactI18next)
  .init(
    {
      resources: {
        pt: { translation: ptBr },
        'pt-BR': { translation: ptBr },
        'en-US': { translation: enUs },
        en: { translation: enUs },
      },
      fallbackLng: 'pt-BR',
      interpolation: { escapeValue: false },
    },
    (_, translation) => {
      translate = translation
    }
  )

export function t(key: translationKeys, options?: TOptions) {
  return translate(key, options)
}

export function forNow(date: Date) {
  const currentLang = i18n.language

  return formatDistanceToNow(date, {
    locale: currentLang === 'en-US' ? dateEnUS : datePtBR,
    addSuffix: true,
  })
}
