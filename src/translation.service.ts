import { setCORS } from 'google-translate-api-browser';
import { TranslationResult } from './translationResult';

export class TranslationService {
  private getTranslation = setCORS('https://cors-anywhere.herokuapp.com/');

  public async translate(input: string, lang: string): Promise<string> {
    const result = await this.getTranslation(input, { to: lang, tld: 'ru' });
    return (<TranslationResult>result).text;
  }
}
