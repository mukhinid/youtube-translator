import { getCode } from './language';
import { TranslationService } from './translation.service';

const translationService = new TranslationService();

setInterval(injectButtonToEachPopup, 3000);

function injectButtonToEachPopup(): void {
  const popups = document.querySelectorAll('#metadata-editor');
  popups.forEach(popup => { injectButton(popup); });
}

function injectButton(popup: Element): void {
  const fromHeader = popup.querySelector('#language-name-row .metadata-editor-original .language-header');
  const toHeader = popup.querySelector('#language-name-row .metadata-editor-translated .language-header');
  if (fromHeader && toHeader) {
    if (toHeader.querySelector('.youtube-translator-button')) {
      console.log('Button is already set!');
      return;
    }

    const from = fromHeader.textContent;
    const to = toHeader.textContent;

    if (from && to) {
      const button = document.createElement('button');
      button.classList.add('youtube-translator-button');
      button.textContent = '🔁 Translate';
      button.addEventListener('click', () => {
        const fromCode = getCode(from);
        const toCode = getCode(to);
        translate(fromCode, toCode);
      });
      toHeader.appendChild(button);
    }
  }
}

function translate(from: string, to: string) {
  const originalNodes = document.querySelectorAll('#scrollable-content-container .metadata-editor-original textarea');
  const translatedNodes = document.querySelectorAll('#scrollable-content-container .metadata-editor-translated textarea');
  originalNodes.forEach((node, i) => {
    const textArea = node as HTMLTextAreaElement;
    const content = textArea.value;
    if (content) {
      translationService.translate(content, from, to)
        .then(translation => {
          const translatedTextArea = translatedNodes[i] as HTMLTextAreaElement;
          translatedTextArea.value = translation;
        });
    }
  });
}
