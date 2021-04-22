import { en } from './en';
import { ru } from './ru';

export interface Languages {
  [key: string]: string;
}

interface LanguagesMap {
  [key: string]: Languages;
  default: Languages;
}

const languages: LanguagesMap = {
  'en': en,
  'ru': ru,
  default: en,
}

export function getCode(lang: string): string {
  const langCode = document.documentElement.lang.substring(0, 2);

  const currentLang = languages[langCode] ?? languages.default;

  if ((<Object>currentLang).hasOwnProperty(lang)) {
    return currentLang[lang];
  }
  return '';
}
