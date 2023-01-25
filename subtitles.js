chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentTab = tabs[0];
    console.log(currentTab.url); // this will give you the current url
    // here you will need to get the video element and call the captureStream method
});

if (('webkitSpeechRecognition' in window)) {
    var recognition = new webkitSpeechRecognition();
    // your code here
} else {
    // handle the case where the browser doesn't support the Web Speech API
}

chrome.runtime.sendMessage({type: "recognition", recognition: recognition});