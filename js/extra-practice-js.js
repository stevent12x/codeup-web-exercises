
"use strict";



//list of days of the week and their corresponding clubs

var mondayClub = ("Band Club");
var tuesdayClub = ("Debate Club");
var wednesdayClub = ("ASL Club");
var thursdayClub = ("Cooking Club");
var fridayClub = ("and Archery Club");

//array that includes each of the above variables

var clubArray = [mondayClub, tuesdayClub, wednesdayClub, thursdayClub, fridayClub];

// var prompts the user to enter a single day of the week

var dayOfWeek = prompt("On what day of the week do you have a prior commitment?");

//function that takes the prompt as a parameter, takes the user's input and removes it from the above array,
//and returns the remaining array in sentence form

function whatClassCanIJoin(day) {
	if (day === "Monday" || day === "monday") {
		console.log(clubArray.splice(0, 1));
		return alert("You can join " + clubArray.join(', ') + ".");
	} else if (day === "Tuesday" || day === "tuesday") {
		console.log(clubArray.splice(1, 1));
		alert("You can join " + clubArray.join(', ') + ".");
	} else if (day === "Wednesday" || day === "wednesday") {
		console.log(clubArray.splice(2, 1));
		alert("You can join " + clubArray.join(', ') + ".");
	} else if (day === "Thursday" || day === "thursday") {
		console.log(clubArray.splice(3, 1));
		alert("You can join " + clubArray.join(', ') + ".");
	} else if (day === "Friday" || day === "friday") {
		console.log(clubArray.splice(4, 1));
		alert("You can join " + clubArray.join(', ') + ".");
	} else {
		console.log("Not a valid day");
		alert("Please input a valid day of the week.");
	}
}

//runs the above function

whatClassCanIJoin(dayOfWeek);



// Rodrigo is a chef, and needs to buy food for his restaurant. He's worked out a deal with the shop and can get his food
// for a twenty percent discount, but the shop changes their prices from week to week. Rodrigo needs to buy tofu, lamb,
// and potatoes. Return an alert to Rodrigo with his total based on how much of each item he's buying, by weight in pounds,
// the price of the items per pound, and also inform him of the savings he's receiving from the store.



//randomly generates the prices of lamb, tofu, and potatoes each time the function is run
//each item has a price floor and ceiling so things don't get too out of hand

var lambPricePerLb=Number(Math.random() * 2.25 + 4.64).toFixed(2);
var tofuPricePerLb=Number(Math.random() * 0.75 + 0.93).toFixed(2);
var potatoPricePerLb=Number(Math.random() * 0.53 + 0.25).toFixed(2);

//prompts the user to enter the amount of each item desired
//these amounts will then be run through the func below to determine the other values

var amountOfLamb=prompt("How much lamb are you buying this week? (in pounds)");
var amountOfTofu=prompt("How much tofu are you buying this week? (in pounds)");
var amountOfPotatoes=prompt("How much potatoes are you buying this week? (in pounds)");

//alerts of the price of items randomly generated in the above vars

function amountAlert(item1Price ,item2Price, item3Price) {
	console.log(item1Price, item2Price, item3Price);
	alert("Prices per Lb this Week: Lamb - $" + item1Price + ", Tofu - $" + item2Price + ", Potatoes - $" + item3Price)
}
//main function

function totalAmount(item1, price1, item2, price2, item3, price3) {
	console.log((item1 * price1) + (item2 * price2) + (item3 * price3));
	console.log(((item1 * price1) + (item2 * price2) + (item3 * price3)) * 0.20);
	console.log(((item1 * price1) + (item2 * price2) + (item3 * price3)) - (((item1 * price1) + (item2 * price2) + (item3 * price3)) *
		0.20));
	if (item1 && item2 && item3) {
		alert("Your total this week for " + item1 + " lbs of lamb, " + item2 + " lbs of tofu, and " + item3 + " lbs of potatoes is: $" +
			((item1 * price1) + (item2 * price2) + (item3 * price3)).toFixed(2) + ".");
		alert("With your 20% discount, your new total is: $" + (((item1 * price1) + (item2 * price2) + (item3 * price3)) -
			(((item1 * price1) + (item2 * price2) + (item3 * price3)) * 0.20)).toFixed(2) + ".");
		alert("Your customer loyalty savings this week is: $" +  (((item1 * price1) + (item2 * price2) +
			(item3 * price3)) * 0.20).toFixed(2) + ". Thanks for being a customer!");
	} else {
		alert("Oops. Something went wrong.")
	}
}
//this func should run 1st

