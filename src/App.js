import React, { Component } from 'react';
//import chat_field from './components/chat_field.js';

//import logo from './logo.svg';
//import './App.css';

function ChatField(props) {
  return (
    <p>Chat Field</p>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      test_name : "dave",
      test_text : "AFK",
    }
  }


  render() {
    return (
      <div>
        <ChatField/>
      </div>
    );
  }
}

export default App;
