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

document.addEventListener('click', (e) => {
    if(e.target.id === 'activate-subtitles-button') {
        activateSubtitles();
    }
});

function activateSubtitles() {
    // Get the current video element
    let videoElement = document.querySelector('video');
    
    // Create a new TextTrack element
    let textTrack = new TextTrack();
    
    // Set the text track label
    textTrack.label = 'Subtitles';
    
    // Set the text track language
    textTrack.language = 'en';
    
    // Set the text track kind
    textTrack.kind = 'subtitles';
    
    // Set the text track mode
    textTrack.mode = 'showing';
    
    // Add the text track to the video element
    videoElement.addTextTrack(textTrack);
    
    // Add the subtitle cues to the text track
    // Your code to add subtitle cues here
    
    // Enable the text track
    textTrack.mode = 'showing';
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type === "recognition") {
            var recognition = request.recognition;
            // do something with the recognition variable, such as displaying the subtitles
        }
    });