amountAlert(lambPricePerLb, tofuPricePerLb, potatoPricePerLb); /*why is this function running in the middle of the one below??*/
//main func - should run 2nd

totalAmount(amountOfLamb, lambPricePerLb, amountOfTofu, tofuPricePerLb, amountOfPotatoes, potatoPricePerLb);



// Jimmy wants to buy and sell some metal. If he has two and a half pounds he can smelt it into an ingot and sell back the metal
// 	for triple the profit. Any metal he has, he can sell back for a thirty percent loss. Jimmy will always make an ingot if he can,
// and will sell all of the metal he has, ingot or not. The metal Jimmy wants to smelt is priced at fifteen dollars per eight ounces.
// Alert Jimmy with how much money he's made from selling the metal, as well as how much of it, by pounds, he was forced to sell
// at a loss, and how many ingots he was able to sell.



var metalOnHand = prompt("How much raw metal, in ounces, do you have on hand?");
var metalToBuy = prompt("How much, in ounces, would you like to purchase");
var metalToSmelt = Number(metalOnHand) + Number(metalToBuy);

function smeltingTime(metalOnHand, metalToBuy, metalToSmelt) {
	if (metalToSmelt >= 40) {
		console.log("$" + (Number(metalToBuy) * 1.875).toFixed(2) + " spent on raw metal.");
		console.log(Number(metalToSmelt / 40) + " ingots are made.");
		console.log(Number(metalToSmelt % 40).toFixed(2) + " ounces of raw metal are leftover.");
		console.log(Math.floor(Number(metalToSmelt / 40)).toFixed(0) + " Ingots are sold for $" + ((Math.floor(Number(metalToSmelt / 40)))
			* 225).toFixed(2) + ".");
		console.log("The leftover raw metal is sold for $" + (Number(metalToSmelt % 40).toFixed(2) * 1.3125).toFixed(2) +".");
		console.log("The total profit for this batch was $" + (((((Math.floor(Number(metalToSmelt / 40))) * 225).toFixed(2)) -
			((Number(metalToSmelt % 40)).toFixed(2) * 1.3125).toFixed(2)) - (Number(metalToBuy) * 1.875).toFixed(2)) + "!");
		alert("$" + (Number(metalToBuy) * 1.875).toFixed(2) + " spent on raw metal.");
		alert(Number(metalToSmelt / 40) + " ingots are made.");
		alert(Number(metalToSmelt % 40).toFixed(2) + " ounces of raw metal are leftover.");
		alert(Math.floor(Number(metalToSmelt / 40)).toFixed(0) + " Ingots are sold for $" + ((Math.floor(Number(metalToSmelt / 40)))
			* 225).toFixed(2) + ".");
		alert("The leftover raw metal is sold for $" + (Number(metalToSmelt % 40).toFixed(2) * 1.3125).toFixed(2) + ".");
		alert("The total profit for this batch was $" + Number(((((Math.floor(Number(metalToSmelt / 40))) * 225).toFixed(2)) -
			((Number(metalToSmelt % 40)).toFixed(2) * 1.3125).toFixed(2)) - (Number(metalToBuy) * 1.875).toFixed(2)) + "!");
	} else if (metalToSmelt < 40) {
		console.log("Not enough metal");
		alert("You don't have enough metal to smelt any ingots. Better hit the mines, kid!")
	}
}

smeltingTime(metalOnHand, metalToBuy, metalToSmelt);



// Georgia wants to run a marathon. She is able to run at a speed of 10.75 km/hr for an hour, but her speed decreases by half of a
// mile per hour every forty-five minutes. Georgia will only ever run as slow as 1 km/hr. How long will it take for Georgia to finish
// her race? Return an alert saying how many hours it will take for Georgia to complete her run for a given distance.














