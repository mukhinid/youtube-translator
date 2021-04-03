import { setCORS } from 'google-translate-api-browser';
import { TranslationResult } from './translationResult';

export class TranslationService {
  private getTranslation = setCORS('https://youtube-translator-cors.herokuapp.com/');

  public async translate(input: string, from: string, to: string): Promise<string> {
    const result = await this.getTranslation(input, { from: from, to: to, tld: 'ru' });
    return (<TranslationResult>result).text;
  }
}
