"use strict";

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

// Exercise #1 //
const threelangs = users.filter(user => user.languages.length > 2)
console.log(threelangs);
//


// Exercise #2 //
const userEmail = users.map(user => user.email)
console.log(userEmail);
//


// Exercise #3 //
const sumOfYears = users.reduce(function (accumulutor, currentUser) {
	const currentSum = currentUser.yearsOfExperience;
	return accumulutor + currentSum;
},0)
console.log(sumOfYears)
const averageYear = (sumOfYears / users.length)
console.log(averageYear);
//


// Exercise #4 //
const longestEmail = userEmail.reduce(function (previous, currentEmail) {
	if (currentEmail.length > previous.length) {
		return currentEmail
	} else {
		return previous
	}
},"");
console.log(longestEmail);
//



// Exercise #5 //
const userNames = users.map(function (user) {
	return user.name
})
const singleString = userNames.reduce(function (prevName, currentName, index, array) {
	if (index == array.length - 1) {
		return prevName + currentName +'.'
	} else {
	return prevName + currentName + ', '}
}, "Your instructors are: ");
console.log(singleString);
//



// BONUS //
const languages = users.map(function(user) {
	return user.languages
})
const mergedlanguages = [].concat.apply([], languages);
[... new Set(mergedlanguages)];
const langList = mergedlanguages.filter((language, index) => mergedlanguages.indexOf(language)===index);
	const listString = langList.toString().replace(/,/g, ', ');
console.log(listString)
