"use strict";

// While Loop

(function () {
	var i = 2;

	while (i <= 65536) {
		console.log("i is now: " + i);
		(i = i * 2);
	}
})();

//Do-While Loop

(function () {
	var allCones = (Math.floor(Math.random()*50)+50);
	console.log("Oh boy, I have " + allCones + " cones to sell.")
	do {
		var conesPurchased = parseInt((Math.random()*5)+1);
		if (conesPurchased <= allCones) {
			allCones -= conesPurchased;
			console.log("I just sold " + conesPurchased + " cones. Only " + allCones + " cones left.");
		} else {
			console.log(" I cannot sell you " + conesPurchased + " cones. I only have " + allCones + " cones left...");
		}
	}
	while (allCones > 0);
	console.log("Huzzah! I sold all of them cones.");
})();


