const express = require('express');
const app = express();// include & init express
//prepare for session use
const session = require('express-session');


//include settings file
const settings = require('./src/settings.js');

const MongoClient = require('mongodb').MongoClient;
//set up MongoDB
//include Mongoose schema
//const User = require('./model/schema').User;
const Group = require('./models/schema').Group;

//set up static assets 
app.use(express.static('public'));

//set up session settings
app.use(session({
	secret : settings.keys.session_secret_key,
	resave : true,
	saveUninitialized : false,
	cookie: { maxAge: 1000*60*60,
			secure : true }
	})
);

//a variable to hold the database obj
var db;

const mongoURL = 'mongodb://localhost:27017/chat_groups'; //the URL for the Mongo Server
//try to connect to the mongo client
MongoClient.connect(mongoURL, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3001, () => {
    console.log('listening on 3001')
  })
});

//routes

//this method creates a chat group
app.get('/createGroup', (req, res) => {
	//create a new group schema
	var group = new Group();
	console.log("Creating new group");

	group.users.push(
		{ messages : ["Created a new group"] }
	);

	group.save((err) => {
		console.log("Attempting to create new group");
		if(err) {
			//res.send()
			console.log(err);
		}
		else {
			//retrieve the user id, and the group id
			//and store them in a session
			req.session.gid = group.id;
			req.session.uid = group.users[0].id;
		}
	});
});
