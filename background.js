function search(info,tab) {
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText,
    });           
  }
  
  chrome.contextMenus.create({
    title: "Give me something good", 
    id: "some-command",
    contexts:["selection"], 
  });

  chrome.contextMenus.onClicked.addListener(search);