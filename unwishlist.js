#https://store.steampowered.com/wishlist/id/YOUR_ID/
var x = document.getElementsByClassName("delete");

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

for(var i = 0; i < x.length; i++) {
	x[i].dispatchEvent(clickEvent);
}

var y =  document.getElementsByClassName("btn_green_white_innerfade");

var timer = setInterval(function() {
	y[y.length - 1].dispatchEvent(clickEvent);
	y.length = y.length - 1;
	if(y.length == 0) {
			clearInterval(timer);
	}
}, 200);