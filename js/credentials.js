// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5tYC-qlRArN197fF3qOiYRFJnuYYsTzM",
    authDomain: "accelerokey-1fed8.firebaseapp.com",
    databaseURL: "https://accelerokey-1fed8.firebaseio.com",
    storageBucket: "accelerokey-1fed8.appspot.com",
    messagingSenderId: "803168534221"
  };
  firebase.initializeApp(config);

  var left = 39;
  var right = 37;
  var tforward = 38;
  var tbackward = 40;
  var motionschecker;
  var uid;
  var started = false;


/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
  // Listen for auth state changes.
  // [START authstatelistener]
  left = document.getElementById('left').value;
  right = document.getElementById('right').value;
  tforward = document.getElementById('tforward').value;
  tbackward = document.getElementById('tbackward').value;

  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      document.getElementById('propic').src = photoURL;
      document.getElementById('name').textContent = "Welcome " + displayName + "!";
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('main-screen').style.display = 'block';
      document.getElementById('useriddd').innerHTML = uid;
    } else {
      document.getElementById('main-screen').style.display = 'none';
      document.getElementById('login-screen').style.display = 'block';
    }
  });
  // [END authstatelistener]
  $("#googleloginbtn").click(function() {
      startSignIn();
  });
  $("#googlelogoutbtn").click(function() {
      startSignIn();
  });
}

/**
 * Start the auth flow and authorizes to Firebase.
 * @param{boolean} interactive True if the OAuth flow should request with an interactive mode.
 */
function startAuth(interactive) {
  // Request an OAuth token from the Chrome Identity API.
  chrome.identity.getAuthToken({interactive: !!interactive}, function(token) {
    if (chrome.runtime.lastError && !interactive) {
      console.log('It was not possible to get a token programmatically.');
    } else if(chrome.runtime.lastError) {
      console.error("Error: " + chrome.runtime.lastError);
    } else if (token) {
      console.log("token: " + token);
      // Authrorize Firebase with the OAuth Access Token.
      var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // The OAuth token might have been invalidated. Lets' remove it from cache.
        console.log("token was invalidated" + error.code);
        if (error.code === 'auth/invalid-credential') {
          chrome.identity.removeCachedAuthToken({token: token}, function() {
            startAuth(interactive);
          });
        }
      });
      console.log("you're logged in finally, i think");
    } else {
      console.error('The OAuth Token was null');
    }
  });
}

/**
 * Starts the sign-in process.
 */
function startSignIn() {
  console.log("Start Sign In");
  if (firebase.auth().currentUser) {
    console.log("was already signed inFirebase.auth()" + firebase.auth().currentUser);
    firebase.auth().signOut();
  } else {
    console.log("Was not signed in already");
    startAuth(true);
  }
}

window.onload = function() {
  initApp();
};
