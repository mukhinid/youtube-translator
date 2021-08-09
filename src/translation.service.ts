import { setCORS } from '@mukhinid/google-translate-api';
import { TranslationResult } from './translationResult';

export class TranslationService {
  private readonly getTranslation = setCORS('https://youtube-translator-cors.herokuapp.com/');

  private readonly _cache = new Map<string, string[]>();

  public async translate(input: string, from: string, to: string, index: number): Promise<string> {
    const key = `${from}_${to}`;
    if (!this._cache.has(key)) {
      this._cache.set(key, []);
    }
    const langCache = this._cache.get(key);
    if (index <= langCache!.length - 1) {
      return langCache![index];
    }

    const result = await this.getTranslation(input, { from: from, to: to, tld: 'ru' });
    const resultText = (<TranslationResult>result).text;
    langCache![index] = resultText;
    return resultText;
  }
}
