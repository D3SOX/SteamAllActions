#https://store.steampowered.com/curators/mycurators/
var x = document.getElementsByClassName("following_button");

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

var c = 0;

#maybe not the best way but it does it's job and works.
var timer = setInterval(function() {
	window.scrollTo(0, document.body.scrollHeight);
	var done = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
	console.log(done);
	if(done) {
			c++;
			if(c >= 50) {
				clearInterval(timer);
				for(var i = 0; i < x.length; i++) {
					x[i].dispatchEvent(clickEvent);
				}
			}
	}
}, 200);
