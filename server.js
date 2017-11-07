const express = require('express');
const app = express();// include & init express

//include settings file
const settings = require('./src/settings.js');

const MongoClient = require('mongodb').MongoClient;
//set up MongoDB

//set up static assets 
app.use(express.static('public'));

//prepare for session use
const session = require('express-session');
app.use(session({secret : settings.session_secret_key}, cookie: { maxAge: 1000*60*60 }));


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
	db.groups.insert({
		"messages" : [],
	}, (err, new_doc) => {
		req.session.group_id = new_doc._id;
		//this callback sets the new group ID in the requester's
		//	session for future reference
	});
})