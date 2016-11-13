// Initialize Firebase
/*var config = {
    apiKey: "AIzaSyDvpRVbYv2-whPMUp7lv4io49QGyX7kMME",
    authDomain: "tempacceler.firebaseapp.com",
    databaseURL: "https://tempacceler.firebaseio.com",
    storageBucket: "tempacceler.appspot.com",
    messagingSenderId: "121806623223"
};
firebase.initializeApp(config);*/
//chrome.runtime.sendMessage({ key: 38 });

/*var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});*/

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "up"){
      chrome.runtime.sendMessage({ key: 38 });
      sendResponse({farewell: "received fbbutton"});
    }


    if (request.greeting == "down"){
      chrome.runtime.sendMessage({ key: 40 });
      sendResponse({farewell: "received googlebutton"});
    }
});