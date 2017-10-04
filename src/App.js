import React, { Component } from 'react';
//import chat_field from './components/chat_field.js';
import PropTypes from 'prop-types';

//import logo from './logo.svg';
//import './App.css';

//simple Chat message stateless component
function Chat(props) {
  return (
    <li>
      <b>{props.username}:</b> {props.text}
    </li>
  )
}

Chat.propTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

function ChatField(props) {
  return (
    <div>
      <h2>Chat</h2>
      <ul>{props.messages}</ul>
    </div>
  );
}

ChatField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({type: PropTypes.oneOf([Chat])})).isRequired,
};

function TextInput(props) {
  return (
    <div>
      <b>{props.username}</b>
      <form onSubmit={props.submit}>
        <input type="text" name="message" onChange={props.onChange}></input>
        <input type="submit" name="submit"></input>
      </form>
    </div>
  );
};

TextInput.propTypes = {
  submit: PropTypes.func.isRequired,
};

class App extends Component {

  constructor() {
    super();

    let name = "test name";

    this.state = {
      username : name,
      chatHistory : [{ username : name, message : "test message", key : 1 }],
      messageCount : 1,
      inputText : ""
    }

    this.submitMessage = this.submitMessage.bind(this);
    this.getInputText = this.getInputText.bind(this);
  }

  //submitMessage function will submit user input
  submitMessage(event) {
    //we need to include an event to catch the form's input data

    //increment the message count before each
    //message is added
    this.state.messageCount++;

    //the new message data to be added to the message list
    const newMessage = this.state.inputText;

    //copy chat history, append new chat data, then use
    //that to set state
    let newLog = this.state.chatHistory;
    newLog.push({username : this.state.username,
                message: newMessage,
                key : this.state.messageCount});
    this.setState({
      chatHistory : newLog,
    });

    event.preventDefault(); //prevent page refresh
  }

  //this function captures the changing text value
  //  of the input field
  getInputText(event) {
    this.setState({ inputText : event.target.value } );
  }

  render() {

    const messages = this.state.chatHistory.map((cur) =>{
      return (
        <Chat key={cur.key} username={cur.username} text={cur.message} />
      );
    });

    return (
      <div>
        <TextInput submit={this.submitMessage} onChange={this.getInputText}/>
        <ChatField messages={messages}/>
      </div>
    );
  }
}

export default App;
