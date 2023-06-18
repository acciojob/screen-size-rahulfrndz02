//your JS code here. If required.

function screenSize(){
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	console.log("Window width", width);
	console.log("Window height", height);
	
}
// Call getWindowSize initially to get the current window size
getWindowSize();

// Attach an event listener to the 'resize' event
window.addEventListener('resize', getWindowSize);