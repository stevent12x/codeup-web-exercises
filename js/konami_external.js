"use strict";

var allowedKeys = {
	38: 'up',
	40: 'down',
	37: 'left',
	39: 'right',
	65: 'a',
	66: 'b',
	13: 'enter'
};
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
var konamiPosition = 0;

$(document).on('keyup', function (e) {
	var key = allowedKeys[e.keyCode];
	var requiredKey = konamiCode[konamiPosition];
	if (key == requiredKey) {
		konamiPosition++;
		if (konamiPosition == konamiCode.length) {
			activateKonamiCheat();
			konamiPosition = 0;
		}
	} else {
		failedCode();
	}
});

function activateKonamiCheat() {
	document.body.style.backgroundImage = "url('img/maxresdefault.jpg')";
	alert('30LivesAdded!');
	$(document).on('keyup', function () {
		reset()
	})
}

function failedCode() {
	alert("That ain't no code!");
	reset();
}
