import React, { Component } from 'react';

class Message extends Component {
  render() {
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div className={`message ${fromMe}`}>
        <div>
          { this.props.username }
        </div>
        <div>
          { this.props.message }
        </div>
      </div>
    );
  }
}