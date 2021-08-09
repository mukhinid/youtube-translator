const injectionButton = 'ytt-button';

export const classes = {
  button: injectionButton,
  buttonInjected: 'ytt-button-injected',
  eventAdded: 'ytt-event-added',
};

export const selectors = {
  addTranslationButton: '#add-translations-button',
  button: `.${injectionButton}`,
  header: {
    from: '#language-name-row .metadata-editor-original .language-header',
    to: '#language-name-row .metadata-editor-translated .language-header',
  },
  languagesList: '#paper-list tp-yt-paper-item',
  metadataEditor: '#metadata-editor',
  translationContainer: 'div.translations-list.ytgn-video-translations-section',
  translations: '#table-list ytgn-video-translation-row',
  popup: {
    actions: '#metadata-actions-menu:not(.ytt-event-added)',
    editButtons: '#paper-list [test-id=edit]:not(.ytt-event-added)',
    buttons: 'ytgn-video-translation-cell-metadata button:not(.ytt-event-added), ytgn-video-translation-cell-metadata ytcp-button',
    original: '#scrollable-content-container .metadata-editor-original textarea',
    translated: '#scrollable-content-container .metadata-editor-translated textarea',
  }
};
