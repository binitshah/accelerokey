chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    console.log("shit, i'm hit...")
    if(message.key < 130){
        chrome.tabs.query({active: true}, function(tabs) {
            chrome.debugger.attach({ tabId: tabs[0].id }, "1.0");
            chrome.debugger.sendCommand({ tabId: tabs[0].id }, 'Input.dispatchKeyEvent', { type: 'keyUp', windowsVirtualKeyCode: message.key, nativeVirtualKeyCode : message.key, macCharCode: message.key  });
            chrome.debugger.sendCommand({ tabId: tabs[0].id }, 'Input.dispatchKeyEvent', { type: 'keyDown', windowsVirtualKeyCode: message.key, nativeVirtualKeyCode : message.key, macCharCode: message.key  });
            chrome.debugger.detach({ tabId: tabs[0].id });
        });
    }
});