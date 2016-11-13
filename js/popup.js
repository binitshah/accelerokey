

  /*
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




  */

$(function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "up"}, function(response) {
        console.log(response.farewell);
      });
    });
    setTimeout(function() {
      uid = document.getElementById('useriddd').innerHTML;

      var database = firebase.database();
      var onlinechecker = firebase.database().ref('users/' + uid + '/online');
      onlinechecker.on('value', function(snapshot) {
        var data = snapshot.val()
        console.log(data);
        if(data == null){
          document.getElementById('online').style.display = 'none';
          document.getElementById('offline').style.display = 'block';
        }
        else{
          if(data){
            document.getElementById('online').style.display = 'block';
            document.getElementById('offline').style.display = 'none';
          }
          else{
            document.getElementById('online').style.display = 'none';
            document.getElementById('offline').style.display = 'block';
          }
        }
      });

      $("#startpausebtn").click(function() {
          if(started){
            started = false;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {greeting: "up"}, function(response) {
                console.log(response.farewell);
              });
            });
            document.getElementById('startpausebtn').style.backgroundColor = "#00ff00";
            document.getElementById('startpausebtn').value = "Start";
            motionschecker.off();
          }
          else{
            started = true;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {greeting: "up"}, function(response) {
                console.log(response.farewell);
              });
            });
            document.getElementById('startpausebtn').style.backgroundColor = "#ff0000";
            document.getElementById('startpausebtn').value = "Pause";
            left = document.getElementById('left').value;
            right = document.getElementById('right').value;
            tforward = document.getElementById('tforward').value;
            tbackward = document.getElementById('tbackward').value;
            motionschecker = firebase.database().ref('users/' + uid + '/motions');
            motionschecker.on('value', function(snapshot) {
              var data2 = snapshot.val()
              if(data2 == null){
                alert("something went terribly wrong");
              }
              else{
                var motions = data2.split(" ");
                motions.forEach(function(element) {
                  console.log(element);
                });
              }
            });
          }
      });
    }, 1000);
});