"use strict";
(function () {

		var userNumber = Number(prompt("Please enter an odd number between 1 and 50."));
		if (userNumber%2 == 0 || userNumber > 50 || userNumber < 1 || typeof parseInt(userNumber) !== "number" || typeof userNumber === NaN) {
			alert("Please follow the directions, asshat.");
		} else if (isNaN(userNumber)) {
			alert("That's a word, not a number, idiot")
		} else {
			alert("Number to skip: " + userNumber);
			console.log("Number to skip: " + userNumber);
		}

		for (var i = 1; i < 50; i+=2) {
			if (i === userNumber) {
				console.log("Yikes! Skipping: " + i)
			} else {
				console.log("Here is an odd number: " + i)
			}
		}
})();
