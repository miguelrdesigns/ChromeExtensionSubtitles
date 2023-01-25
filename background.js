// background.js
// This script listens for messages from the content script and shows the popup window.

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'showPopup') {
    // Show the extension's popup
    chrome.tabs.create({
      url: 'popup.html',
      active: true
    });
  }
});

//Detect when a video is playing and send a message to the content script to generate subtitles
document.addEventListener('play', (event) => {
  if (event.target.tagName === 'VIDEO') {
    // Send a message to the content script to generate subtitles
    window.postMessage({ type: 'GENERATE_SUBTITLES', payload: event.target }, '*');
  }
});