export interface TranslationResult {
  text: string,
  pronunciation: string,
  from: {
    language: {
      didYouMean: boolean,
      iso: string,
    },
    text: {
      autoCorrected: boolean,
      value: string,
      didYouMean: boolean,
    }
  },
  raw: string,
  value: {},
}
