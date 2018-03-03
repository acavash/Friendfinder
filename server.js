// Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

// Express
// express config to set up our server
var app = express(); // tells node we are creating an Express server
var PORT = process.env.PORT || 3000; // sets the port we will use

// BodyParser
// allows our server to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('app/public'));

// Router Controllers
// the below require statements point our server to the route files that tell our server how to respond when visitors request data from our URLs
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Listener: This will start our server
app.listen(PORT, function() {
	// console log to the terminal window to let us know everything's running smooth
	console.log('App listening on PORT: ' + PORT);

});
