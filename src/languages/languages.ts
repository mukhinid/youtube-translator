import { en } from './en';
import { ru } from './ru';

export interface Languages {
  [key: string]: string;
}

interface LanguagesMap {
  [key: string]: Languages;
}

const languages: LanguagesMap = {
  'en': en,
  'ru': ru
}

export function getCode(lang: string): string {
  const langCode = document.documentElement.lang;

  if (!languages[langCode]) {
    return '';
  }

  const currentLang = languages[langCode];

  if ((<Object>currentLang).hasOwnProperty(lang)) {
    return currentLang[lang];
  }
  return '';
}
