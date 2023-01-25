// This script handles the events for the popup window.

// Get the controls on the page
let activateSubtitlesCheckbox = document.getElementById('activateSubtitles');
let languageSelector = document.getElementById('languageSelector');

// Add the change event handlers
activateSubtitlesCheckbox.addEventListener('change', onActivateSubtitlesChanged);
languageSelector.addEventListener('change', onLanguageChanged);

// Send the message to the content script
function onActivateSubtitlesChanged() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'activateSubtitles',
      checked: activateSubtitlesCheckbox.checked
    });
  });
}

// Send the message to the content script
function onLanguageChanged() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'setLanguage',
      language: languageSelector.value
    });
  });
}

document.addEventListener('click', (e) => {
    e.preventDefault();
});

