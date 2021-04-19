import { getCode } from './languages/languages';
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
        translate(popup, fromCode, toCode);
      });
      toHeader.appendChild(button);
    }
  }
}

function translate(popup: Element, from: string, to: string) {
  const originalNodes = popup.querySelectorAll('#scrollable-content-container .metadata-editor-original textarea');
  const translatedNodes = popup.querySelectorAll('#scrollable-content-container .metadata-editor-translated textarea');
  originalNodes.forEach((node, i) => {
    const textArea = node as HTMLTextAreaElement;
    const content = textArea.value;
    if (content) {
      translationService.translate(content, from, to)
        .then(translation => {
          const translatedTextArea = translatedNodes[i] as HTMLTextAreaElement;
          translatedTextArea.value = translation;
          translatedTextArea.dispatchEvent(new InputEvent('input', {
            bubbles: true,
            cancelable: true,
            data: translation,
          }));
        }).catch(error => alert(error));
    }
  });
}
