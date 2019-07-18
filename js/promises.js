
// fetch('https://api.github.com/users')
// // 	.then(response => response.json())
// // 	.then(usersArray => {
// // 	for (let user of usersArray) {
// // 		console.log(user.html_url)
// // 	}
// // });



function wait(num) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			if (resolve) {
				console.log("You\'ll see this after " + num + " seconds, baby.")
			} else if (reject) {
				console.log("Something went horribly, horribly wrong")
			}
		},(num*1000))
	})
};
wait(5);


function latestCommit(userName) {
	var gitHubKey = "c0dbd69b915898e45d051eb91ab76d6d";
	fetch("https://api.github.com/repos/"+userName+"/codeup-web-exercises/git/commits{/sha}", {headers: {'Authorization': 'token '+gitHubKey}})
		.then(response => response.json())
		.then(data => console.log(data));
		// 	return fetch("https://api.github.com/events/" + userName + "/public"), {headers: {'Authorization': 'token ' + gitHubKey}}
		// .then(response => response.json())
		// 			.then(data => console.log(data))
}
// 	//last commit = data.updated_at//
// 		.then(new Promise((resolve, reject) => {
// 			if (resolve) {
// 				console.log(data.updated_at)
// 			} else if (reject) {
// 				console("Something went turribly wrong");
// 			}
// 	}))

latestCommit("stevent12x")




