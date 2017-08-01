require('./App.css');

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="messenger">
        <div className="header">
          <h2>Welcome to Celeb Chat</h2>
        </div>
        <AllMessages messages={this.state.messages} />
        <ChatForm onSend={this.sendHandler} />
      </div>
    );
  }
}

export default App;



{/* <div className="chatForm-container">
  <form onSubmit={} classname="chatForm">
    <label for="msgBody">Your message</label>
    <textarea id="msgBody"></textarea>
  </form>
</div> */}