import { TranslationService } from './translation.service';

let isInjected = false;

const interval = setInterval(() => {
  if (!isInjected) {
    console.debug('Not injected!');
    isInjected = injectButton();
  } else {
    console.debug('Injected!');
    clearInterval(interval);
  }
}, 3000);

function injectButton(): boolean {
  const popupHeader = document.querySelector('#language-name-row .metadata-editor-translated .language-header');
  if (popupHeader) {
    const button = document.createElement('button');
    button.textContent = '🔁 Translate';
    button.addEventListener('click', translate);
    popupHeader.appendChild(button);
    return true;
  }
  return false;
}

const translationService = new TranslationService();

function translate() {
  const originalNodes = document.querySelectorAll('#scrollable-content-container .metadata-editor-original textarea');
  const translatedNodes = document.querySelectorAll('#scrollable-content-container .metadata-editor-translated textarea');
  originalNodes.forEach((node, i) => {
    const textArea = node as HTMLTextAreaElement;
    const content = textArea.value;
    if (content) {
      translationService.translate(content, 'ru')
        .then(translation => {
          const translatedTextArea = translatedNodes[i] as HTMLTextAreaElement;
          translatedTextArea.value = translation;
        });
    }
  });
}
