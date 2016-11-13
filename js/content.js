setTimeout(
	function(){
		chrome.runtime.sendMessage({ key: 40 });
	},
1000);