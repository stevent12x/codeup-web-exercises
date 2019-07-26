

// const goodMorning = (greeting = 'Good morning', cohort = 'Betelgeuse') => {return `${greeting} ${cohort}!`};
// // // //
// // // // console.log(goodMorning());
// // // // console.log(goodMorning(undefined, "Ceres"));

(function () {

	let timer = 0;

		setInterval(function () {
			console.log(timer++*10)
		}, 10);

		const url = "http://www.omdbapi.com/?apikey=" + movieKey + "&t=batman";
		fetch(url).then(() => {
			console.log('ding');
		clearInterval(setInterval)
		});
})();