// Initialize Firebase
/*var config = {
    apiKey: "AIzaSyDvpRVbYv2-whPMUp7lv4io49QGyX7kMME",
    authDomain: "tempacceler.firebaseapp.com",
    databaseURL: "https://tempacceler.firebaseio.com",
    storageBucket: "tempacceler.appspot.com",
    messagingSenderId: "121806623223"
};
firebase.initializeApp(config);*/

$(function(){
    $("#fbloginbtn").click(function() {
        console.log("fb button message sent");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {greeting: "up"}, function(response) {
            console.log(response.farewell);
          });
        });
    });

    $('#googleloginbtn').click(function(){
        //var provider = new firebase.auth.GoogleAuthProvider();
        //firebase.auth().signInWithRedirect(provider);
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {greeting: "down"}, function(response) {
            console.log(response.farewell);
          });
        });
    });

    /*firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log("Token: " + token);
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
        console.log("error: " + error.message);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });*/
});

/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "down"}, function(response) {
    console.log(response.farewell);
  });
});
*/