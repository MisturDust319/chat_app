
//chat_log holds chat messages based on UID
class ChatLog {
	constructor () {
		this.log = [];
		//init an empty array
	}

	//add an object pair of message, UID to
	//log
	addChat(newMessage, UID) {
		this.log.push({
			message : newMessage,
			userID : UID,
		});
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
	constructor (userID) {
		this.id = userID;
		//assign a user ID
		//
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
		this.chat_backlog.addChat(this.id, message);
	}

	//generateUserID
	//generates random numeric ID (0-999) for a user
	generateUserID() {
		return Math.random() * 999;
	}
}