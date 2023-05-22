chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        // check if website is chess.com
        if (tab.url.includes("https://www.chess.com")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['script.js']
          });
        }
    }
  })

  chrome.action.onClicked.addListener((tab) => {
    chrome.runtime.openOptionsPage();    
});