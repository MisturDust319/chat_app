import React, { Component } from 'react';
//import chat_field from './components/chat_field.js';

//import logo from './logo.svg';
//import './App.css';

function ChatField(props) {
  return (
    <div>
      <h2>Chat</h2>
      <ul>{props.messages}</ul>
    </div>
  );
}

ChatField.propTypes = {
    messages: React.PropTypes.arrayOf(React.PropTypes.shape({
      username: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired,
    })).isRequired,
};

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
  //submit()

  render() {

    const messages = this.state.chatHistory.map((cur) =>{
      return (
        <li><b>{cur.username} :</b> <p>{cur.message}</p></li>
      );
    });

    return (
      <div>
        <TextInput/>
        <ChatField messages={messages}/>
      </div>
    );
  }
}

export default App;
