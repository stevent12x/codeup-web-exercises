"use strict";

var mondayClub = ("Band Club");
var tuesdayClub = ("Debate Club");
var wednesdayClub = ("ASL Club");
var thursdayClub = ("Cooking Club");
var fridayClub =  ("and Archery Club");

var clubArray = [mondayClub , tuesdayClub , wednesdayClub , thursdayClub , fridayClub];

var day = prompt("What day of the week do you have a prior commitment?");

	function whatClassCanIJoin() {
		if ("Monday") {
			console.log(clubArray.splice(0,1));
			alert("You can join " + clubArray.join(', '));
		}
		else if ("Tuesday") {
			console.log(clubArray.splice(1,1));
			alert("You can join " + clubArray.join(', '));
		}
		else if ("Wednesday") {
			console.log(clubArray.splice(2,1));
			alert("You can join " + clubArray.join(', '));
		}
		else if ("Thursday") {
			console.log(clubArray.splice(3,1));
			alert("You can join " + clubArray.join(', '));
		}
		else if ("Friday") {
			console.log(clubArray.splice(4, 1));
			alert("You can join " + clubArray.join(', '));
		}
		else if ('') {
			console.log("Not a valid day");
			alert("Please input a valid day");
		}
	}

whatClassCanIJoin(day);