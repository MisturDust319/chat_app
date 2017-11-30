const express = require('express');
const app = express();// include & init express
//prepare for session use
const session = require('express-session');


//include settings file
const settings = require('./src/settings.js');

const MongoClient = require('mongodb').MongoClient;
//set up MongoDB

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
)

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

//helper functions
//creates a random number from 0-999999999
//	to be used as a userID
//	returns the ID generated
function generateUserID(group_id) {
	//actually makes the id
	function getID() {
		return Math.random() * 999999999;
	}

	var id = getID();

	//generate a list of current userIDs
	user_ids = db.groups.find({ _id : group_id }).users.toArray();
	//keep making a new id until you know it's unique
	while(id in user_ids ) {
		id = getID();
	}

	//insert the new user id to the db
	//and give them a message array
	db.groups.update(
	{
		"_id" : group_id
	},
	{
		$set : { id : [] }
	}
	);

	return id;
}

//routes

//this method creates a chat group
app.get('/createGroup', (req, res) => {
	db.groups.insert({
			users : {},
		});
	}, (err, new_doc) => {
		req.session.group_id = new_doc._id;
		//this callback sets the new group ID in the requester's
		//	session for future reference
});
