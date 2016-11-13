var started2 = false;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("I'm hit!");
    if (request.greeting == "up"){
      chrome.runtime.sendMessage({ key: 38 });
      sendResponse({farewell: "received fbbutton"});
    }


    if (request.greeting == "down"){
      chrome.runtime.sendMessage({ key: 40 });
      sendResponse({farewell: "received googlebutton"});
    }
});