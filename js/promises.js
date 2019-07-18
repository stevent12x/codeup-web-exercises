
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
	var gitHubKey = "65c8d327e1859052ccbec0e85dc0ac7fefd28f5c";
	return fetch("https://api.github.com/users/" + userName, {headers: {'Authorization': 'token ' + gitHubKey}})
		.then(response => response.json())
		.then(data => console.log(data.updated_at));
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




