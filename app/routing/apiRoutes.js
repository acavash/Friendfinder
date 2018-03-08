// Load Data
// linking our routes to a series of data sources.
var friends_data = require('../data/friends.js');


// Routing
module.exports = function(app) {

	// API GET requests
	// link to the data stored in our app so that users can see the JSON data when they visit the below link
	app.get('/api/friends', function(req, res) {
		res.json(friends_data);
	});

	// API POST requests
	// below handles the user submitted form. In this app's case, the friend data to match that user to others that are in the data js files.
	app.post('/api/friends', function(req, res) {
		var body = req.body;
		console.log('post received')
		console.log(body)
		// body.scores is the scores array of new user
		// var a1 = [5,5,3,1,1,2,5,5,3,5]

		var outside = [];
		var outside2 = [];

		for(var k = 0; k < friends_data.length; k++) {
		var inside = []
		for (var i = 0; i < body.scores.length; i++) {
		var minus = Math.abs(friends_data[k].scores[i] - body.scores[i])
		inside.push(minus)
		}
		outside2.push(inside)
		}

		// console.log(outside2)
		for (var i = 0; i < outside2.length; i++) {
			// console.log(outside2[i])
			var sum2 = outside2[i].reduce(function(all,item,index) {
			return all+=item
			}, 0)
			// console.log(sum2)
			outside.push(sum2)
		}
		//outside is the sum of difference comparing the new score with the friends data
		console.log(outside)
		//index is a number that will change if the value is larger than
		var index = 0, lowest = outside[0]
		for (var i = 0; i < outside.length; i++) {
			if (outside[i] < lowest) {
				lowest = outside[i]
				index = i
			}
		}
		console.log(index)
		console.log(lowest)

		res.json(friends_data[index])



	});

}
