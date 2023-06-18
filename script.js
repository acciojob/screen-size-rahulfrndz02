//your JS code here. If required.

function setScreenSize(){
	var weidth = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	document.getElementById('sizeInfo').innerHTML = "<h1>Width: " + width + " Height: " + height + "</h1>";
	
}

window.addEventListener('resize', setScreenSize);
setScreenSize();





