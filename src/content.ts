import { classes, selectors } from './constants';
import { getCode } from './languages/languages';
import { TranslationService } from './translation.service';

const translationService = new TranslationService();

setInterval(() => {
  const translationsContainer = document.querySelectorAll(selectors.translationContainer);
  if (!translationsContainer.length || translationsContainer[0].classList.contains(classes.buttonInjected)) {
    return;
  }

  const translations = translationsContainer[0].querySelector(selectors.translations);
  if (translations) {
    translationsContainer[0].classList.add(classes.buttonInjected);
    addLanguagesListeners();
    addPopupButtonsListeners();
  }
}, 100);

function addLanguagesListeners() {
  document.querySelector(selectors.addTranslationButton)?.addEventListener('click', () => {
    setTimeout(() => {
      const languagesList = document.querySelectorAll(selectors.languagesList);
      languagesList.forEach(lang => lang.addEventListener('click', addPopupButtonsListeners));
    }, 100);
  });
}

function addPopupButtonsListeners() {
  const popupButtons = document.querySelectorAll(selectors.popup.buttons);
  popupButtons.forEach(button => {
    button.addEventListener('click', () => {
      setTimeout(injectButtonToEachPopup, 100);
    });
    button.classList.add(classes.eventAdded);
  });
  const actions = document.querySelectorAll(selectors.popup.actions);
  actions.forEach(action => {
    action.addEventListener('click', () => {
      setTimeout(addEditButtonsListeners, 100);
    });
    action.classList.add(classes.eventAdded);
  });
}

function addEditButtonsListeners() {
  var editButtons = document.querySelectorAll(selectors.popup.editButtons);
  editButtons.forEach(button => {
    setTimeout(() => {
      button.addEventListener('click', injectButtonToEachPopup);
      button.classList.add(classes.eventAdded);
    }, 100);
  });
}

function injectButtonToEachPopup(): void {
  const popups = document.querySelectorAll(selectors.metadataEditor);
  popups.forEach(popup => { injectButton(popup); });
}

function injectButton(popup: Element): void {
  const fromHeader = popup.querySelector(selectors.header.from);
  const toHeader = popup.querySelector(selectors.header.to);
  if (fromHeader && toHeader) {
    if (toHeader.querySelector(selectors.button)) {
      return;
    }

    const from = fromHeader.textContent;
    const to = toHeader.textContent;

    if (from && to) {
      const button = document.createElement('button');
      button.classList.add(classes.button);
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
  const originalNodes = popup.querySelectorAll(selectors.popup.original);
  const translatedNodes = popup.querySelectorAll(selectors.popup.translated);
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
