//model/schema.js
//
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//make the user DB schema
var UserSchema = new Schema({
	messages : [],
});

//make the group db schema
var GroupSchema = new Schema({
	users : [UserSchema],
});


module.exports.User = mongoose.model('User', UserSchema );
module.exports.Group = mongoose.model('Group', GroupSchema );