document.addEventListener('DOMContentLoaded', function() {

	console.log("START");

	var e = new KeyboardEvent("keydown", {bubbles : false, cancelable : true, key : "Left"});
	var e2 = new KeyboardEvent("keyup", {bubbles : false, cancelable : true, key : "Left"});
	chrome.input.ime.sendKeyEvents({contextID:0, keyData:[e, e2]}, function() {console.log("callback");});
});