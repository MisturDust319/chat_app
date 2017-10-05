
//chat_log holds chat messages based on UID
class ChatLog {
	constructor () {
		this.log = [];
		//init an empty array
	}

	//add a new chat to the log
	addChat(newMessage) {
		this.log.push(newMessage);
	}

	//getLog() returns the contents of ChatLog
	getLog() {
		return this.log;
	}

	//clearLog() empties chat_log
	function clearLog() {
		this.log = [];
	}
}


//make a user class to track Group members
class User {
	//init object
	constructor () {
		this.chat_backlog = new ChatLog();
		//chat_backlog holds all messages that
		//need to be sent to the user
		//when a request is made for chats,
		//it is emptied
		//when new chats are added
		//they are added here if they aren't by this user
	}

	//getMessages returns the chat backlog
	//and deletes the backlog
	getMessages() {
		const newMessages = this.chat_backlog.getLog();
		this.chat_backlog.clearLog();
		return newMessages;
	}

	//add a chat message to the backlog
	addChat(message) {
		this.chat_backlog.addChat(message);
	}
}

//Group holds the general data for a chatting group of Users
class Group {
	Constructor() {
		this.users = {};
		//init an empty object for users
	}

	//generateUserID
	//generates random numeric ID (0-999) for a user
	generateUserID() {
		return (Math.random() * 999).toString();
	}

	//add user adds a user
	//it adds a userid to the users array
	//it returns the UID
	addUser() {
		//create a UID, then make sure it's unique
		let uid = generateUserID();

		//generate new ID if UID is already in use
		while( uid in this.users) {
			uid = generateUserID();
		}

		//add a new User with an id of uid into the users array
		this.users[uid] = new User(uid);
		//return UID
		return uid;
	}

	//removes user by UID
	//returns true if successful, false otherwise
	removeUser(userID) {
		if(userID in this.users) {
			delete this.users[userID];
			return true;
		}
		else {
			return false;
		}
	}
}

//chat app class
//this actually manages things for the application
class ChatApp {
	constructor () {
		this.groups = {};
		//initialize an object to hodl the chat groups
	}

	//generateGroupID
	//generates random numeric ID (0-999) for a group
	generateGroupID() {
		return (Math.random() * 999).toString();
	}

	//make a new group
	addGroup() {
		//make a random group id
		let gid = generateGroupID();

		//keep trying till a unique one is made
		while(gid in this.groups) {
			gid = generateGroupID();
		}

		this.groups[gid] = new Group();

		return gid;
	}

	//removes group by GID
	//returns true if successful, false otherwise
	removeGroup(groupID) {
		if(groupID in this.group) {
			delete this.group[groupID];
			return true;
		}
		else {
			return false;
		}
	}

	//add user to a group
	//returns a user id
	addUser
}