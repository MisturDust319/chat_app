import React, { Component } from 'react';
//import chat_field from './components/chat_field.js';

//import logo from './logo.svg';
//import './App.css';

function ChatField(props) {
  return (
    <p>Chat Field</p>
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
      chatHistory : ["Test history"],
    }
  }

  //submit function will submit user input
  submit

  render() {
    return (
      <div>
        <TextInput/>
        <ChatField/>
      </div>
    );
  }
}

export default App;
