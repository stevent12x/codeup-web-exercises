
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


const getLastPush = function(userName) {
		const url = "https://api.github.com/users/"+userName+"/events";
		return fetch(url, {
			headers: {
				"Authorization": `token ${github_try2}`
			}
		})
			.then(response => response.json())
			.then(events => {
				for (let event of events) {
					if (event.type == 'PushEvent') {
						return event.created_at;
						// console.log(`${event.type} at ${event.created_at}`)
					}
				}
			})
		}

		console.log(getLastPush("stevent12x"));




