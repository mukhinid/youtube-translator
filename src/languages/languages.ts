import { ru } from './ru';

export interface Languages {
  [key: string]: string;
}

interface LanguagesMap {
  [key: string]: Languages;
}

const languages: LanguagesMap = {
  'ru': ru
}

export function getCode(lang: string): string {
  const langCode = window.navigator.language;

  if (!languages[langCode]) {
    return '';
  }

  const currentLang = languages[langCode];

  if ((<Object>languages).hasOwnProperty(lang)) {
    return currentLang[lang];
  }
  return '';
}
