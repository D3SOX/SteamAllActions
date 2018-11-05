#https://steamcommunity.com/id/YOUR_ID/followedgames/
var x = document.getElementsByClassName("unfollow_game_btn");

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

for(var i = 0; i < x.length; i++) {
	x[i].dispatchEvent(clickEvent);
}