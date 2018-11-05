#https://steamcommunity.com/id/YOUR_ID/groups/
var x = document.getElementsByTagName('*');

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

for (var i = 0; i < x.length; i++) {
    if (x[i].className !== 'linkStandard' ) {
        continue;
    }
    if (typeof x[i].onclick === 'function' ) {
        x[i].dispatchEvent(clickEvent);
    }
}

var y =  document.getElementsByClassName("btn_green_white_innerfade");

var timer = setInterval(function() {
	y[y.length - 1].dispatchEvent(clickEvent);
	y.length = y.length - 1;
	if(y.length == 0) {
			clearInterval(timer);
	}
}, 200);