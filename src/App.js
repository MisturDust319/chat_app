import React, { Component } from 'react';
//import chat_field from './components/chat_field.js';

//import logo from './logo.svg';
//import './App.css';

function ChatField(props) {
  return (
    <div>
      <h2>Chat</h2>
      <ul>{props.value}</ul>
    </div>
  );
}

function TextInput(props) {
  return (
    <div>
      <b>username</b>
      <form>
        <input type="text" name="message"></input>
        <input type="submit" name="submit"></input>
      </form>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      chatHistory : [{ username : "test name", message : "test message" }],
    }
  }

  //submit function will submit user input
  //submit

  render() {

    const messages = this.state.chatHistory.map((cur) =>{
      return (
        <li><b>cur.username :</b> <p>cur.message</p></li>
      );
    });

    return (
      <div>
        <TextInput/>
        <ChatField value={messages}/>
      </div>
    );
  }
}

export default App;
