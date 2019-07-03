"use strict";

//mapping out the various keys that can be pressed//
var allowedKeys = {
	38: 'up',
	40: 'down',
	37: 'left',
	39: 'right',
	65: 'a',
	66: 'b',
	67: 'c',
	68: 'd',
	69: 'e',
	70: 'f',
	71: 'g',
	72: 'h',
	73: 'i',
	74: 'j',
	75: 'k',
	76: 'l',
	77: 'm',
	78: 'n',
	79: 'o',
	80: 'p',
	81: 'q',
	82: 'r',
	83: 's',
	84: 't',
	85: 'u',
	86: 'v',
	87: 'w',
	88: 'x',
	89: 'y',
	90: 'z',
	13: 'enter'
};

var konamiAudio = new Audio('Sounds/The Essential Retro Video Game Sound Effects Collection [512 sounds] By Juhani Junkala/General Sounds/Coins/sfx_coin_cluster6.m4a');
var starFoxAudio = new Audio('Sounds/Nintendo 64 - Star Fox 64 - General Sound Effects/fly to next mission.mp3');
var turtlesAudio = new Audio('Sounds/Genesis 32X SCD - Teenage Mutant Ninja Turtles Tournament Fighters - Everything/Voices/Turtles In A Half-Shell.m4a');
var failAudio = new Audio('Sounds/The Essential Retro Video Game Sound Effects Collection [512 sounds] By Juhani Junkala/Death Screams/Human/sfx_deathscream_human14.m4a');

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
var starFoxCode = ['d', 'o', 'a', 'b', 'a', 'r', 'r', 'e', 'l', 'r', 'o', 'l', 'l', 'enter'];
var turtlesCode = ['c', 'o', 'w', 'a', 'b', 'u', 'n', 'g', 'a', 'enter'];
var startingPosition = 0;

$(document).on('keydown', function(e) {
	var keyPress = allowedKeys[e.keyCode];
	console.log(e.keyCode);

	var requiredKonamiKey = konamiCode[startingPosition];
	var requiredSFKey = starFoxCode[startingPosition];
	var requiredTurtlesKey = turtlesCode[startingPosition];

	if (keyPress == requiredSFKey) {
		startingPosition++;
		console.log('success')
		if (startingPosition == starFoxCode.length) {
			activateStarFox();
			startingPosition = 0;
		}
	} else if (keyPress == requiredKonamiKey) {
		startingPosition++;
		if (startingPosition == konamiCode.length) {
			activateKonamiCheat();
			startingPosition = 0;
		}
	} else if (keyPress == requiredTurtlesKey) {
		startingPosition++;
		if (startingPosition == turtlesCode.length) {
			activateTurtles();
			startingPosition = 0;
		}
	} else {
		failedCode();
		startingPosition = 0;
	}
});

function textFlash() {
	$('#konami').each(function () {
		var elem = $(this);
		setInterval(function () {
			if (elem.css('visibility') == 'hidden') {
				elem.css('visibility', 'visible');
			} else {
				elem.css('visibility', 'hidden')
			}
		}, 500);
	});
}

function activateKonamiCheat() {
	$('#konami').text('Success! You Gained 30 Life in Contra!');
	$('.success-picture').css('background-image', 'url(img/maxresdefault.jpg)');
	textFlash();
	konamiAudio.play();
};

function activateStarFox() {
	$('#konami').text('Do A Barrel Roll!');
	$('.success-picture').css('background-image', 'url(img/WiiU_VC_N64_StarFox64_01.jpg)');
	textFlash();
	starFoxAudio.play();
};

function activateTurtles() {
	$('#konami').text("It's Turtle Time!");
	$('.success-picture').css('background-image', 'url(img/tmnt-arcadegame-screenshot-700x394.jpg)');
	textFlash();
	turtlesAudio.play();
	reset;
};

function failedCode() {
	$('#konami').text('Fail!');
	textFlash();
	failAudio.play();
};


