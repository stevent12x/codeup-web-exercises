

const goodMorning = (greeting = 'Good morning', cohort = 'Betelgeuse') => {return `${greeting} ${cohort}!`};

console.log(goodMorning());
console.log(goodMorning(undefined, "Ceres"));