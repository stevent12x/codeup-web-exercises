"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to my website!");
    var favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");

alert("Looks like you want to rent some movies? Let's get started!");
var littleMermaidDays = prompt("How many days would you like to rent 'The Little Mermaid' for?");
    alert(littleMermaidDays + " days. Great!");
var brotherBearDays = prompt("How many days would you like to rent 'Brother Bear' for?");
    alert(brotherBearDays + " days? Sounds Good!");
var herculesDays=prompt("How many days would you like to rent 'Hercules' for?");
    alert(herculesDays + " days? Awesome!");
var totalDays=(Number(littleMermaidDays) + Number(brotherBearDays) + Number(herculesDays));
    alert("So that's " + totalDays + " days of movie rentals, right?");
var totalPrice=(totalDays*3.00);
    alert("Your total for " + totalDays + " of movie rentals is at $3.00/day is $" + totalPrice.toFixed(2) + ". Savvy?");

alert("Now, let's get you paid baby!");
var googleHours = prompt("How many hours did you work for Google this week?");
    alert(googleHours + " ? You busy bee you.");
var facebookHours = prompt("Next up, how many hours did you work for Facebook this week?");
    alert(facebookHours + "? That's it? No worries.");
var amazonHours = prompt("Finally, how many hours did you work for Amazon this week?");
    alert("You really should spend more time on yourself. How about watching 'The Little Mermaid' with your kids?");
var googlePay=prompt("And how much does Google pay you per hour?");
var facebookPay = prompt("What about Facebook?");
var amazonPay=prompt("Finally, how much does Amazon pay you per hour?");
    alert("Let's get you a total...");
var totalMoneyOwed=((googleHours*googlePay)+(facebookHours*facebookPay)+(amazonHours*amazonPay));
    alert("Looks like you're owed a total of $" + totalMoneyOwed.toFixed(2) + ". Does that sound accurate? Good!");

alert("Alright, time to enroll in class.");
















