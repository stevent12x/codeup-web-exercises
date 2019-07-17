//rewrite this as an arrow function
//give greeting a default value of "Good Morning"
//give cohort a default value of "Betelgeuse"
//rewrite the return to use template strings instead of concatenation
//
// // function goodMorning(greeting,cohort){
// //     return greeting + " " + cohort + "!";
// // }

const goodMorning = (greeting = 'Good morning', cohort = 'Betelgeuse') => {return `${greeting} ${cohort}!`};

console.log(goodMorning());
console.log(goodMorning(undefined, "Ceres"));