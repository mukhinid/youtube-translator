import { buttonInjectedClass } from './constants';
import { getCode } from './languages/languages';
import { TranslationService } from './translation.service';

const translationService = new TranslationService();

setInterval(() => {
  const translationsContainer = document.querySelectorAll('div.translations-list.ytgn-video-translations-section')
  if (!translationsContainer.length || translationsContainer[0].classList.contains(buttonInjectedClass)) {
    return;
  }

  const translations = translationsContainer[0].querySelector('#table-list ytgn-video-translation-row');
  if (translations) {
    translationsContainer[0].classList.add(buttonInjectedClass);
    addLanguagesListeners();
    addPopupButtonsListeners();
  }
}, 100);

function addLanguagesListeners() {
  document.querySelector('#add-translations-button')?.addEventListener('click', () => {
    setTimeout(() => {
      const languagesList = document.querySelectorAll('#paper-list tp-yt-paper-item');
      languagesList.forEach(lang => lang.addEventListener('click', addPopupButtonsListeners));
    }, 100);
  });
}

function addPopupButtonsListeners() {
  const popupButtons = document.querySelectorAll('ytgn-video-translation-cell-metadata button:not(.ytt-event-added), ytgn-video-translation-cell-metadata ytcp-button');
  popupButtons.forEach(button => {
    button.addEventListener('click', () => {
      setTimeout(injectButtonToEachPopup, 100);
    });
    button.classList.add('ytt-event-added');
  });
  const actions = document.querySelectorAll('#metadata-actions-menu:not(.ytt-event-added)');
  actions.forEach(action => {
    action.addEventListener('click', () => {
      setTimeout(addEditButtonsListeners, 100);
    });
    action.classList.add('ytt-event-added');
  });
}

function addEditButtonsListeners() {
  var editButtons = document.querySelectorAll('#paper-list [test-id=edit]:not(.ytt-event-added)');
  editButtons.forEach(button => {
    setTimeout(() => {
      button.addEventListener('click', injectButtonToEachPopup);
      button.classList.add('ytt-event-added');
    }, 100);
  });
}

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

async function translate(popup: Element, from: string, to: string) {
  const originalNodes = popup.querySelectorAll('#scrollable-content-container .metadata-editor-original textarea');
  const translatedNodes = popup.querySelectorAll('#scrollable-content-container .metadata-editor-translated textarea');
  for (let i = 0; i < originalNodes.length; i++) {
    const textArea = originalNodes[i] as HTMLTextAreaElement;
    const content = textArea.value;
    if (content) {
      try {
        const translation = await translationService.translate(content, from, to);
        const translatedTextArea = translatedNodes[i] as HTMLTextAreaElement;
          translatedTextArea.value = translation;
          translatedTextArea.dispatchEvent(new InputEvent('input', {
            bubbles: true,
            cancelable: true,
            data: translation,
          }));
      } catch(error) {
        alert(error);
      }
    }
  }
}
