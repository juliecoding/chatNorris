import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Celeb Chat</h2>
        </div>
        <div className="chatDisplay">

        </div>
        <div className="chatFormContainer">
          <form>
            <label for="msgBody">Your message</label>
            <textarea id="msgBody"></textarea>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
