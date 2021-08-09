import { setCORS } from '@mukhinid/google-translate-api';
import { TranslationResult } from './translationResult';

export class TranslationService {
  private readonly getTranslation = setCORS('https://youtube-translator-cors.herokuapp.com/');

  private readonly _cache = new Map<string, Map<string, string>>();

  public async translate(input: string, from: string, to: string): Promise<string> {
    const key = `${from}_${to}`;
    if (!this._cache.has(key)) {
      this._cache.set(key, new Map<string, string>());
    }
    const langCache = this._cache.get(key);
    const inputCache = langCache?.get(input);
    if (inputCache) {
      return inputCache;
    }

    const result = await this.getTranslation(input, { from: from, to: to, tld: 'ru' });
    const resultText = (<TranslationResult>result).text;
    langCache?.set(input, resultText);
    return resultText;
  }
}
